# B-Store

React-based e-commerce demonstration application built with modern web technologies.

## 🚀 Project Overview

B-Store is a modern e-commerce demo showcasing best practices in React development, state management, and UI design. The application features a product catalogue with filtering, shopping cart functionality, and a responsive design.

## 🛠 Tech Stack

- **Frontend Framework**: React 18 (createRoot, StrictMode)
- **Build Tool**: Vite v5.4.21
- **Routing**: React Router DOM
- **Styling**: TailwindCSS v3
- **Package Manager**: npm
- **Version Control**: Git
- **Project Management**: Jira (PRAQ project on alithya.atlassian.net)

## 📁 Project Structure

```
B-Store/
├── src/
│   ├── components/      # Reusable React components
│   │   └── Layout.jsx  # Navigation layout component
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Catalogue.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   └── Login.jsx
│   ├── data/           # Hardcoded JSON data
│   │   ├── products.json    # 20 products
│   │   ├── categories.json  # 4 categories
│   │   └── users.json       # 2 test users
│   ├── App.jsx         # Main app with React Router
│   ├── main.jsx        # React entry point
│   └── index.css       # TailwindCSS directives
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/terbachov/B-Store.git
cd B-Store

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173/`

## 🎨 Features

### Implemented
- **Catalogue Page**: Product listing with category filtering
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Product Images**: High-quality Unsplash images for all products
- **Category Filter**: Filter products by Electronics, Clothing, Accessories, Home
- **Navigation**: Clean navigation with Layout component

### Planned (Jira Stories)
- **PRAQ-108**: State Management with Context API for cart
- **PRAQ-106**: Product Detail page
- **PRAQ-107**: Shopping Cart page
- Checkout page
- Login page

## 📝 Code Conventions

### React Components
- Use functional components with hooks
- Component names in PascalCase
- File names in PascalCase (e.g., `Layout.jsx`)
- Use JSX for component structure
- Export components as default

### Styling
- Use TailwindCSS utility classes
- Prefer utility classes over custom CSS
- Use responsive prefixes (sm:, md:, lg:)
- Follow mobile-first approach

### File Organization
- Keep components in `src/components/`
- Keep pages in `src/pages/`
- Keep data in `src/data/`
- One component per file

### Git Workflow
- Branch naming: `feature/PRAQ-XXX-description`
- Commit messages: descriptive and concise
- Reference Jira tickets in commits: `PRAQ-XXX`

## 🔧 Development Workflow

1. **Pick a Jira story** from PRAQ project
2. **Create feature branch**: `git checkout -b feature/PRAQ-XXX-description`
3. **Implement the feature** following the story's acceptance criteria
4. **Test locally**: `npm run dev`
5. **Commit changes**: `git commit -m "PRAQ-XXX: description"`
6. **Push to GitHub**: `git push origin feature/PRAQ-XXX-description`
7. **Create Pull Request** on GitHub
8. **Merge after review**

## 📊 Jira Integration

- **Project**: PRAQ
- **Workspace**: alithya.atlassian.net
- **Current Stories**:
  - PRAQ-105: Implémenter page Catalogue ✅ (Completed)
  - PRAQ-106: Implémenter page ProductDetail (Pending)
  - PRAQ-107: Implémenter page Cart (Pending)
  - PRAQ-108: Implémenter State Management (Pending)

## 🤖 AI Integration

This project is configured with AI-assisted development using Windsurf AI:
- **Context**: Project structure, tech stack, and code patterns
- **Agents**: PO (Product Owner), Dev/TechLead, QA
- **Workflows**: Custom workflows for story creation, implementation, and review
- **Jira MCP**: Direct integration with Jira for story management

## 🧪 Testing

```bash
# Run tests (when implemented)
npm test

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 License

This project is a demonstration/learning project.

## 👥 Team

- **Developer**: Badis Assas
- **Jira Project**: PRAQ
- **GitHub**: https://github.com/terbachov/B-Store

## 🔄 Version History

- **v0.1.0** (2026-06-02): Initial setup with React, Vite, TailwindCSS, React Router
- **v0.2.0** (2026-06-02): Catalogue page with filtering and 20 products
