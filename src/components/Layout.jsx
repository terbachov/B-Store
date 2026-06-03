import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-bold text-blue-600">B-Store</Link>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Accueil</Link>
              <Link to="/catalogue" className="text-gray-700 hover:text-blue-600">Catalogue</Link>
              <Link to="/cart" className="text-gray-700 hover:text-blue-600">Panier</Link>
              <Link to="/login" className="text-gray-700 hover:text-blue-600">Connexion</Link>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
