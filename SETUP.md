# Website Setup Guide

## 📋 Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js) or **yarn** or **bun**
- A code editor (VS Code recommended)

### Installing Node.js

If you don't have Node.js installed, you can install it using:

**Using nvm (recommended):**
```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js LTS
nvm install --lts
nvm use --lts
```

**Or download directly from:** https://nodejs.org/

---

## 🚀 Quick Start

### Step 1: Install Dependencies

Navigate to the project directory and install all required packages:

```bash
cd /home/chimera1/Downloads/mywebcode1-main
npm install
```

**Alternative package managers:**
```bash
# Using yarn
yarn install

# Using bun (if installed)
bun install
```

### Step 2: Start Development Server

Run the development server:

```bash
npm run dev
```

The website will be available at: **http://localhost:8080**

The development server includes:
- ✅ Hot module replacement (instant updates)
- ✅ Auto-reload on file changes
- ✅ Error overlay in the browser

### Step 3: View Your Website

Open your browser and navigate to:
```
http://localhost:8080
```

---

## 📦 Project Dependencies

### Core Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18.3.1 | React library for building UI |
| `react-dom` | ^18.3.1 | React DOM renderer |
| `react-router-dom` | ^6.30.1 | Client-side routing |
| `vite` | ^5.4.19 | Build tool and dev server |

### UI Components (shadcn/ui via Radix UI)

| Package | Purpose |
|---------|---------|
| `@radix-ui/react-*` | Accessible UI primitives (accordion, dialog, tabs, etc.) |
| `lucide-react` | Icon library |
| `tailwindcss` | Utility-first CSS framework |
| `tailwindcss-animate` | Animation utilities |
| `class-variance-authority` | Component variant management |
| `clsx` & `tailwind-merge` | Conditional class utilities |

### Form Handling

| Package | Purpose |
|---------|---------|
| `react-hook-form` | Form state management |
| `@hookform/resolvers` | Form validation resolvers |
| `zod` | Schema validation |

### Additional Features

| Package | Purpose |
|---------|---------|
| `@emailjs/browser` | Email service integration |
| `@tanstack/react-query` | Data fetching and caching |
| `recharts` | Chart library |
| `date-fns` | Date utility library |
| `sonner` | Toast notifications |
| `next-themes` | Theme management |

### Development Dependencies

| Package | Purpose |
|---------|---------|
| `typescript` | Type safety |
| `@vitejs/plugin-react-swc` | Fast React refresh |
| `eslint` | Code linting |
| `autoprefixer` | CSS vendor prefixing |
| `postcss` | CSS processing |

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 8080) |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 📁 Project Structure

```
mywebcode1-main/
├── src/
│   ├── components/        # React components
│   │   ├── sections/     # Page sections (Hero, About, Resume, etc.)
│   │   └── ui/           # Reusable UI components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── assets/           # Images and static files
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static public assets
├── package.json          # Dependencies and scripts
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 🌐 Port Configuration

The development server runs on **port 8080** by default.

To change the port, edit `vite.config.ts`:

```typescript
server: {
  host: "::",
  port: 8080,  // Change this to your preferred port
}
```

---

## 🔧 Troubleshooting

### Port Already in Use

If port 8080 is already in use:

```bash
# Kill the process using port 8080
# Linux/Mac:
lsof -ti:8080 | xargs kill -9

# Or change the port in vite.config.ts
```

### Dependencies Installation Issues

If you encounter issues installing dependencies:

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

If you see TypeScript errors:

```bash
# Ensure TypeScript is properly installed
npm install --save-dev typescript @types/react @types/react-dom
```

---

## 📝 Environment Variables

Currently, no environment variables are required. If you need to add any:

1. Create a `.env` file in the root directory
2. Add your variables:
   ```
   VITE_API_KEY=your_api_key
   ```
3. Access in code: `import.meta.env.VITE_API_KEY`

---

## 🚢 Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

---

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] Dependencies installed successfully (`npm install` completed)
- [ ] Development server starts (`npm run dev` runs without errors)
- [ ] Website loads at http://localhost:8080
- [ ] All sections are visible (Hero, About, Resume, Projects, Labs, Contact)
- [ ] Navigation works correctly
- [ ] No console errors in browser DevTools

---

## 🆘 Need Help?

If you encounter any issues:

1. Check the browser console for errors
2. Check the terminal for build errors
3. Ensure all dependencies are installed
4. Verify Node.js version is compatible (v18+)

---

**Last Updated:** Based on current package.json configuration

