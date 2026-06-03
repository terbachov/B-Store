---
description: Generate automated test case documentation for Playwright/Vitest
---

# R2-D2 QA - Generate Automated Test Cases

**Goal**: Generate automated test case documentation for Playwright/Vitest from Jira Story.

**Scope**: This workflow generates **automated test case documentation** (not the actual test code, but the specification for automation).

## Output Format

**IMPORTANT**: The output MUST be provided in TWO formats:

1. **Chat Response**: Display test cases as **Markdown tables** directly in the chat
2. **Test Files**: Generate test file templates for Playwright/Vitest

---

## Instructions

### Step 0: Collect Inputs

**If user has not provided a JIRA issue key**, ask:
- "Which Story should I generate automated test cases for? (provide JIRA key, e.g., PRAQ-106)"

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

---

### Step 2: Generate Automated Test Cases

**CRITICAL SCOPING RULE**: Only create test cases for features **explicitly mentioned in the story's Acceptance Criteria**.

Generate test cases covering these categories (ONLY if in AC):

#### 1. Unit Tests (Vitest + RTL)
- Component rendering
- Props behavior
- State management
- Event handlers
- Hooks testing

#### 2. Integration Tests
- Component interactions
- Data flow
- Context API integration
- Router integration

#### 3. E2E Tests (Playwright)
- User workflows
- Navigation
- Form submissions
- Multi-page flows

**Test Scenarios to Cover (ONLY if in AC):**
- Happy path user workflows (from AC)
- Error handling and validation (if specified in AC)
- Boundary conditions (if mentioned in AC)

**DO NOT TEST:**
- Features not mentioned in the story AC
- General project guidelines unless story AC requires them

---

### Step 3: Format Output for Display

#### Format Tableau Markdown (OBLIGATOIRE - DANS LE CHAT)

**CRITICAL**: Display test cases directly in the chat as Markdown tables.

Use this **EXACT** format for each test case:

```markdown
## ATC001 – [Automated Test Case title]

| Type: [Type]. | Framework: [Framework]. | Related AC: AC[N] |  |
|---|---|---|---|
| **Test Description** | **Selector/Assertion** | **Test Data** | **Expected Result** |
| [Description] | [Selector] | [Data] | [Expected] |
| [Description] | [Selector] | [Data] | [Expected] |

---
```

**Structure Rules:**
- **Title**: `## ATC[NNN] – [Descriptive title]` as H2 heading
- **Header row**: Type | Framework | Related AC | (empty)
- **Column headers**: Test Description | Selector/Assertion | Test Data | Expected Result
- **Separator**: `---` between each test case
- **Empty cells**: Use single space, not empty

**Test Types:**
- `Unit` - Unit tests with Vitest + RTL
- `Integration` - Integration tests
- `E2E` - End-to-end tests with Playwright

**Frameworks:**
- `Vitest` - For unit and integration tests
- `Playwright` - For E2E tests

---

### Step 4: Generate Test File Templates

After displaying test cases in chat, generate test file templates:

#### Unit Test Template (Vitest + RTL)
```javascript
import { render, screen, fireEvent } from '@testing-library/react'
import ComponentName from './ComponentName'

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
  
  it('handles user interaction', () => {
    render(<ComponentName />)
    fireEvent.click(screen.getByRole('button'))
    // assertions
  })
})
```

#### E2E Test Template (Playwright)
```javascript
test('user flow', async ({ page }) => {
  await page.goto('/catalogue')
  await page.click('[data-testid="product-1"]')
  await expect(page.locator('[data-testid="product-detail"]')).toBeVisible()
})
```

---

### Step 5: Review Test Cases with User (MANDATORY)

**CRITICAL**: Present all generated test cases to the user for review and approval.

**Present to User:**

**1. Display Summary Table:**

```markdown
## Automated Test Cases Summary for {ISSUE-KEY}

| Test ID | Test Name | Type | Framework | Related AC |
|---------|-----------|------|-----------|------------|
| ATC001 | Component renders correctly | Unit | Vitest | AC1 |
| ATC002 | User flow works | E2E | Playwright | AC2 |
| ... | ... | ... | ... | ... |

**Total:** {X} test cases generated
```

**2. Display Full Test Case Details** (the markdown tables from Step 3)

**3. Ask the user to review and confirm:**
   - "I've generated {X} automated test case specifications for {ISSUE-KEY}. Please review the test cases above."
   - "Would you like to:"
     - ✅ **Approve all** - Generate test file templates
     - ✏️ **Modify** - Edit specific test cases
     - ➕ **Add more** - Request additional test scenarios
     - ➖ **Remove** - Remove specific test cases
     - 🔄 **Regenerate** - Start over

**4. Wait for user confirmation**

---

### Step 6: Generate Test Files (if approved)

If user approves, create test file templates in appropriate directories:

#### Unit/Integration Tests
- Location: `src/components/ComponentName.test.jsx`
- Framework: Vitest + RTL

#### E2E Tests
- Location: `tests/e2e/feature-name.spec.js`
- Framework: Playwright

---

### Step 7: Generate Summary Report

```markdown
# Automated Test Cases Generation Summary

**Story**: {ISSUE-KEY}
**Generated**: {date}
**QA Engineer**: R2-D2 (AI Agent)

## Test Cases Generated

| Category | Count | Test IDs |
|----------|-------|----------|
| Unit | X | ATC1-ATC5 |
| Integration | X | ATC6-ATC10 |
| E2E | X | ATC11-ATC15 |
| **Total** | **X** | |

## Test Files Generated

| Test File | Framework | Location |
|-----------|-----------|----------|
| ComponentName.test.jsx | Vitest | src/components/ |
| feature-name.spec.js | Playwright | tests/e2e/ |

## Next Steps
1. ✅ Test case specifications generated
2. ✅ Test file templates created
3. 🔄 Implement test logic in generated files
4. 🔄 Run tests with `npm test` or `npm run test:e2e`
```

---

## Example Test Case (EXACT FORMAT TO USE)

```markdown
## ATC001 – Product Card renders correctly

| Type: Unit. | Framework: Vitest. | Related AC: AC1 |  |
|---|---|---|---|
| **Test Description** | **Selector/Assertion** | **Test Data** | **Expected Result** |
| Render product card | getByText(productName) | Product name | Component renders |
| Verify image displayed | getByAltText(productName) | Image URL | Image visible |
| Verify price displayed | getByText(price) | Price value | Price displayed |

---

## ATC002 – Add to cart flow

| Type: E2E. | Framework: Playwright. | Related AC: AC2 |  |
|---|---|---|---|
| **Test Description** | **Selector/Assertion** | **Test Data** | **Expected Result** |
| Navigate to catalogue | page.goto('/catalogue') | URL | Page loads |
| Click product card | page.click('[data-testid="product-1"]') | data-testid | Product detail opens |
| Click add to cart | page.click('[data-testid="add-to-cart"]') | data-testid | Cart updated |
| Verify cart count | page.locator('[data-testid="cart-count"]') | data-testid | Count incremented |

---
```

**Done!** Automated test case specifications generated. Beep beep! 🤖
