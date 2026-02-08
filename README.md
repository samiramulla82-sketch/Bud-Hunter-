# 🌿 Bud Hunter

Community-driven cannabis strain ratings and reviews application built with React, TypeScript, and Vite.

## 🚀 Features

- Search and browse cannabis strains
- Add reviews and ratings
- Track strain effects and types (Indica, Sativa, Hybrid)
- Educational resources with links to Leafly, WikiLeaf, and SeedFinder
- Client-side storage (uses window.storage API)
- Responsive design with Tailwind CSS

## 📦 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/samiramulla82-sketch/Bud-Hunter-.git
cd Bud-Hunter-

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment

This application can be deployed to multiple platforms:

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/samiramulla82-sketch/Bud-Hunter-)

**Quick start:** Click the button above for one-click deployment.

**For detailed instructions**, including team access, permissions, and troubleshooting, see our [Comprehensive Vercel Deployment Guide](./DEPLOYMENT_VERCEL.md).

**Manual deployment:**

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

**Configuration:** `vercel.json` is already configured for SPA routing.

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/samiramulla82-sketch/Bud-Hunter-)

**Manual deployment:**

1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod`
3. Set build command: `npm run build`
4. Set publish directory: `dist`

**Configuration:** `netlify.toml` is already configured.

### Deploy to GitHub Pages

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

**Setup:**

1. Go to your repository Settings > Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push to the `main` branch to trigger deployment

The site will be available at: `https://samiramulla82-sketch.github.io/Bud-Hunter-/`

**Manual deployment:**

```bash
# Build the project
npm run build

# Deploy (if using gh-pages package)
npm install -g gh-pages
gh-pages -d dist
```

## 📂 Project Structure

```
Bud-Hunter-/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles (Tailwind)
├── public/              # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Pages deployment workflow
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── vercel.json          # Vercel deployment config
├── netlify.toml         # Netlify deployment config
└── README.md            # This file
```

## 💾 Storage

The application uses the `window.storage` API for client-side data persistence. This allows reviews and strain data to be stored locally in the browser.

## 📝 Usage

1. **Search Strains**: Use the search bar to find specific cannabis strains
2. **Add Review**: Click the "Add Review" button to submit a new strain review
3. **View Details**: Each strain card shows ratings, reviews, effects, and links to educational resources
4. **Educational Links**: Click on Leafly, SeedFinder, or Wikipedia links for more information about each strain

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

For detailed contribution guidelines, including development setup, deployment access, and code style, see our [Contributing Guide](./CONTRIBUTING.md).

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

**Need Vercel access?** See the [Deployment Access](./CONTRIBUTING.md#deployment-access) section in the contributing guide.

## ⚖️ Legal Notice

This application is for educational and informational purposes only. Please consume cannabis responsibly and in accordance with your local laws and regulations.

## 👨‍💻 Author

Created by Samir Mulla

## 📄 License

This project is open source and available under the MIT License.
