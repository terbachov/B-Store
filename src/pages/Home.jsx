import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Bienvenue sur <span className="text-blue-600">B-Store</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez une expérience d'achat en ligne moderne avec une sélection de produits de qualité supérieure. Électronique, mode, accessoires et bien plus encore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/catalogue" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explorer le Catalogue
            </Link>
            <Link 
              to="/cart" 
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-gray-200"
            >
              Voir le Panier
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Large Sélection</h3>
            <p className="text-gray-600 text-center">
              Plus de 20 produits dans 4 catégories différentes pour répondre à tous vos besoins.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Qualité Garantie</h3>
            <p className="text-gray-600 text-center">
              Tous nos produits sont soigneusement sélectionnés pour leur qualité et leur durabilité.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Livraison Rapide</h3>
            <p className="text-gray-600 text-center">
              Commandez aujourd'hui et recevez vos produits en un temps record.
            </p>
          </div>
        </div>

        {/* Categories Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Nos Catégories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/catalogue" className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-bold">Électronique</h3>
            </Link>
            <Link to="/catalogue" className="bg-gradient-to-br from-pink-500 to-pink-600 p-6 rounded-2xl text-white text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-2">👕</div>
              <h3 className="font-bold">Vêtements</h3>
            </Link>
            <Link to="/catalogue" className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-6 rounded-2xl text-white text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-2">⌚</div>
              <h3 className="font-bold">Accessoires</h3>
            </Link>
            <Link to="/catalogue" className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl text-white text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-3xl mb-2">🏠</div>
              <h3 className="font-bold">Maison</h3>
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Prêt à commencer?</h2>
          <p className="text-xl mb-8 opacity-90">
            Découvrez notre catalogue complet et trouvez exactement ce que vous cherchez.
          </p>
          <Link 
            to="/catalogue" 
            className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-block"
          >
            Commencer vos Achats
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 B-Store. Tous droits réservés.</p>
          <p className="text-gray-500 text-sm mt-2">Application de démonstration e-commerce</p>
        </div>
      </div>
    </div>
  )
}
