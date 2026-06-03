---
description: Generate manual test cases with chat-friendly format before Jira push
---

# R2-D2 QA - Generate Manual Test Cases

**Goal**: Generate comprehensive manual test cases from Jira Story and display in chat-friendly format before pushing to JIRA.

**Scope**: This workflow generates **manual test cases** (human-executable step-by-step instructions).

## Output Format

**IMPORTANT**: The output MUST be provided in TWO formats:

1. **Chat Response**: Display test cases as **Markdown tables** directly in the chat (NOT as files)
2. **JIRA**: Push test cases to JIRA after user confirmation (if X-Ray available)

---

## Instructions

### Step 0: Collect Inputs

**If user has not provided a JIRA issue key**, ask:
- "Which Story should I generate manual test cases for? (provide JIRA key, e.g., PRAQ-106)"

---

### Step 1: Analyze Jira Story

#### 1.1 Fetch Main Story

Use `mcp0_getJiraIssue` with `responseContentFormat: "markdown"` to retrieve:

- **Summary** (titre)
- **Description** (user story format)
- **Acceptance Criteria** (extract and number as AC1, AC2, AC3...)
- **Dev Notes** / **QA Notes** (if present)

#### 1.2 Analyze Parent Epic/Feature

If story has a **parent** field:
- Fetch parent epic using `mcp0_getJiraIssue`
- Extract epic-level acceptance criteria
- Understand broader context

---

### Step 2: Generate Test Cases

**CRITICAL SCOPING RULE**: Only create test cases for features **explicitly mentioned in the story's Acceptance Criteria**.

Generate test cases covering these categories (ONLY if in AC):

#### 1. Functional Tests
- Component rendering with all elements
- Required elements display
- Interactions (click, hover, focus)
- Props behavior
- Navigation works correctly

#### 2. Visual/Responsive Tests
- Desktop (1920px, 1440px, 1200px)
- Tablet (768px)
- Mobile (375px, 320px)
- Design verification (colors, spacing, typography)

#### 3. Accessibility Tests
- Keyboard navigation (Tab, Enter, Space, Escape)
- Visible focus states
- Semantic HTML structure
- ARIA attributes (labels, roles, states)
- Color contrast
- Touch target size

#### 4. Edge Case Tests
- Empty content
- Very long content
- Missing data
- Error states
- Special characters

#### 5. Integration Tests (from Story context)
- Component interactions
- Data flow
- State management

**Test Scenarios to Cover (ONLY if in AC):**
- Happy path user workflows (from AC)
- Error handling and validation (if specified in AC)
- Boundary conditions (if mentioned in AC)

**DO NOT TEST:**
- Features not mentioned in the story AC
- General project guidelines unless story AC requires them
- Future enhancements

---

### Step 3: Review & Validate Test Cases

**MANDATORY REVIEW CHECKLIST:**

Before outputting test cases, verify:

| Check | Question | Action if No |
|-------|----------|--------------|
| ✅ AC Coverage | Does every AC have at least 1 test? | Add missing tests |
| ✅ QA Notes | Are all QA Notes from story covered? | Add tests for each note |
| ✅ Responsive | Are all breakpoints tested (if AC requires)? | Add viewport tests |
| ✅ Edge Cases | Are boundaries tested? | Add edge case tests |

**Coverage Score Target: 95%+**

---

### Step 4: Format Output for Display

#### Format Tableau Markdown (OBLIGATOIRE - DANS LE CHAT)

**CRITICAL**: Display test cases directly in the chat as Markdown tables. DO NOT create .md or .csv files.

Use this **EXACT** format for each test case (Excel copy-paste friendly):

```markdown
## TC001 – [Test case title]

| Precondition: [Precondition]. | Type: [Type]. | Related AC: AC[N] |  |
|---|---|---|---|
| **Step** | **Expected Result** | **Obtained Result** | **Pass/Fail** |
| 1 - [Step 1] | [Expected result] |  |  |
| 2 - [Step 2] | [Expected result] |  |  |

---
```

