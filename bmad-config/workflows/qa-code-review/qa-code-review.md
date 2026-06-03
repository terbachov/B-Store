---
description: Perform adversarial code quality review
---

# R2-D2 QA - Code Review

**Goal**: Perform adversarial code quality review and identify real issues.

**Scope**: This workflow performs code review against acceptance criteria and code conventions.

## Instructions

### Step 0: Collect Inputs

**If user has not provided a JIRA issue key**, ask:
- "Which Story should I review code for? (provide JIRA key, e.g., PRAQ-106)"

**If user has not provided file path**, ask:
- "Which file(s) should I review? (provide file path)"

---

### Step 1: Analyze Jira Story

#### 1.1 Fetch Main Story

Use `mcp0_getJiraIssue` with `responseContentFormat: "markdown"` to retrieve:

- **Summary** (titre)
- **Description** (user story format)
- **Acceptance Criteria** (extract and number as AC1, AC2, AC3...)
- **Dev Notes** / **QA Notes** (if present)

---

### Step 2: Read Code Files

Use `read_file` to read the code files to review:
- Component files
- Page files
- Any modified files

---

### Step 3: Perform Code Review

**CRITICAL**: Find real issues (minimum 3-10 issues). Never accept "looks good" without validation.

#### Review Categories

##### 1. Code Quality
- Follows .cursorrules conventions
- Functional components used (no class components)
- TailwindCSS classes used (no inline styles)
- Proper imports at file top
- Component exports as default
- No unused imports

##### 2. Functionality
- Meets all acceptance criteria
- Implementation matches requirements
- Navigation works correctly
- Data flows correctly
- Edge cases handled

##### 3. Accessibility
- Semantic HTML elements used
- Images have alt text
- Color contrast sufficient
- Interactive elements keyboard accessible
- ARIA labels where needed

##### 4. Performance
- No unnecessary re-renders
- Efficient state management
- Proper use of hooks
- No memory leaks

##### 5. Edge Cases
- Empty content handling
- Error handling
- Missing data handling
- Special characters

---

### Step 4: Format Review Output

Display review findings as a structured Markdown table:

```markdown
## Code Review for {FILE_PATH}

### Story Context
- **Jira Key**: {ISSUE-KEY}
- **Summary**: {Story title}
- **Acceptance Criteria**: {Brief summary}

### Review Findings

| # | Category | Severity | Issue | Location | Recommendation |
|---|----------|----------|-------|----------|----------------|
| 1 | Code Quality | High | Issue description | Line X | Fix recommendation |
| 2 | Accessibility | Medium | Issue description | Line Y | Fix recommendation |
| 3 | Performance | Low | Issue description | Line Z | Fix recommendation |
| ... | ... | ... | ... | ... | ... |

### Summary
- **Total Issues**: X
- **High Severity**: X
- **Medium Severity**: X
- **Low Severity**: X

### Verdict
❌ **REJECTED** - Issues found that must be fixed
OR
✅ **APPROVED** - Code meets all criteria
```

**Severity Levels:**
- **High**: Must fix before merge (critical bugs, accessibility violations)
- **Medium**: Should fix before merge (performance issues, edge cases)
- **Low**: Nice to fix (style improvements, minor issues)

---

### Step 5: Provide Actionable Recommendations

For each issue found, provide:
1. Clear description of the problem
2. Why it's a problem
3. How to fix it (code example if applicable)
4. File location and line number

---

### Step 6: Ask for Confirmation

After presenting review findings:
- "I found {X} issues in the code review."
- "Would you like me to:"
  - ✅ **Generate fix suggestions** - Provide code fixes for issues
  - 🔄 **Re-review** - Review again after fixes
  - ✅ **Approve** - Approve if issues are acceptable

---

## Example Review Output

```markdown
## Code Review for src/pages/Catalogue.jsx

### Story Context
- **Jira Key**: PRAQ-105
- **Summary**: Implémenter page Catalogue avec affichage des produits en grille
- **Acceptance Criteria**: 2-3 colonnes par ligne, filtre par catégorie, images Unsplash

### Review Findings

| # | Category | Severity | Issue | Location | Recommendation |
|---|----------|----------|-------|----------|----------------|
| 1 | Accessibility | High | Missing alt text on product images | Line 42 | Add alt={product.name} to img tag |
| 2 | Code Quality | Medium | Unused import useState | Line 5 | Remove unused import |
| 3 | Edge Case | Medium | No handling for empty product list | Line 30 | Add empty state message |
| 4 | Performance | Low | Missing React.memo on ProductCard | Line 38 | Wrap with React.memo |

### Summary
- **Total Issues**: 4
- **High Severity**: 1
- **Medium Severity**: 2
- **Low Severity**: 1

### Verdict
❌ **REJECTED** - High severity accessibility issue must be fixed
```

**Done!** Code review completed. Beep beep! 🤖
