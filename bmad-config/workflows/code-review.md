---
description: Review code for quality and adherence to conventions
---

# Code Review Workflow

## Purpose
Review code changes for quality, adherence to conventions, and acceptance criteria.

## Steps

1. **Review Context**
   - Read the Jira story acceptance criteria
   - Check .cursorrules conventions
   - Understand the requirements

2. **Code Quality Check**
   - Functional components used (no class components)
   - TailwindCSS classes used (no inline styles)
   - Proper imports at file top
   - Component exports as default
   - No unused imports
   - No console errors

3. **Implementation Check**
   - Meets all acceptance criteria
   - Responsive design implemented
   - Navigation works correctly
   - Data flows correctly
   - Edge cases handled

4. **Accessibility Check**
   - Semantic HTML elements used
   - Images have alt text
   - Color contrast sufficient
   - Interactive elements keyboard accessible
   - ARIA labels where needed

5. **Performance Check**
   - No unnecessary re-renders
   - Efficient state management
   - Proper use of hooks
   - No memory leaks

6. **Feedback**
   - List any issues found
   - Suggest improvements
   - Approve if criteria met

## Agent: B-Store-Dev-TechLead or B-Store-QA
