import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">B-Store</h1>
        <p className="text-center text-gray-600 mb-8">Welcome to our e-commerce demo</p>
        <div className="text-center">
          <Link 
            to="/catalogue" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            View Catalogue
          </Link>
        </div>
      </div>
    </div>
  )
}
