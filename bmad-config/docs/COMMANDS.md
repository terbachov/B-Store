# B-Store Commands Reference

## Development Commands

### Start Development Server
```bash
npm run dev
```
Starts the Vite development server at http://localhost:5173/

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Preview the production build locally

### Install Dependencies
```bash
npm install
```
Install all dependencies from package.json

## Git Commands

### Create Feature Branch
```bash
git checkout -b feature/PRAQ-XXX-description
```
Create a new branch for a Jira story

### Commit Changes
```bash
git commit -m "PRAQ-XXX: description"
```
Commit changes with Jira ticket reference

### Push to GitHub
```bash
git push origin feature/PRAQ-XXX-description
```
Push feature branch to GitHub

### Sync with Main
```bash
git checkout main
git pull origin main
```
Sync local main with remote

## Jira MCP Commands

### Create Jira Story
Use the Jira MCP tools to create stories in the PRAQ project:
- Cloud ID: 20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25
- Project Key: PRAQ
- Content Format: markdown

### Get Jira Issue
```javascript
mcp0_getJiraIssue({
  cloudId: "20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25",
  issueIdOrKey: "PRAQ-XXX"
})
```

### Search Jira Issues
```javascript
mcp0_searchJiraIssuesUsingJql({
  cloudId: "20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25",
  jql: "project = PRAQ"
})
```

## BMAD Workflow Commands

### Create Story Workflow
Use the `/create-story` workflow to create a new Jira story
- File: `bmad-config/workflows/create-story.md`
- Agent: B-Store-PO

### Implement Story Workflow
Use the `/implement-story` workflow to implement a Jira story
- File: `bmad-config/workflows/implement-story.md`
- Agent: B-Store-Dev-TechLead

### Code Review Workflow
Use the `/code-review` workflow to review code
- File: `bmad-config/workflows/code-review.md`
- Agent: B-Store-Dev-TechLead or B-Store-QA

### Add Product Workflow
Use the `/add-product` workflow to add a product to the catalogue
- File: `bmad-config/workflows/add-product.md`
- Agent: B-Store-Dev-TechLead

### Create Component Workflow
Use the `/create-component` workflow to create a new React component
- File: `bmad-config/workflows/create-component.md`
- Agent: B-Store-Dev-TechLead

## File Operations

### Add Product to products.json
1. Open `src/data/products.json`
2. Add new product object with next ID
3. Follow existing structure
4. Test in Catalogue page

### Create New Page
1. Create file in `src/pages/`
2. Follow page pattern from CODE_PATTERNS.md
3. Add route in `src/App.jsx`
4. Test navigation

### Create New Component
1. Create file in `src/components/`
2. Follow component pattern from CODE_PATTERNS.md
3. Import and use in page/component
4. Test functionality

## Testing Commands

### Run Tests (when implemented)
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm test -- --watch
```

### Run Tests with Coverage
```bash
npm test -- --coverage
```

## Common Workflows

### Implement a Jira Story
1. Read the story in Jira (PRAQ-XXX)
2. Create feature branch: `git checkout -b feature/PRAQ-XXX-description`
3. Use `/implement-story` workflow
4. Test locally: `npm run dev`
5. Commit: `git commit -m "PRAQ-XXX: description"`
6. Push: `git push origin feature/PRAQ-XXX-description`
7. Create Pull Request on GitHub

### Add a New Product
1. Use `/add-product` workflow
2. Update `src/data/products.json`
3. Test in Catalogue page
4. Commit and push

### Create a New Component
1. Use `/create-component` workflow
2. Create component file
3. Import and use
4. Test functionality
5. Commit and push
