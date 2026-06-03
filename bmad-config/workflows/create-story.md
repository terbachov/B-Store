---
description: Create a new Jira story in PRAQ project
---

# Create Jira Story Workflow

## Purpose
Create a new Jira story in the PRAQ project for B-Store.

## Steps

1. **Gather Requirements**
   - Read BMAD-context.txt for project context
   - Review existing stories in PRAQ
   - Check .cursorrules for conventions

2. **Define Story**
   - Write clear summary (what needs to be done)
   - Write description in user story format
   - Define acceptance criteria (specific, testable)
   - Set issue type: Story
   - Set project: PRAQ

3. **Create in Jira**
   - Use Jira MCP to create the story
   - Cloud ID: 20f2f2ad-8e18-4ec5-ac50-3e9f3e618b25
   - Project Key: PRAQ
   - Content Format: markdown

4. **Verify**
   - Confirm story created successfully
   - Note the story key (PRAQ-XXX)

## Example

### Input
- Feature: Shopping cart functionality
- Requirements: Add items, remove items, update quantity, show total

### Output
- **Summary**: Implémenter page Cart avec gestion du panier d'achat
- **Description**: En tant qu'utilisateur, je veux voir et gérer mon panier d'achat pour finaliser mes achats.
- **Acceptance Criteria**:
  - Afficher la liste des produits ajoutés au panier
  - Afficher l'image, le nom, le prix et la quantité de chaque produit
  - Permettre de modifier la quantité (+/-)
  - Permettre de supprimer un produit du panier
  - Afficher le total du panier
  - Ajouter un bouton "Proceed to Checkout"

## Agent: B-Store-PO
