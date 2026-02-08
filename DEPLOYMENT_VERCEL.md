# 🚀 Vercel Deployment Guide

This guide explains how to deploy the Bud Hunter application to Vercel and manage team access.

## Table of Contents

- [Quick Deployment](#quick-deployment)
- [Project Access & Permissions](#project-access--permissions)
- [Manual Deployment](#manual-deployment)
- [Environment Variables](#environment-variables)
- [Custom Domain Setup](#custom-domain-setup)
- [Troubleshooting](#troubleshooting)

## Quick Deployment

### Option 1: One-Click Deploy

Click the button below to deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/samiramulla82-sketch/Bud-Hunter-)

This will:
1. Clone the repository to your Vercel account
2. Automatically detect the Vite framework
3. Configure build settings from `vercel.json`
4. Deploy the application

### Option 2: Import from GitHub

1. Go to [vercel.com](https://vercel.com)
2. Sign in or create an account
3. Click "Add New..." → "Project"
4. Import this GitHub repository: `samiramulla82-sketch/Bud-Hunter-`
5. Vercel will auto-detect the configuration
6. Click "Deploy"

## Project Access & Permissions

### Do I Need Vercel Access?

**If you're deploying your own instance:** No special access needed. Just use the one-click deploy button or import the project to your own Vercel account.

**If you're contributing to the main deployment:** You'll need to be invited to the Vercel team/project.

### Requesting Access to the Vercel Project

If you need access to an existing Vercel deployment:

1. **Contact the Project Owner:**
   - Ask the repository owner (Samir Mulla) to invite you to the Vercel project
   - Provide your Vercel account email

2. **What You'll Need:**
   - A Vercel account (free tier is sufficient)
   - Your email address associated with Vercel

3. **Project Owner - How to Grant Access:**
   - Go to the Vercel project dashboard
   - Navigate to "Settings" → "Members"
   - Click "Invite Member"
   - Enter the email address
   - Select role (Viewer, Developer, or Admin)
   - Send invitation

### Access Roles

- **Viewer:** Can view deployments and logs
- **Developer:** Can create deployments and manage environment variables
- **Admin:** Full access including project settings and team management

## Manual Deployment

### Using Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   # First deployment (will ask configuration questions)
   vercel
   
   # Production deployment
   vercel --prod
   ```

4. **Follow the prompts:**
   - Set up and deploy? Yes
   - Which scope? Select your account/team
   - Link to existing project? No (for first time)
   - Project name? (default: Bud-Hunter-)
   - In which directory is your code located? ./
   - Override settings? No

### Configuration

The project includes a `vercel.json` file that configures:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures:
- Proper build process
- Correct output directory
- SPA routing (all routes redirect to index.html)

## Environment Variables

Currently, this project doesn't require environment variables as it uses client-side storage. However, if you need to add them:

### Via Vercel Dashboard

1. Go to your project on Vercel
2. Navigate to "Settings" → "Environment Variables"
3. Add your variables
4. Redeploy for changes to take effect

### Via Vercel CLI

```bash
vercel env add VARIABLE_NAME
```

## Custom Domain Setup

### Adding a Domain

1. Go to your project on Vercel
2. Navigate to "Settings" → "Domains"
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Vercel will automatically provision SSL certificates

### Supported Domain Types

- Apex domain (example.com)
- Subdomain (app.example.com)
- Vercel-provided domain (project-name.vercel.app)

## Troubleshooting

### Build Failures

**Issue:** Build fails with "Module not found"
```bash
Solution: Clear Vercel cache and redeploy
vercel --prod --force
```

**Issue:** TypeScript errors during build
```bash
Solution: Check tsconfig.json and fix type errors locally first
npm run build
```

### Routing Issues

**Issue:** 404 on page refresh
```bash
Solution: Ensure vercel.json has the rewrites configuration
```

### Deployment Permissions

**Issue:** "You don't have permission to deploy"
```bash
Solution: 
1. Check you're logged in: vercel whoami
2. Ensure you're added to the project team
3. Contact project owner for access
```

### Preview Deployments

**Issue:** Want to preview changes before production
```bash
Solution: Use preview deployments
vercel        # Creates preview deployment
vercel --prod # Only when ready for production
```

## Continuous Deployment

### Automatic Deployments from GitHub

Once connected, Vercel automatically:
- Deploys production on push to `main` branch
- Creates preview deployments for pull requests
- Comments on PRs with preview URLs

### Disabling Auto-Deploy

If needed, you can disable automatic deployments:
1. Go to project "Settings" → "Git"
2. Toggle "Production Branch" or "Preview Deployments"

## Support

### Getting Help

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support:** [vercel.com/support](https://vercel.com/support)
- **Project Issues:** [GitHub Issues](https://github.com/samiramulla82-sketch/Bud-Hunter-/issues)

### Common Resources

- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Vite on Vercel Guide](https://vercel.com/docs/frameworks/vite)
- [Custom Domains Guide](https://vercel.com/docs/custom-domains)
- [Environment Variables Guide](https://vercel.com/docs/environment-variables)

## Next Steps

After successful deployment:

1. ✅ Test the deployed application
2. ✅ Configure custom domain (optional)
3. ✅ Set up monitoring and analytics
4. ✅ Configure team access if needed
5. ✅ Enable preview deployments for PRs

---

**Note:** This project is already configured for Vercel deployment. The `vercel.json` file contains all necessary settings for optimal performance.
