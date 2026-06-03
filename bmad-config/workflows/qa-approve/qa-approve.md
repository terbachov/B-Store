---
description: Approve implementation after validation
---

# R2-D2 QA - Approve Implementation

**Goal**: Approve implementation after validating all criteria are met.

**Scope**: This workflow validates implementation and transitions Jira issue status.

## Instructions

### Step 0: Collect Inputs

**If user has not provided a JIRA issue key**, ask:
- "Which Story should I approve? (provide JIRA key, e.g., PRAQ-106)"

---

### Step 1: Analyze Jira Story

#### 1.1 Fetch Main Story

Use `mcp0_getJiraIssue` with `responseContentFormat: "markdown"` to retrieve:

- **Summary** (titre)
- **Description** (user story format)
- **Acceptance Criteria** (extract and number as AC1, AC2, AC3...)
- **Current Status**
- **Dev Notes** / **QA Notes** (if present)

---

### Step 2: Validate Implementation

**CRITICAL**: Before approving, verify all criteria are met.

#### Validation Checklist

| Check | Question | Action if No |
|-------|----------|--------------|
| ✅ AC Coverage | Are all acceptance criteria implemented? | Request implementation |
| ✅ Code Quality | Does code follow .cursorrules? | Request fixes |
| ✅ Tests | Do tests pass (if applicable)? | Request test fixes |
| ✅ No Regressions | Are there no regressions? | Request fixes |
| ✅ Accessibility | Is WCAG compliant? | Request fixes |
| ✅ Performance | Is performance acceptable? | Request optimization |

---

### Step 3: Display Validation Results

Display validation results as structured output:

```markdown
## Implementation Validation for {ISSUE-KEY}

### Story Context
- **Jira Key**: {ISSUE-KEY}
- **Summary**: {Story title}
- **Current Status**: {Current status}

### Validation Checklist

| Check | Status | Notes |
|-------|--------|-------|
| AC Coverage | ✅/❌ | {Notes} |
| Code Quality | ✅/❌ | {Notes} |
| Tests | ✅/❌ | {Notes} |
| No Regressions | ✅/❌ | {Notes} |
| Accessibility | ✅/❌ | {Notes} |
| Performance | ✅/❌ | {Notes} |

### Verdict
❌ **REJECTED** - Criteria not met
OR
✅ **APPROVED** - All criteria met
```

---

### Step 4: Transition Issue Status (if approved)

If implementation is approved, transition the Jira issue:

Use `mcp0_transitionJiraIssue`:
- **cloudId**: 20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25
- **issueIdOrKey**: {ISSUE-KEY}
- **transition**: {transition_id}

**Common transitions:**
- "Done" - For completed stories
- "Ready for QA" - For stories ready for QA
- "In Review" - For stories under review

Note: Get available transitions using `mcp0_getTransitionsForJiraIssue` first.

---

### Step 5: Add Approval Comment

Add comment to Jira issue documenting approval:

```markdown
✅ Implementation Approved

**QA Engineer**: R2-D2 (AI Agent)
**Approved Date**: {date}

**Validation Results**:
- AC Coverage: ✅ All criteria met
- Code Quality: ✅ Meets conventions
- Tests: ✅ Passing
- No Regressions: ✅ None detected
- Accessibility: ✅ WCAG compliant
- Performance: ✅ Acceptable

Ready for merge.
```

---

### Step 6: Confirm with User

After validation:
- If **REJECTED**: "Implementation rejected. Please fix the issues above."
- If **APPROVED**: "Implementation approved and transitioned to {new status}."

---

## Example Approval Output

```markdown
## Implementation Validation for PRAQ-105

### Story Context
- **Jira Key**: PRAQ-105
- **Summary**: Implémenter page Catalogue avec affichage des produits en grille
- **Current Status**: In Review

### Validation Checklist

| Check | Status | Notes |
|-------|--------|-------|
| AC Coverage | ✅ | All 3 AC met |
| Code Quality | ✅ | Follows .cursorrules |
| Tests | ✅ | Manual tests generated |
| No Regressions | ✅ | No regressions detected |
| Accessibility | ✅ | Alt text added, keyboard nav works |
| Performance | ✅ | No performance issues |

### Verdict
✅ **APPROVED** - All criteria met

**Action**: Transitioning to "Done"
```

**Done!** Implementation validation completed. Beep beep! 🤖
