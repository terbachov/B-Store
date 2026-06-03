# B-Store Code Patterns

## React Component Patterns

### Functional Component with Hooks
```jsx
import { useState, useEffect, useContext } from 'react'

export default function ComponentName({ prop1, prop2 }) {
  const [state, setState] = useState(initialValue)
  
  useEffect(() => {
    // side effects
    return () => {
      // cleanup
    }
  }, [dependencies])
  
  return (
    <div className="tailwind-classes">
      {/* JSX content */}
    </div>
  )
}
```

### Page Component Pattern
```jsx
import Layout from '../components/Layout'

export default function PageName() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page content */}
      </div>
    </Layout>
  )
}
```

### Data Import Pattern
```jsx
import data from '../data/dataFile.json'

export default function Component() {
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
```

### Navigation Pattern
```jsx
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Component() {
  const navigate = useNavigate()
  const { id } = useParams()
  
  return (
    <div>
      <Link to="/catalogue">Back to Catalogue</Link>
      <button onClick={() => navigate('/cart')}>Go to Cart</button>
    </div>
  )
}
```

## TailwindCSS Patterns

### Responsive Grid
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Items */}
</div>
```

### Card Pattern
```jsx
<div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
  <img src={image} alt={name} className="w-full h-48 object-cover" />
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">{name}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
</div>
```

### Button Pattern
```jsx
<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
  Button Text
</button>
```

### Form Input Pattern
```jsx
<input 
  type="text" 
  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  placeholder="Placeholder"
/>
```

## State Management Patterns

### Local State with useState
```jsx
const [count, setCount] = useState(0)
const [items, setItems] = useState([])
```

### Form State Pattern
```jsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
})

const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value})
}
```

### List State Pattern
```jsx
const [items, setItems] = useState([])

const addItem = (item) => {
  setItems([...items, item])
}

const removeItem = (id) => {
  setItems(items.filter(item => item.id !== id))
}

const updateItem = (id, updates) => {
  setItems(items.map(item => item.id === id ? {...item, ...updates} : item))
}
```

## Data Handling Patterns

### Filter Pattern
```jsx
const filteredItems = items.filter(item => item.category === selectedCategory)
```

### Sort Pattern
```jsx
const sortedItems = items.sort((a, b) => a.price - b.price)
```

### Search Pattern
```jsx
const searchResults = items.filter(item => 
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
)
```

## Component Composition Patterns

### Props Pattern
```jsx
export default function Parent() {
  return <Child title="Title" items={items} onAction={handleAction} />
}
```

### Children Pattern
```jsx
export default function Container({ children }) {
  return <div className="container">{children}</div>
}
```

### Higher-Order Component Pattern
```jsx
export default function withLoading(Component) {
  return function WithLoading({ isLoading, ...props }) {
    if (isLoading) return <div>Loading...</div>
    return <Component {...props} />
  }
}
```

## Performance Patterns

### React.memo for Pure Components
```jsx
export default React.memo(function PureComponent({ value }) {
  return <div>{value}</div>
})
```

### useCallback for Event Handlers
```jsx
const handleClick = useCallback(() => {
  // handler logic
}, [dependencies])
```

### useMemo for Expensive Computations
```jsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data)
}, [data])
```

## Error Handling Patterns

### Error Boundary Pattern
```jsx
export default class ErrorBoundary extends React.Component {
  state = { hasError: false }
  
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>
    }
    return this.props.children
  }
}
```

### Try-Catch Pattern
```jsx
const handleAction = async () => {
  try {
    await fetchData()
  } catch (error) {
    console.error('Error:', error)
    setError(error.message)
  }
}
```

## Testing Patterns

### Component Test Pattern
```jsx
import { render, screen } from '@testing-library/react'
import Component from './Component'

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

### Event Handler Test Pattern
```jsx
import { render, screen, fireEvent } from '@testing-library/react'

it('handles button click', () => {
  render(<Component />)
  fireEvent.click(screen.getByRole('button'))
  expect(mockHandler).toHaveBeenCalled()
})
```

## Common Anti-Patterns to Avoid

❌ **Don't use class components**
```jsx
// Wrong
class Component extends React.Component {
  render() { return <div /> }
}

// Correct
export default function Component() {
  return <div />
}
```

❌ **Don't use inline styles**
```jsx
// Wrong
<div style={{ color: 'red', padding: '10px' }}>

// Correct
<div className="text-red-500 p-4">
```

❌ **Don't use <a> for internal navigation**
```jsx
// Wrong
<a href="/catalogue">Catalogue</a>

// Correct
<Link to="/catalogue">Catalogue</Link>
```

❌ **Don't hardcode data in components**
```jsx
// Wrong
const products = [{id: 1, name: 'Product'}]

// Correct
import products from '../data/products.json'
```