**Structure Rules:**
- **Title**: `## TC[NNN] – [Descriptive title]` as H2 heading
- **Header row**: Precondition | Type | Related AC | (empty)
- **Column headers**: Step | Expected Result | Obtained Result | Pass/Fail
- **Steps**: Numbered `1 - Action`, `2 - Action`, etc.
- **Separator**: `---` between each test case
- **Empty cells**: Use single space, not empty

**Test Types:**
- `Functional` - Rendering and behavior tests
- `Visual` - Style and responsive tests  
- `Accessibility` - Keyboard, ARIA, focus tests
- `Edge Case` - Boundary condition tests
- `Integration` - Component interaction tests

---

### Step 5: Review Test Cases with User (MANDATORY)

**CRITICAL**: Before pushing to JIRA, present all generated test cases to the user for review and approval.

**Present to User:**

**1. Display Summary Table:**

```markdown
## Test Cases Summary for {ISSUE-KEY}

| Test ID | Test Name | Type | Related AC | Steps |
|---------|-----------|------|------------|-------|
| TC001 | Component renders with all elements | Functional | AC1 | 7 |
| TC002 | Responsive Desktop (1440px) | Visual | AC2 | 3 |
| TC003 | Keyboard navigation works | Accessibility | AC3 | 5 |
| TC004 | Empty content handling | Edge Case | AC1 | 4 |
| ... | ... | ... | ... | ... |

**Total:** {X} test cases generated
```

**2. Display Full Test Case Details** (the markdown tables from Step 4)

**3. Ask the user to review and confirm:**
   - "I've generated {X} manual test cases for {ISSUE-KEY}. Please review the test cases above."
   - "Would you like to:"
     - ✅ **Approve all** - Push all test cases to JIRA
     - ✏️ **Modify** - Edit specific test cases (specify which ones)
     - ➕ **Add more** - Request additional test scenarios
     - ➖ **Remove** - Remove specific test cases (specify which ones)
     - 🔄 **Regenerate** - Start over with different approach

**4. Wait for user confirmation** before proceeding to Step 6

**If user requests changes:**
- Regenerate the affected test cases based on feedback
- Present the updated list again for approval
- Repeat until user approves

**Only proceed to Step 6 after explicit user approval**

---

### Step 6: Push Test Cases to JIRA (if approved)

**IMPORTANT**: Push all APPROVED test cases in a batch.

Use the Atlassian MCP server to create Test issues:

For each test case:

1. **Create Test issue**:
   ```
   mcp0_createJiraIssue with:
   - cloudId: "20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25"
   - projectKey: "PRAQ"
   - issueTypeName: "Test"
   - summary: "TC-{ISSUE-KEY}-{NUMBER}: {Test Name}"
   - description: {Full test case in markdown format with steps table}
   - contentFormat: "markdown"
   - additional_fields:
     - labels: ["manual-test", "qa", "{component}", "{test-type}"]
   ```

2. **Format description as markdown**:
   ```markdown
   ## Test Case: {Test Name}
   
   **Type**: {Functional/Visual/Accessibility/Edge Case/Integration}
   **Related AC**: AC{N}
   **Precondition**: {Precondition}
   
   ### Test Steps
   
   | Step | Action | Expected Result |
   |------|--------|-----------------|
   | 1 | {Action 1} | {Expected 1} |
   | 2 | {Action 2} | {Expected 2} |
   | ... | ... | ... |
   ```

3. **Link test to story** (for traceability):
   ```
   mcp0_createIssueLink with:
   - type: "Relates"
   - inwardIssue: {TEST-KEY}
   - outwardIssue: {STORY-KEY}
   ```

---

### Step 7: Generate Summary Report

Create a comprehensive summary:

