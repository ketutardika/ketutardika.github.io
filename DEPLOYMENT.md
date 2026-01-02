# GitHub Pages Deployment Guide

This guide explains how to deploy your Next.js portfolio to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Repository named `username.github.io` (replace `username` with your GitHub username)
3. Git installed on your local machine

## Initial Setup

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it: `your-username.github.io` (e.g., `iketutardika.github.io`)
3. Set visibility to **Public**
4. Do NOT initialize with README (you already have a local repository)

### Step 2: Push Code to GitHub

If you haven't already connected your local repository to GitHub:

```bash
git remote add origin https://github.com/your-username/your-username.github.io.git
git branch -M main
git push -u origin main
```

If you already have a remote, just push:

```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
5. Save the settings

## Automated Deployment

The workflow in [.github/workflows/deploy.yml](.github/workflows/deploy.yml) will automatically:

1. Trigger on every push to the `main` branch
2. Install dependencies
3. Build your Next.js site
4. Deploy to GitHub Pages

### First Deployment

After pushing your code with the workflow file:

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You should see a workflow running
4. Wait for it to complete (usually 2-3 minutes)
5. Once successful, your site will be live at: `https://your-username.github.io`

## Manual Deployment

You can also trigger deployment manually:

1. Go to **Actions** tab in your repository
2. Click on **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Select the `main` branch
5. Click **Run workflow**

## Monitoring Deployments

### View Deployment Status

1. Go to **Actions** tab to see all workflow runs
2. Click on any workflow run to see detailed logs
3. Green checkmark = successful deployment
4. Red X = failed deployment (check logs for errors)

### View Live Site

After successful deployment, visit:
```
https://your-username.github.io
```

## Troubleshooting

### Deployment Fails

**Check the Actions logs:**
1. Go to Actions tab
2. Click on the failed workflow
3. Click on the failed job
4. Expand the step that failed to see error details

**Common issues:**

1. **Build errors**: Fix TypeScript/ESLint errors locally first
   ```bash
   npm run lint
   npm run build
   ```

2. **Dependencies errors**: Ensure package-lock.json is committed
   ```bash
   git add package-lock.json
   git commit -m "Add package-lock.json"
   git push
   ```

3. **Permissions error**: Ensure GitHub Pages is enabled in repository settings

### Site Not Updating

1. Wait 2-3 minutes after deployment completes
2. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Check if workflow completed successfully in Actions tab

### 404 Page Not Found

1. Ensure repository name is exactly `username.github.io`
2. Check that GitHub Pages source is set to "GitHub Actions"
3. Verify the workflow completed successfully

## Project Configuration

### Next.js Configuration

The [next.config.ts](next.config.ts) is already configured for static export:

```typescript
const nextConfig: NextConfig = {
  output: 'export',        // Enables static export
  images: {
    unoptimized: true,     // Required for static export
  },
  trailingSlash: true,     // Adds trailing slashes to URLs
};
```

### GitHub Actions Workflow

The workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml):

- Runs on: Push to `main` branch or manual trigger
- Uses: Node.js 20
- Steps: Checkout → Install → Build → Upload → Deploy
- Deploys: `out/` directory to GitHub Pages

## Updating Your Site

To update your portfolio:

1. Make changes locally
2. Test locally: `npm run dev`
3. Build locally: `npm run build`
4. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push
   ```
5. GitHub Actions will automatically rebuild and deploy

## Custom Domain (Optional)

To use a custom domain like `www.yourname.com`:

1. Buy a domain from a domain registrar
2. Add DNS records pointing to GitHub Pages:
   ```
   A    185.199.108.153
   A    185.199.109.153
   A    185.199.110.153
   A    185.199.111.153
   CNAME www.yourname.com → username.github.io
   ```
3. In repository Settings → Pages → Custom domain:
   - Enter your domain (e.g., `www.yourname.com`)
   - Click Save
4. Wait for DNS to propagate (can take 24-48 hours)
5. Enable "Enforce HTTPS"

## Environment-Specific Configuration

### Analytics

The site uses Vercel Analytics. For GitHub Pages deployment:

1. Analytics will still work but with limited features
2. Consider replacing with Google Analytics or Plausible
3. Update [app/layout.tsx](app/layout.tsx) if needed

### Contact Form

Since GitHub Pages is static:

1. Use a third-party service like:
   - Formspree (https://formspree.io)
   - Netlify Forms (requires Netlify deployment)
   - Google Forms
   - EmailJS (https://www.emailjs.com)

2. Add form integration to [components/sections/Contact.tsx](components/sections/Contact.tsx)

## Performance Tips

### Optimize Before Deployment

1. **Images**: Compress images before adding to `public/`
   - Use tools like TinyPNG, ImageOptim
   - Recommended: WebP format for better compression

2. **Bundle Size**: Check bundle size
   ```bash
   npm run build
   # Review the output for large bundles
   ```

3. **Unused Dependencies**: Remove unused packages
   ```bash
   npm prune
   ```

### CDN & Caching

GitHub Pages automatically:
- Serves via CDN (fast global delivery)
- Caches static assets
- Provides HTTPS

## Deployment Checklist

Before deploying:

- [ ] Test locally: `npm run dev`
- [ ] Build successfully: `npm run build`
- [ ] No TypeScript errors: `npm run lint`
- [ ] All content updated
- [ ] Social links correct
- [ ] Resume/CV file added (if applicable)
- [ ] Images optimized
- [ ] GitHub repository created
- [ ] Repository name is `username.github.io`
- [ ] Code pushed to GitHub
- [ ] GitHub Pages enabled
- [ ] Source set to "GitHub Actions"

After deploying:

- [ ] Site loads successfully
- [ ] All sections display correctly
- [ ] Theme toggle works
- [ ] Navigation works
- [ ] Social links work
- [ ] Responsive on mobile
- [ ] Test on different browsers

## Resources

- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## Support

If you encounter issues:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review GitHub Actions logs
3. Verify configuration files
4. Test build locally first

---

**Last Updated**: 2026-01-03
**Deployment Type**: User/Organization Site (username.github.io)
**Deployment Method**: GitHub Actions (Automated)
