# Guide d'Utilisation de l'IA dans les Projets - BMAD Method

**Version**: 1.0  
**Projet**: B-Store  
**Date**: 2026-06-02  
**Objectif**: Guide complet pour l'équipe sur l'utilisation de l'IA dans le développement de projets

---

## Table des Matières

1. [Introduction à BMAD](#introduction-à-bmad)
2. [Architecture Globale](#architecture-globale)
3. [Configuration Initiale](#configuration-initiale)
4. [Création et Gestion des Stories Jira](#création-et-gestion-des-stories-jira)
5. [Configuration des Agents IA](#configuration-des-agents-ia)
6. [Utilisation des Agents](#utilisation-des-agents)
7. [Implémentation de Features](#implémentation-de-features)
8. [Testing et Automatisation](#testing-et-automatisation)
9. [Mise à jour et Maintenance](#mise-à-jour-et-maintenance)
10. [Bonnes Pratiques](#bonnes-pratiques)
11. [Checklist Projet](#checklist-projet)

---

## Introduction à BMAD

### Qu'est-ce que BMAD?

**BMAD (Build, Maintain, and Deploy)** est une méthode de développement assistée par l'IA qui utilise des agents spécialisés pour automatiser et améliorer le processus de développement.

**Concepts clés:**
- **Agents IA**: Personnages spécialisés (PO, Dev, QA) avec des rôles définis
- **Workflows**: Processus étape par étape pour des tâches spécifiques
- **Contexte Projet**: Information complète du projet pour guider l'IA
- **Intégration Jira**: Liaison directe avec Jira pour gestion des stories

**Pourquoi utiliser BMAD?**
- ✅ Accélération du développement
- ✅ Qualité de code améliorée
- ✅ Tests automatisés
- ✅ Documentation générée automatiquement
- ✅ Standardisation des processus

---

## Architecture Globale

### Structure des Dossiers

```
project-root/
├── bmad-config/              # Configuration BMAD
│   ├── agents/              # Définitions des agents IA
│   │   ├── B-Store-PO.md   # Agent Product Owner
│   │   ├── B-Store-Dev-TechLead.md  # Agent Développeur
│   │   └── B-Store-QA.md   # Agent QA (R2-D2)
│   ├── workflows/           # Workflows (instructions)
│   │   ├── create-story.md
│   │   ├── implement-story.md
│   │   ├── code-review.md
│   │   ├── add-product.md
│   │   ├── create-component.md
│   │   ├── qa-generate-manual-tests/
│   │   │   ├── workflow.yaml
│   │   │   └── qa-generate-manual-tests.md
│   │   ├── qa-generate-automated-tests/
│   │   ├── qa-code-review/
│   │   └── qa-approve/
│   ├── docs/                # Documentation
│   │   ├── CODE_PATTERNS.md
│   │   └── COMMANDS.md
│   ├── BMAD-context.txt     # Contexte du projet
│   ├── README.md            # Documentation BMAD
│   └── JIRA-MCP-CONFIG.md   # Config Jira MCP
├── .cursorrules             # Règles de code pour l'IA
├── README.md                # Documentation du projet
└── src/                     # Code source du projet
```

### Différence workflow.yaml vs instructions.md

**workflow.yaml** - Configuration technique
- Définit le nom, description, outils requis
- Métadonnées du workflow
- Similaire à un fichier "package.json"

**instructions.md** - Instructions détaillées
- Étapes à suivre
- Format de sortie requis
- Processus de révision et approbation
- Similaire à un "README"

---

## Configuration Initiale

### Étape 1: Création de la Structure BMAD

**Objectif**: Créer la structure de dossiers pour la configuration BMAD.

**Actions:**
1. Créer le dossier `bmad-config/`
2. Créer les sous-dossiers: `agents/`, `workflows/`, `docs/`
3. Créer les fichiers de base

**Commande (PowerShell):**
```powershell
New-Item -ItemType Directory -Path "bmad-config\agents"
New-Item -ItemType Directory -Path "bmad-config\workflows"
New-Item -ItemType Directory -Path "bmad-config\docs"
```

### Étape 2: Configuration du Contexte Projet

**Fichier**: `bmad-config/BMAD-context.txt`

**Contenu requis:**
```text
# Contexte Projet

## Informations Générales
- Nom du projet
- Description
- Stack technique
- URL du repository
- URL du dev server

## Stack Technique
- Frameworks et versions
- Bibliothèques principales
- Outils de build

## Structure du Projet
- Organisation des dossiers
- Emplacement des composants
- Emplacement des pages

## Conventions de Code
- Style de code
- Naming conventions
- Patterns à suivre

## Intégration Jira
- URL Jira
- Project key
- Cloud ID MCP
```

### Étape 3: Configuration des Règles de Code

**Fichier**: `.cursorrules`

**Contenu requis:**
- Règles de style React
- Conventions TailwindCSS
- Organisation des fichiers
- Gestion de l'état
- Gestion des erreurs
- Anti-patterns à éviter

### Étape 4: Configuration Jira MCP

**Fichier**: `bmad-config/JIRA-MCP-CONFIG.md`

**Informations requises:**
- Cloud ID (UUID ou hostname)
- Project key
- Outils MCP disponibles
- Types de liens Jira

**Pour obtenir le Cloud ID:**
```bash
# Via MCP server
mcp0_getAccessibleAtlassianResources
```

---

## Création et Gestion des Stories Jira

### Étape 1: Créer une Story avec l'Agent PO

**Commande:** `agent po` ou `create-story`

**Processus:**
1. Activer l'agent PO
2. Décrire la fonctionnalité souhaitée
3. L'agent génère la story Jira
4. Réviser et approuver
5. L'agent crée la story dans Jira

**Exemple:**
```
agent po
Je veux créer une story pour la page ProductDetail
```

**Format de Story généré:**
```
**Titre**: [Description claire]
**User Story**: En tant que [rôle], je veux [action] pour [bénéfice]
**Critères d'acceptation**:
- AC1: [Critère 1]
- AC2: [Critère 2]
- ...
```

### Étape 2: Utiliser le Workflow create-story

**Workflow**: `bmad-config/workflows/create-story.md`

**Processus:**
1. Définir les exigences
2. Formater la story (User Story + AC)
3. Créer via Jira MCP
4. Vérifier la création

### Étape 3: Gérer les Stories dans Jira

**Actions disponibles via MCP Jira:**
- Créer des stories
- Lire les détails
- Modifier les stories
- Ajouter des commentaires
- Transitionner le statut

**Commandes MCP:**
- `mcp0_createJiraIssue` - Créer une issue
- `mcp0_getJiraIssue` - Lire une issue
- `mcp0_editJiraIssue` - Modifier une issue
- `mcp0_addCommentToJiraIssue` - Ajouter un commentaire
- `mcp0_transitionJiraIssue` - Changer le statut

---

## Configuration des Agents IA

### Étape 1: Comprendre les Rôles des Agents

**Agent PO (Product Owner):**
- Responsabilités: Créer des stories, définir les exigences
- Commandes: create-story
- Interaction: Jira MCP pour créer des stories

**Agent Dev-TechLead (Développeur + Tech Lead):**
- Responsabilités: Implémenter les features, code review technique
- Commandes: implement-story, create-component, code-review
- Interaction: Code source, patterns de code

**Agent QA (R2-D2):**
- Responsabilités: Tests, revue de code, approbation
- Commandes: TCM (tests manuels), TCA (tests automatisés), Review, Approve
- Interaction: Jira MCP pour créer des tests

### Étape 2: Créer un Agent

**Fichier**: `bmad-config/agents/[Nom-Agent].md`

**Structure requise:**
```markdown
# [Nom] Agent

## Role
Description du rôle de l'agent

## Responsibilities
- Responsabilité 1
- Responsabilité 2
- ...

## Project Context
- Project: [Nom]
- Tech Stack: [Stack]
- Jira: [Project key]
- Cloud ID: [Cloud ID]

## Available Commands
### [Commande 1]
Description du workflow
- Workflow: [Chemin workflow.yaml]
- Instructions: [Chemin instructions.md]
- Output: [Format de sortie]
```

### Étape 3: Créer les Workflows

**Structure d'un workflow:**
1. **workflow.yaml** - Configuration
2. **instructions.md** - Instructions détaillées

**Exemple workflow.yaml:**
```yaml
name: [nom-workflow]
description: '[Description]'
project_root: "{project-root}"
installed_path: "{project-root}/bmad-config/workflows/[nom-workflow]"
instructions: "{installed_path}/[nom-workflow].md"
required_tools:
  - [outil MCP]
```

**Exemple instructions.md:**
```markdown
# [Nom] Workflow

## Instructions

### Step 1: [Étape 1]
[Instructions détaillées]

### Step 2: [Étape 2]
[Instructions détaillées]

## Output Format
[Format de sortie requis]
```

### Étape 4: Mettre à jour un Agent

**Pour modifier un agent:**
1. Ouvrir le fichier `bmad-config/agents/[Nom-Agent].md`
2. Modifier les sections nécessaires
3. Sauvegarder
4. L'IA utilisera automatiquement la nouvelle configuration

**Modifications courantes:**
- Ajouter une nouvelle commande
- Modifier la description du rôle
- Mettre à jour le contexte projet
- Changer les workflows référencés

---

## Utilisation des Agents

### Étape 1: Activer un Agent

**Commande:** `agent [nom-agent]`

**Exemples:**
```
agent po              # Active l'agent Product Owner
agent dev             # Active l'agent Développeur
agent qa              # Active l'agent QA (R2-D2)
```

### Étape 2: Utiliser les Commandes de l'Agent

**Format:** `[commande] [paramètres]`

**Exemples:**
```
# Agent PO
create-story          # Créer une nouvelle story

# Agent Dev
implement-story PRAQ-106    # Implémenter la story PRAQ-106
create-component Button     # Créer un composant Button

# Agent QA
TCM PRAQ-106               # Générer tests manuels pour PRAQ-106
TCA PRAQ-106               # Générer tests automatisés pour PRAQ-106
Review src/pages/Catalogue.jsx    # Revue de code
Approve PRAQ-106            # Approuver l'implémentation
```

### Étape 3: Suivre le Processus

**Les agents suivent ce pattern:**
1. Afficher un message de bienvenue
2. Lister les commandes disponibles
3. Attendre votre input
4. Exécuter la commande
5. Afficher les résultats
6. Demander confirmation si nécessaire

### Étape 4: Interagir avec l'Agent

**Bonnes pratiques:**
- Être clair et précis dans vos demandes
- Fournir le contexte nécessaire (ex: clé Jira)
- Réviser les résultats avant d'approuver
- Demander des clarifications si nécessaire

---

## Implémentation de Features

### Étape 1: Préparer la Story

**Actions:**
1. Créer la story avec l'agent PO
2. Définir les critères d'acceptation
3. Ajouter des notes de dev si nécessaire
4. Assigner la story

### Étape 2: Implémenter avec l'Agent Dev

**Commande:** `implement-story [story-key]`

**Processus:**
1. Activer l'agent Dev
2. Lancer: `implement-story PRAQ-106`
3. L'agent:
   - Lit la story Jira
   - Analyse les critères d'acceptation
   - Planifie l'implémentation
   - Génère le code
   - Crée les fichiers nécessaires
4. Réviser le code généré
5. Approuver ou demander des modifications

### Étape 3: Créer des Composants

**Commande:** `create-component [nom-composant]`

**Processus:**
1. Activer l'agent Dev
2. Lancer: `create-component ProductCard`
3. L'agent:
   - Crée le fichier du composant
   - Implémente la structure de base
   - Ajoute les props nécessaires
   - Suit les conventions du projet
4. Réviser le composant
5. Personnaliser selon vos besoins

### Étape 4: Code Review

**Commande:** `review [fichier]`

**Processus:**
1. Activer l'agent QA
2. Lancer: `review src/pages/Catalogue.jsx`
3. L'agent:
   - Analyse le code
   - Identifie les problèmes (3-10 minimum)
   - Catégorise les issues (qualité, accessibilité, performance)
   - Fournit des recommandations
4. Corriger les problèmes identifiés

---

## Testing et Automatisation

### Étape 1: Tests Manuels (TCM)

**Commande:** `TCM [story-key]`

**Processus:**
1. Activer l'agent QA (R2-D2)
2. Lancer: `TCM PRAQ-106`
3. L'agent:
   - Analyse la story Jira
   - Génère des tests manuels
   - Affiche les tests dans le chat (format tableau)
4. Réviser les tests
5. Approuver pour push vers Jira
6. L'agent crée les tests dans Jira

**Format de sortie:**
```markdown
## TC001 – [Titre]
| Precondition: [Condition]. | Type: [Type]. | Related AC: AC[N] |  |
|---|---|---|---|
| **Step** | **Expected Result** | **Obtained Result** | **Pass/Fail** |
| 1 - [Action] | [Expected] |  |  |
```

### Étape 2: Tests Automatisés (TCA)

**Commande:** `TCA [story-key]`

**Processus:**
1. Activer l'agent QA (R2-D2)
2. Lancer: `TCA PRAQ-106`
3. L'agent:
   - Analyse la story Jira
   - Génère des spécifications de tests automatisés
   - Affiche les tests dans le chat
   - Génère des templates de fichiers de tests
4. Réviser les tests
5. Approuver pour générer les fichiers

**Frameworks:**
- Vitest + RTL pour tests unitaires/intégration
- Playwright pour tests E2E

### Étape 3: Code Review

**Commande:** `review [fichier]`

**Processus:**
1. Activer l'agent QA (R2-D2)
2. Lancer: `review src/pages/Catalogue.jsx`
3. L'agent:
   - Analyse le code contre les critères d'acceptation
   - Identifie les problèmes réels (minimum 3-10)
   - Catégorise les issues
   - Fournit des recommandations

### Étape 4: Approbation

**Commande:** `approve [story-key]`

**Processus:**
1. Activer l'agent QA (R2-D2)
2. Lancer: `approve PRAQ-106`
3. L'agent:
   - Valide tous les critères
   - Vérifie la couverture des AC
   - Confirme que les tests passent
   - Transitionne le statut Jira si approuvé

---

## Mise à jour et Maintenance

### Étape 1: Mettre à jour le Contexte Projet

**Quand mettre à jour:**
- Stack technique change
- Nouvelle structure de projet
- Nouvelles conventions de code
- Changement d'équipe

**Actions:**
1. Ouvrir `bmad-config/BMAD-context.txt`
2. Mettre à jour les sections concernées
3. Sauvegarder

### Étape 2: Mettre à jour les Agents

**Quand mettre à jour:**
- Nouveau workflow ajouté
- Modification des responsabilités
- Changement dans le processus

**Actions:**
1. Ouvrir `bmad-config/agents/[Nom-Agent].md`
2. Modifier les sections nécessaires
3. Sauvegarder

### Étape 3: Mettre à jour les Workflows

**Quand mettre à jour:**
- Processus change
- Nouvelles étapes requises
- Nouveaux outils MCP disponibles

**Actions:**
1. Mettre à jour `workflow.yaml` si nécessaire
2. Mettre à jour `instructions.md`
3. Sauvegarder

### Étape 4: Mettre à jour les Patterns de Code

**Quand mettre à jour:**
- Nouveaux patterns découverts
- Anti-patterns identifiés
- Meilleures pratiques émergentes

**Actions:**
1. Ouvrir `bmad-config/docs/CODE_PATTERNS.md`
2. Ajouter les nouveaux patterns
3. Sauvegarder

---

## Bonnes Pratiques

### Pour l'Équipe

**1. Commencer par le contexte**
- Toujours configurer le contexte projet avant d'utiliser les agents
- Mettre à jour le contexte régulièrement

**2. Utiliser les agents pour leur rôle spécifique**
- PO pour créer des stories
- Dev pour implémenter
- QA pour tester et approuver

**3. Réviser avant d'approuver**
- Ne pas approuver aveuglément
- Vérifier le code généré
- Tester les résultats

**4. Itérer si nécessaire**
- Demander des modifications si le résultat n'est pas satisfaisant
- Affiner les prompts pour de meilleurs résultats

**5. Documenter les décisions**
- Notez les décisions importantes dans les stories Jira
- Ajoutez des commentaires dans le code

### Pour les Projets

**1. Standardiser la structure**
- Utiliser la même structure BMAD pour tous les projets
- Créer des templates pour les agents et workflows

**2. Versionner la configuration BMAD**
- Committez les fichiers bmad-config dans git
- Documentez les changements majeurs

**3. Former l'équipe**
- Assurez-vous que tous les membres comprennent BMAD
- Faites des présentations régulières

**4. Mesurer l'impact**
- Suivez le temps économisé
- Mesurez la qualité du code
- Collectez les feedbacks de l'équipe

---

## Checklist Projet

### Phase 1: Configuration Initiale

- [ ] Créer la structure bmad-config/
- [ ] Configurer BMAD-context.txt
- [ ] Configurer .cursorrules
- [ ] Configurer Jira MCP
- [ ] Créer les agents (PO, Dev, QA)
- [ ] Créer les workflows de base
- [ ] Créer la documentation (CODE_PATTERNS, COMMANDS)
- [ ] Tester l'intégration avec une story simple

### Phase 2: Développement

- [ ] Créer les stories avec l'agent PO
- [ ] Implémenter les features avec l'agent Dev
- [ ] Générer les tests avec l'agent QA
- [ ] Faire les code reviews
- [ ] Approuver les implémentations

### Phase 3: Maintenance

- [ ] Mettre à jour le contexte projet régulièrement
- [ ] Mettre à jour les agents si nécessaire
- [ ] Mettre à jour les workflows
- [ ] Documenter les leçons apprises
- [ ] Partager avec l'équipe

---

## Résumé Rapide

### Commandes Essentielles

| Commande | Agent | Description |
|----------|-------|-------------|
| `agent po` | PO | Activer agent Product Owner |
| `agent dev` | Dev | Activer agent Développeur |
| `agent qa` | QA | Activer agent QA (R2-D2) |
| `create-story` | PO | Créer une story Jira |
| `implement-story [key]` | Dev | Implémenter une story |
| `create-component [name]` | Dev | Créer un composant |
| `TCM [key]` | QA | Générer tests manuels |
| `TCA [key]` | QA | Générer tests automatisés |
| `review [file]` | QA | Revue de code |
| `approve [key]` | QA | Approuver implémentation |

### Fichiers Clés

| Fichier | Objectif |
|---------|----------|
| `bmad-config/BMAD-context.txt` | Contexte du projet |
| `.cursorrules` | Règles de code |
| `bmad-config/agents/*.md` | Définitions des agents |
| `bmad-config/workflows/*.md` | Workflows simples |
| `bmad-config/workflows/*/workflow.yaml` | Configuration workflows |
| `bmad-config/workflows/*/instructions.md` | Instructions workflows |
| `bmad-config/docs/CODE_PATTERNS.md` | Patterns de code |
| `bmad-config/docs/COMMANDS.md` | Référence commandes |

---

## Support et Ressources

**Documentation interne:**
- `bmad-config/README.md` - Documentation BMAD
- `bmad-config/JIRA-MCP-CONFIG.md` - Configuration Jira MCP

**Pour l'aide:**
- Consulter les fichiers d'agents pour les commandes disponibles
- Lire les workflows pour comprendre les processus
- Vérifier .cursorrules pour les conventions de code

---

**Fin du Guide**

Ce guide est évolutif. N'hésitez pas à le mettre à jour avec vos propres expériences et améliorations.

**Dernière mise à jour**: 2026-06-02  
**Mainteneur**: Équipe B-Store
