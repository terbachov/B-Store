# B-Store BMAD Configuration

BMAD (Breakthrough Method of Agile AI-Driven Development) configuration for the B-Store e-commerce project.

## Purpose

This configuration provides AI agents, workflows, and documentation to guide development of the B-Store project using Windsurf AI.

## Structure

```
bmad-config/
├── BMAD-context.txt          # Complete project context for AI
├── README.md                 # This file
├── agents/                   # AI agent configurations
│   ├── B-Store-PO.md        # Product Owner agent
│   ├── B-Store-Dev-TechLead.md  # Developer + Tech Lead agent
│   └── B-Store-QA.md        # QA Engineer agent
├── workflows/                # Custom workflows
│   ├── create-story.md      # Create Jira story workflow
│   ├── implement-story.md   # Implement story workflow
│   ├── code-review.md       # Code review workflow
│   ├── add-product.md       # Add product workflow
│   └── create-component.md  # Create component workflow
└── docs/                     # Documentation
    ├── CODE_PATTERNS.md     # React and TailwindCSS patterns
    └── COMMANDS.md         # Command reference
```

## AI Agents

### B-Store-PO (Product Owner)
- Creates Jira stories with acceptance criteria
- Breaks down features into implementable stories
- Prioritizes work based on business value
- Uses Jira MCP to create stories in PRAQ project

### B-Store-Dev-TechLead (Developer + Technical Lead)
- Implements Jira stories following acceptance criteria
- Writes clean, maintainable React code
- Follows project code conventions (.cursorrules)
- Provides technical guidance and architecture decisions
- Reviews code for quality and consistency

### B-Store-QA (QA Engineer)
- Generates tests for existing code
- Validates code against acceptance criteria
- Identifies bugs and quality issues
- Ensures accessibility and performance standards

## Workflows

### /create-story
Create a new Jira story in the PRAQ project.
- Agent: B-Store-PO
- File: `workflows/create-story.md`

### /implement-story
Implement a Jira story following acceptance criteria.
- Agent: B-Store-Dev-TechLead
- File: `workflows/implement-story.md`

### /code-review
Review code for quality and adherence to conventions.
- Agent: B-Store-Dev-TechLead or B-Store-QA
- File: `workflows/code-review.md`

### /add-product
Add a new product to the catalogue.
- Agent: B-Store-Dev-TechLead
- File: `workflows/add-product.md`

### /create-component
Create a new React component.
- Agent: B-Store-Dev-TechLead
- File: `workflows/create-component.md`

## Using BMAD with Windsurf AI

### Context Files
Windsurf AI automatically reads these files to understand the project:
- `BMAD-context.txt` - Complete project context
- `../README.md` - Project documentation
- `../.cursorrules` - AI development rules
- `docs/CODE_PATTERNS.md` - Code patterns
- `docs/COMMANDS.md` - Command reference

### When to Use Each Agent

**Use B-Store-PO when:**
- Creating a new Jira story
- Defining acceptance criteria
- Breaking down features
- Prioritizing work

**Use B-Store-Dev-TechLead when:**
- Implementing a Jira story
- Creating a new component
- Adding a product
- Getting technical guidance
- Doing code review

**Use B-Store-QA when:**
- Generating tests
- Validating implementation
- Checking accessibility
- Reviewing for quality issues

## Jira Integration

The BMAD configuration is integrated with Jira MCP:
- **Project**: PRAQ
- **Workspace**: alithya.atlassian.net
- **Cloud ID**: 20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25

Agents can directly create and manage Jira stories using the MCP integration.

## Project Context

For detailed project context, refer to:
- `BMAD-context.txt` - Complete project overview
- `../README.md` - Project documentation
- `../.cursorrules` - Code conventions

## Development Workflow

1. **Create Story**: Use B-Store-PO to create a Jira story
2. **Implement**: Use B-Store-Dev-TechLead to implement the story
3. **Review**: Use B-Store-Dev-TechLead or B-Store-QA to review code
4. **Test**: Test changes locally with `npm run dev`
5. **Commit**: Commit with Jira reference: `git commit -m "PRAQ-XXX: description"`
6. **Push**: Push to GitHub and create Pull Request

## Quick Reference

| Task | Agent | Workflow |
|------|-------|----------|
| Create Jira story | B-Store-PO | /create-story |
| Implement story | B-Store-Dev-TechLead | /implement-story |
| Code review | B-Store-Dev-TechLead / B-Store-QA | /code-review |
| Add product | B-Store-Dev-TechLead | /add-product |
| Create component | B-Store-Dev-TechLead | /create-component |
