# Contributing to Bud Hunter 🌿

Thank you for your interest in contributing to Bud Hunter! This document provides guidelines and information for contributors.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Deployment Access](#deployment-access)
- [Submitting Changes](#submitting-changes)
- [Code Style](#code-style)
- [Questions?](#questions)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)
- Git
- A GitHub account

### Fork and Clone

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Bud-Hunter-.git
   cd Bud-Hunter-
   ```

3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/samiramulla82-sketch/Bud-Hunter-.git
   ```

## Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

4. **Run build to test:**
   ```bash
   npm run build
   npm run preview
   ```

## Making Changes

### Branch Naming

Create a descriptive branch for your changes:
```bash
git checkout -b feature/add-strain-filter
git checkout -b fix/rating-calculation
git checkout -b docs/update-readme
```

### Development Workflow

1. Make your changes in small, logical commits
2. Test your changes locally
3. Ensure the build passes: `npm run build`
4. Write clear commit messages

### Commit Messages

Follow this format:
```
type: brief description

Longer description if needed
```

Types:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add strain effects filter
fix: correct rating calculation for hybrid strains
docs: update deployment instructions
```

## Deployment Access

### Vercel Deployment Access

If you're actively contributing and need access to the Vercel deployment for testing:

1. **Request Access:**
   - Create an issue or comment on your PR requesting Vercel access
   - Include your Vercel account email address
   - Explain why you need access (e.g., testing deployment features)

2. **What Happens Next:**
   - The project maintainer will review your request
   - If approved, you'll receive an invitation to join the Vercel project
   - You'll be assigned the appropriate role (typically Viewer or Developer)

3. **Access Levels:**
   - **Viewer:** View deployments and logs (for most contributors)
   - **Developer:** Create deployments and manage environment variables (for active contributors)
   - **Admin:** Full access (maintainers only)

### When Do You Need Access?

You **do NOT** need Vercel access for:
- Regular code contributions
- Testing locally
- Creating pull requests

You **might need** Vercel access for:
- Testing deployment-specific features
- Debugging production issues
- Reviewing deployment logs

### Alternative Testing

Instead of requesting access, you can:
1. Deploy to your own Vercel account using the one-click deploy button
2. Test your changes in the preview deployment that's automatically created for your PR

For more details, see [DEPLOYMENT_VERCEL.md](./DEPLOYMENT_VERCEL.md).

## Submitting Changes

### Before Submitting

- [ ] Code follows the existing style
- [ ] Build passes locally (`npm run build`)
- [ ] Changes are tested in development mode
- [ ] Commit messages are clear and descriptive
- [ ] Branch is up to date with main

### Creating a Pull Request

1. **Push your branch:**
   ```bash
   git push origin your-branch-name
   ```

2. **Create PR on GitHub:**
   - Go to the repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template

3. **PR Description should include:**
   - What changes you made and why
   - How to test the changes
   - Screenshots (if UI changes)
   - Related issues (if any)

### After Submitting

- A preview deployment will be automatically created by Vercel
- Review the preview deployment to ensure your changes work
- Address any feedback from maintainers
- Keep your PR up to date with the main branch

## Code Style

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid using `any` type

### React

- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks

### Styling

- Use Tailwind CSS utility classes
- Follow the existing design patterns
- Ensure responsive design (mobile-first)

### Code Organization

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # Utility functions
└── App.tsx        # Main application component
```

## Questions?

### Getting Help

- **General Questions:** Open a [GitHub Discussion](https://github.com/samiramulla82-sketch/Bud-Hunter-/discussions)
- **Bug Reports:** Open an [Issue](https://github.com/samiramulla82-sketch/Bud-Hunter-/issues)
- **Security Issues:** Email the maintainer directly (do not create public issues)

### Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Vercel Deployment Guide](./DEPLOYMENT_VERCEL.md)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors.

### Expected Behavior

- Be respectful and considerate
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Respect differing viewpoints and experiences

### Unacceptable Behavior

- Harassment, discrimination, or offensive comments
- Personal attacks or trolling
- Publishing others' private information
- Any conduct that could be considered inappropriate in a professional setting

## Legal Notice

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to Bud Hunter! Your efforts help make this project better for everyone. 🙏
