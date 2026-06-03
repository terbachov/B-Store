import { useParams, Link, useNavigate } from 'react-router-dom'
import products from '../data/products.json'
import { useState } from 'react'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [cart, setCart] = useState([])
  
  const productId = parseInt(id)
  const product = products.find(p => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Produit non trouvé</h1>
          <p className="text-gray-600 mb-8">Le produit que vous recherchez n'existe pas.</p>
          <Link 
            to="/catalogue"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retour au catalogue
          </Link>
        </div>
      </div>
    )
  }

  const addToCart = () => {
    setCart([...cart, product])
    alert(`${product.name} ajouté au panier!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <span className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              {product.category}
            </span>
            
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            
            <p className="text-4xl font-bold text-blue-600 mb-6">${product.price}</p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={addToCart}
                className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Ajouter au panier
              </button>
              
              <Link
                to="/catalogue"
                className="flex-1 bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour au catalogue
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
