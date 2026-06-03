---
description: Create a new React component
---

# Create Component Workflow

## Purpose
Create a new React component following B-Store conventions.

## Steps

1. **Determine Component Type**
   - Is it a page component? (goes in `src/pages/`)
   - Is it a reusable component? (goes in `src/components/`)

2. **Define Component**
   - Component name in PascalCase (e.g., ProductCard, Button)
   - Props needed
   - Functionality required
   - Styling approach (TailwindCSS)

3. **Create File**
   - Create file in appropriate directory
   - File name matches component name (e.g., ProductCard.jsx)
   - Import React at top

4. **Implement Component**
   - Use functional component with hooks
   - Export as default
   - Use TailwindCSS classes for styling
   - Follow .cursorrules conventions

5. **Component Pattern**
```jsx
import { useState, useEffect } from 'react'

export default function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(initialValue)
  
  useEffect(() => {
    // side effects
  }, [dependencies])
  
  return (
    <div className="tailwind-classes">
      {/* JSX content */}
    </div>
  )
}
```

6. **Test**
   - Import component where needed
   - Test functionality
   - Check responsive design
   - Verify no console errors

## Agent: B-Store-Dev-TechLead
