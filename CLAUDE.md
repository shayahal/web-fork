# web-fork - Project Configuration

## Reference Global Conventions
See `/Users/shayyahal/CLAUDE.md` for team conventions, including Blogpost Workflow, API design, and authentication patterns.

## Project-Specific Setup

### Build & Development
- **Node version**: 16+ recommended (check with `node --version`)
- **Package manager**: npm
- **Build command**: `npm run build`
- **Dev server**: `npm start` (runs `develop:fast`) or `npm run develop`
- **Deploy**: `npm run deploy` (builds and pushes to GitHub Pages)

### Project Structure
- **Entry point**: `gatsby-config.js` (main configuration)
- **Key directories**:
  - `src/` - React components, templates, page components
  - `content/` - Blog post markdown files with frontmatter
  - `static/` - Static assets copied to public folder
  - `public/` - Built site output (generated)
  - `.cache/` - Gatsby cache (regenerated on build)

### Key Files & Architecture
- **gatsby-config.js** - Gatsby plugins and site metadata
- **gatsby-browser.js** - Browser-side configuration
- **gatsby-node.js** - Node-side configuration for page creation
- **publish-post.py** - Custom script for publishing blogposts
- **add-blogpost.sh** - Shell script for adding new posts
- **tailwind.config.js** - TailwindCSS configuration
- **postcss.config.js** - PostCSS processing

### Important Patterns
- **Content Management**: Markdown files with YAML frontmatter in `content/` directory
- **Dynamic Pages**: Generated automatically from markdown structure using `gatsby-node.js`
- **Styling**: TailwindCSS with @tailwindcss/typography for markdown content
- **Markdown Processing**: Uses remark plugins for:
  - `gatsby-remark-images` - Image optimization
  - `gatsby-remark-prismjs` - Code syntax highlighting
  - `gatsby-remark-responsive-iframe` - Responsive embeds
  - `gatsby-remark-smartypants` - Smart typography

### Gotchas & Common Issues
- **Cache issues**: Run `npm run clean` before building if you change plugin configs
- **Image optimization**: Requires proper frontmatter in markdown (alt text, sizes)
- **GitHub Pages deploy**: Ensure `homepage` in package.json matches your domain
- **D3/Leaflet conflicts**: May need manual script tag inclusion in HTML
- **Fast dev mode**: `GATSBY_EXPERIMENTAL_FAST_DEV=1` can cause occasional rebuilds - use standard `develop` if issues occur

### Development Workflow
1. Create new markdown file in `content/` with proper frontmatter
2. Run `npm start` for live preview
3. Edit markdown and React components
4. Test locally at `http://localhost:8000`
5. Build and deploy with `npm run deploy`

### Useful Commands
```bash
# Format all code
npm run format

# Serve production build locally
npm run serve

# Build with GitHub Pages prefix paths
npm run predeploy

# Link for testing npm packages locally
npm link
```

### Environment Notes
- No environment variables required for basic setup
- GitHub Pages token needed for automated `npm run deploy`
- Google Analytics requires tracking ID in `gatsby-config.js`
- Static site generation means no backend required

### Blogpost Integration
- **Custom Scripts**: `add-blogpost.sh` and `publish-post.py` handle content workflow
- **Frontmatter Fields**: `title`, `date`, `description`, `author`, `tags`
- **Publishing**: Markdown files automatically become pages in site structure
