---
description: Implement a Jira story following acceptance criteria
---

# Implement Story Workflow

## Purpose
Implement a Jira story in the B-Store project following the acceptance criteria.

## Steps

1. **Read Story**
   - Get the Jira story key (e.g., PRAQ-106)
   - Read the story description and acceptance criteria
   - Understand the requirements

2. **Review Context**
   - Read BMAD-context.txt for project context
   - Check .cursorrules for code conventions
   - Review existing similar code patterns

3. **Plan Implementation**
   - Identify which files to create/modify
   - Determine component structure
   - Plan the implementation approach

4. **Implement**
   - Create/modify components following .cursorrules
   - Use functional components with hooks
   - Use TailwindCSS for styling
   - Follow React Router patterns
   - Import data from `src/data/` as needed

5. **Test**
   - Start dev server: `npm run dev`
   - Navigate to affected pages
   - Test functionality against acceptance criteria
   - Check responsive design
   - Verify no console errors

6. **Commit**
   - Stage changes: `git add .`
   - Commit with Jira reference: `git commit -m "PRAQ-XXX: description"`
   - Push to GitHub

## Agent: B-Store-Dev-TechLead
