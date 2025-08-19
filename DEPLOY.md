# GitHub Pages Deployment Instructions

## Quick Deploy (5 minutes)

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" button → "New repository"
3. Name it: `anderson-waivers`
4. Keep it public (for free GitHub Pages)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Push to GitHub
Run these commands in your terminal:

```bash
cd /Users/haotianbai/projects/anderson-waivers

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/anderson-waivers.git

# Create initial commit
git add .
git commit -m "Initial commit: UCLA Anderson EMBA waiver exam study materials"

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select:
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/docs"
5. Click "Save"

### Step 4: Access Your Site
After a few minutes, your site will be available at:
```
https://YOUR_USERNAME.github.io/anderson-waivers/
```

## What You Get

✅ **Live Website Features:**
- 📚 Complete crash notes with LaTeX math rendering
- 🎧 Embedded audio player for AI-generated podcast
- 📖 Comprehensive study guide
- ✍️ Interactive practice problems
- 🔗 Resource links and materials
- 📱 Mobile-responsive design
- 🖨️ Print-friendly layout

## Local Testing

To test the site locally before deploying:

### Option 1: Python Simple Server
```bash
cd docs
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Option 2: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `docs/index.html`
3. Select "Open with Live Server"

### Option 3: Direct File Access
Simply open `docs/index.html` in your browser (some features may be limited)

## Updating Content

### To Update Study Materials:
1. Edit the markdown files in `MGMTEX_405_Economic_Analysis/`
2. Commit and push changes:
```bash
git add .
git commit -m "Update study materials"
git push
```
3. GitHub Pages will automatically rebuild (takes 2-3 minutes)

### To Add New Audio Files:
1. Generate new podcasts with NotebookLM
2. Save to `docs/MGMTEX_405_Economic_Analysis/2_Podcast_Materials/`
3. Update audio source in `docs/index.html`
4. Commit and push

## Troubleshooting

### Site Not Loading?
- Wait 5-10 minutes after enabling GitHub Pages
- Check repository settings → Pages for build status
- Ensure repository is public

### Audio Not Playing?
- Check file path in index.html
- Ensure .m4a file is committed to repository
- Try different browser (Chrome/Firefox/Safari)

### Math Not Rendering?
- MathJax loads from CDN - check internet connection
- View browser console for errors (F12)

### Content Not Updating?
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 2-3 minutes for GitHub Pages to rebuild
- Check GitHub Actions tab for build status

## Custom Domain (Optional)

To use your own domain:
1. Add CNAME file to docs/ folder with your domain
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

## Share Your Site

Once deployed, share the link with your study group!

Example message:
```
Hey everyone! I've created a study portal for the Economics waiver exam:
https://YOUR_USERNAME.github.io/anderson-waivers/

Features:
- Complete crash notes with formulas
- AI-generated podcast for passive learning
- Practice problems with solutions
- All materials in one place

Good luck with your studies! 📚
```

## Support

- GitHub Pages Docs: https://docs.github.com/en/pages
- MathJax Docs: https://www.mathjax.org/
- Markdown Guide: https://www.markdownguide.org/

---

Remember to update YOUR_USERNAME with your actual GitHub username throughout these instructions!