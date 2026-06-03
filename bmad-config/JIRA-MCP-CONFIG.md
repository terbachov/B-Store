# Jira MCP Integration for B-Store

## Configuration

The Jira MCP (Model Context Protocol) is already configured and working for the B-Store project.

### Connection Details
- **Workspace**: alithya.atlassian.net
- **Project**: PRAQ
- **Cloud ID**: 20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25
- **Content Format**: markdown

### Available MCP Tools

#### Create Jira Issue
```javascript
mcp0_createJiraIssue({
  cloudId: "20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25",
  projectKey: "PRAQ",
  issueTypeName: "Story",
  summary: "Story summary",
  description: "Story description",
  contentFormat: "markdown"
})
```

#### Get Jira Issue
```javascript
mcp0_getJiraIssue({
  cloudId: "20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25",
  issueIdOrKey: "PRAQ-XXX"
})
```

#### Search Jira Issues
```javascript
mcp0_searchJiraIssuesUsingJql({
  cloudId: "20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25",
  jql: "project = PRAQ"
})
```

#### Add Comment to Issue
```javascript
mcp0_addCommentToJiraIssue({
  cloudId: "20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25",
  issueIdOrKey: "PRAQ-XXX",
  commentBody: "Comment text"
})
```

#### Transition Issue
```javascript
mcp0_transitionJiraIssue({
  cloudId: "20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25",
  issueIdOrKey: "PRAQ-XXX",
  transition: { id: "transition-id" }
})
```

## Agent Integration

### B-Store-PO Agent
The PO agent uses Jira MCP to:
- Create new stories in PRAQ project
- Define acceptance criteria
- Set story priority and type

**Workflow:**
1. Gather requirements
2. Define story with acceptance criteria
3. Use `mcp0_createJiraIssue` to create story
4. Note the returned story key (PRAQ-XXX)

### B-Store-Dev-TechLead Agent
The Dev-TechLead agent uses Jira MCP to:
- Read story details before implementation
- Get acceptance criteria
- Add comments with implementation notes
- Transition story status when complete

**Workflow:**
1. Use `mcp0_getJiraIssue` to read story
2. Implement following acceptance criteria
3. Add implementation notes with `mcp0_addCommentToJiraIssue`
4. Transition to "In Progress" or "Done"

### B-Store-QA Agent
The QA agent uses Jira MCP to:
- Read story for validation criteria
- Add test results as comments
- Transition story based on test results

**Workflow:**
1. Use `mcp0_getJiraIssue` to read story
2. Validate against acceptance criteria
3. Add test results with `mcp0_addCommentToJiraIssue`
4. Transition to "Ready for QA" or "Done"

## Current Stories in PRAQ

- **PRAQ-105**: Implémenter page Catalogue ✅ (Completed)
- **PRAQ-106**: Implémenter page ProductDetail (Pending)
- **PRAQ-107**: Implémenter page Cart (Pending)
- **PRAQ-108**: Implémenter State Management (Pending)

## Best Practices

### When Creating Stories
- Use clear, descriptive summaries
- Write detailed acceptance criteria
- Use markdown format for descriptions
- Set appropriate issue type (Story, Task, Bug)

### When Reading Stories
- Always read the full story before implementation
- Check all acceptance criteria
- Review linked epics or features if available

### When Adding Comments
- Be descriptive and concise
- Include relevant technical details
- Reference specific code changes when applicable

### When Transitioning Issues
- Only transition when criteria are met
- Add comments explaining the transition
- Follow project workflow

## Testing the Integration

To test Jira MCP integration:
1. Search for existing issues: `mcp0_searchJiraIssuesUsingJql({ jql: "project = PRAQ" })`
2. Get a specific issue: `mcp0_getJiraIssue({ issueIdOrKey: "PRAQ-106" })`
3. Create a test issue (optional): `mcp0_createJiraIssue(...)`

## Troubleshooting

If Jira MCP is not working:
1. Check MCP configuration in Windsurf
2. Verify alithya.atlassian.net is selected (not groupemedia)
3. Ensure proper authentication
4. Check cloud ID is correct: 20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25
