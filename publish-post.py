#!/usr/bin/env python3
"""publish-post.py — Publish an Obsidian note pair to the Gatsby blog.

Usage:
    python3 publish-post.py <slug>

Example:
    python3 publish-post.py event-organization-logistics

Expects these two files in Writing/Prod/:
    <slug>.md      ← Hebrew content, must have: title, description, tags
    <slug>-en.md   ← English content, must have: title, description
"""

import sys
import re
import shutil
from pathlib import Path
from datetime import date

VAULT_PROD = Path.home() / "Documents" / "Shay's Vault" / "Writing" / "Prod"
VAULT_ROOT = Path.home() / "Documents" / "Shay's Vault"
BLOG_PATH  = Path.home() / "Code" / "web-fork" / "content" / "blog"


def parse_frontmatter(text: str) -> tuple[dict, str]:
    """Split YAML frontmatter from body. Returns (fields_dict, body_str)."""
    if not text.startswith("---"):
        return {}, text
    end = text.find("---", 3)
    if end == -1:
        return {}, text
    raw  = text[3:end]
    body = text[end + 3:].lstrip("\n")

    fields: dict = {}
    lines = raw.split("\n")
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.strip() or line.startswith("#") or ":" not in line:
            i += 1
            continue
        key, _, val = line.partition(":")
        key = key.strip()
        val = val.strip()
        if val.startswith("["):                          # inline list: [a, b]
            inner = val.strip("[]")
            fields[key] = [t.strip().strip("'\"") for t in inner.split(",") if t.strip()]
        elif val == "":                                  # block list: - item
            items = []
            i += 1
            while i < len(lines) and lines[i].strip().startswith("-"):
                items.append(lines[i].strip().lstrip("-").strip().strip("'\""))
                i += 1
            fields[key] = items
            continue
        else:
            fields[key] = val.strip("'\"")
        i += 1
    return fields, body


def strip_wikilinks(text: str) -> str:
    """Convert Obsidian-style links to plain markdown."""
    text = re.sub(r"!\[\[([^\]]+)\]\]", lambda m: f"![](./{m.group(1)})", text)
    text = re.sub(r"\[\[([^\]|]+)\|([^\]]+)\]\]", r"\2", text)
    text = re.sub(r"\[\[([^\]]+)\]\]", r"\1", text)
    return text


def collect_wikilink_images(text: str) -> list[str]:
    """Return image filenames from ![[image.png]] wikilinks."""
    return re.findall(r"!\[\[([^\]]+)\]\]", text)


def find_in_vault(name: str) -> Path | None:
    for p in VAULT_ROOT.rglob(name):
        return p
    return None


def yaml_single(value: str) -> str:
    """Wrap in single quotes, escaping any internal single quotes (YAML style)."""
    return "'" + value.replace("'", "''") + "'"


def main() -> None:
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    slug   = sys.argv[1].strip("/")
    he_src = VAULT_PROD / f"{slug}.md"
    en_src = VAULT_PROD / f"{slug}-en.md"

    for path in (he_src, en_src):
        if not path.exists():
            print(f"Error: not found → {path}")
            sys.exit(1)

    he_raw = he_src.read_text("utf-8")
    en_raw = en_src.read_text("utf-8")

    he_fm, he_body = parse_frontmatter(he_raw)
    en_fm, en_body = parse_frontmatter(en_raw)

    for key in ("title", "description"):
        for lang, fm in (("Hebrew", he_fm), ("English", en_fm)):
            if key not in fm:
                print(f"Error: '{key}' missing from {lang} frontmatter ({slug}.md)")
                sys.exit(1)

    tags      = he_fm.get("tags", [])
    today     = date.today().isoformat()
    tags_yaml = ", ".join(f"'{t}'" for t in tags)

    he_dir = BLOG_PATH / slug
    en_dir = BLOG_PATH / f"{slug}-en"
    he_dir.mkdir(parents=True, exist_ok=True)
    en_dir.mkdir(parents=True, exist_ok=True)

    # Copy images referenced in either note
    for img_name in {*collect_wikilink_images(he_raw), *collect_wikilink_images(en_raw)}:
        src = find_in_vault(img_name)
        if src:
            for d in (he_dir, en_dir):
                shutil.copy2(src, d / img_name)
            print(f"  Copied image: {img_name}")
        else:
            print(f"  Warning: image not found in vault: {img_name}")

    he_body = strip_wikilinks(he_body).strip()
    en_body = strip_wikilinks(en_body).strip()

    def write_post(dest: Path, title: str, desc: str, direction: str, lang: str) -> None:
        content = (
            f'---\n'
            f'title: "{title}"\n'
            f"date: '{today}'\n"
            f"description: {yaml_single(desc)}\n"
            f"direction: {direction}\n"
            f"language: '{lang}'\n"
            f"tags: [{tags_yaml}]\n"
            f"---\n\n"
            f"{he_body if lang == 'he' else en_body}\n"
        )
        (dest / "index.md").write_text(content, "utf-8")

    write_post(he_dir, he_fm["title"], he_fm["description"], "rtl", "he")
    write_post(en_dir, en_fm["title"], en_fm["description"], "ltr", "en")

    print(f"\n✓  {slug}")
    print(f"   {he_dir}/index.md  ({he_fm['title']})")
    print(f"   {en_dir}/index.md  ({en_fm['title']})")
    print(f"\nNext steps:")
    print(f"  cd ~/Code/web-fork")
    print(f"  git add content/blog/{slug} content/blog/{slug}-en")
    print(f'  git commit -m "Add post: {he_fm["title"]}"')
    print(f"  npm run deploy")


if __name__ == "__main__":
    main()
