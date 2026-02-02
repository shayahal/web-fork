#!/usr/bin/env python3
"""
Test script to verify all travel blog posts are rendering correctly.
Uses Playwright to automate browser testing.
"""

from playwright.sync_api import sync_playwright
import sys

def test_blog_posts():
    """Test all newly created travel blog posts."""

    # Define all blog posts to test (both Hebrew and English)
    posts = [
        {
            "name": "Colombia August 2023",
            "url": "http://localhost:8000/blog/colombia-august-2023/",
            "selectors": ["h1", "img"],
            "language": "he"
        },
        {
            "name": "Colombia August 2023 (EN)",
            "url": "http://localhost:8000/blog/colombia-august-2023-en/",
            "selectors": ["h1", "img"],
            "language": "en"
        },
        {
            "name": "Colombia Bogotá",
            "url": "http://localhost:8000/blog/colombia-bogota/",
            "selectors": ["h1", "img"],
            "language": "he"
        },
        {
            "name": "Colombia Cartagena",
            "url": "http://localhost:8000/blog/colombia-cartagena/",
            "selectors": ["h1", "img"],
            "language": "he"
        },
        {
            "name": "Colombia Caribbean",
            "url": "http://localhost:8000/blog/colombia-caribbean/",
            "selectors": ["h1", "img"],
            "language": "he"
        },
        {
            "name": "Colombia Medellín",
            "url": "http://localhost:8000/blog/colombia-medellin/",
            "selectors": ["h1", "img"],
            "language": "he"
        },
        {
            "name": "Colombia Salento",
            "url": "http://localhost:8000/blog/colombia-salento/",
            "selectors": ["h1", "img"],
            "language": "he"
        },
        {
            "name": "Colombia Guatapé",
            "url": "http://localhost:8000/blog/colombia-guatape/",
            "selectors": ["h1", "img"],
            "language": "he"
        },
        {
            "name": "Tokyo & Kyoto Cocktails",
            "url": "http://localhost:8000/blog/tokyo-kyoto-cocktails/",
            "selectors": ["h1", "img"],
            "language": "he"
        },
        {
            "name": "Lima Culinary Paradise",
            "url": "http://localhost:8000/blog/peru-lima/",
            "selectors": ["h1", "img"],
            "language": "he"
        }
    ]

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        passed = 0
        failed = 0

        for post in posts:
            try:
                print(f"Testing: {post['name']}...", end=" ")
                page.goto(post['url'])
                page.wait_for_load_state('networkidle')

                # Check for title
                title = page.query_selector('h1')
                if not title:
                    print("❌ FAILED - No title found")
                    failed += 1
                    continue

                # Check for images
                images = page.query_selector_all('img')
                if not images:
                    print("⚠️  WARNING - No images found")
                    # Don't fail, just warn

                # Check page has content
                content = page.content()
                if len(content) < 500:
                    print("❌ FAILED - Page content too short")
                    failed += 1
                    continue

                print("✅ PASSED")
                passed += 1

            except Exception as e:
                print(f"❌ FAILED - {str(e)}")
                failed += 1

        browser.close()

        print("\n" + "="*50)
        print(f"Test Results: {passed} passed, {failed} failed")
        print("="*50)

        return 0 if failed == 0 else 1

if __name__ == "__main__":
    sys.exit(test_blog_posts())