```markdown
# Manual Test Cases Generation Summary

**Story**: {ISSUE-KEY}
**Generated**: {date}
**QA Engineer**: R2-D2 (AI Agent)

## Story Analyzed
- **Ticket**: {ISSUE-KEY}
- **Summary**: [Story title]
- **Type**: Story / Task

## Acceptance Criteria Coverage

| AC# | Description | Test Cases | Coverage |
|-----|-------------|------------|----------|
| AC1 | [Description] | TC1, TC2 | ✅ Covered |
| AC2 | [Description] | TC3, TC4, TC5 | ✅ Covered |

## Test Cases Generated

| Category | Count | Test IDs |
|----------|-------|----------|
| Functional | X | TC1-TC5 |
| Visual/Responsive | X | TC6-TC10 |
| Accessibility | X | TC11-TC13 |
| Edge Cases | X | TC14-TC16 |
| Integration | X | TC17-TC20 |
| **Total** | **X** | |

## JIRA Test Issues Created

| Test ID | JIRA Key | Summary | Type |
|---------|----------|---------|------|
| TC001 | {TEST-KEY-1} | [Summary] | Functional |
| TC002 | {TEST-KEY-2} | [Summary] | Visual |
| ... | ... | ... | ... |

## Output
- **Chat**: Test cases displayed as Markdown tables (copy-paste to Excel)
- **JIRA**: Test issues created and linked to {ISSUE-KEY}

## Next Steps
1. ✅ Test cases are now in JIRA
2. ✅ Test cases are linked to story {ISSUE-KEY}
3. 🔄 Execute tests manually and update results
```

---

## Breakpoints Reference

| Viewport | Width | Category |
|----------|-------|----------|
| Desktop Large | 1920px | Desktop |
| Desktop | 1440px | Desktop |
| Desktop Small | 1200px | Desktop |
| Tablet | 768px | Tablet |
| Mobile | 375px | Mobile |
| Mobile Small | 320px | Mobile |

---

## Example Test Case (EXACT FORMAT TO USE)

```markdown
## TC001 – Product Card renders with all elements

| Precondition: Catalogue page loaded. | Type: Functional. | Related AC: AC1 |  |
|---|---|---|---|
| **Step** | **Expected Result** | **Obtained Result** | **Pass/Fail** |
| 1 - Navigate to Catalogue page | Catalogue page loads |  |  |
| 2 - Verify product card displayed | Card with image, title, price visible |  |  |
| 3 - Verify product image | Image renders correctly from Unsplash |  |  |
| 4 - Verify product title | Title displayed in bold |  |  |
| 5 - Verify product price | Price displayed in correct format |  |  |
| 6 - Verify category badge | Category badge visible |  |  |
| 7 - Verify hover effect | Card shows shadow on hover |  |  |

---

## TC002 – Responsive Desktop (1440px)

| Precondition: Catalogue page loaded. | Type: Visual. | Related AC: AC2 |  |
|---|---|---|---|
| **Step** | **Expected Result** | **Obtained Result** | **Pass/Fail** |
| 1 - Navigate to Catalogue page | Catalogue page loads |  |  |
| 2 - Set viewport to 1440px | Viewport changed |  |  |
| 3 - Verify grid layout | 3 columns per row displayed |  |  |

---

## TC003 – Keyboard navigation works

| Precondition: Catalogue page loaded. | Type: Accessibility. | Related AC: AC3 |  |
|---|---|---|---|
| **Step** | **Expected Result** | **Obtained Result** | **Pass/Fail** |
| 1 - Navigate to Catalogue page | Catalogue page loads |  |  |
| 2 - Press Tab | Focus moves to first product card |  |  |
| 3 - Press Tab again | Focus moves to next product card |  |  |
| 4 - Press Enter on product | Product detail page opens |  |  |
| 5 - Verify visible focus ring | Focus indicator visible |  |  |

---

## TC004 – Empty catalogue handling

| Precondition: Catalogue page loaded. | Type: Edge Case. | Related AC: AC1 |  |
|---|---|---|---|
| **Step** | **Expected Result** | **Obtained Result** | **Pass/Fail** |
| 1 - Filter by non-existent category | No products displayed |  |  |
| 2 - Verify empty state message | "No products found" message shown |  |  |
| 3 - Verify "All" category still selectable | Category filter works |  |  |
| 4 - Select "All" category | All products displayed again |  |  |

---
```

**Done!** Manual test cases generated, reviewed, and ready to push to JIRA. Beep beep!
