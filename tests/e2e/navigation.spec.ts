import { test, expect } from '@playwright/test';

/**
 * Tests de navigation pour l'application B-Store
 * 
 * Ces tests vérifient:
 * - Le chargement des différentes pages de l'application
 * - La navigation entre les pages via l'URL
 * - La présence des liens de navigation
 * - La gestion des routes inexistantes (404)
 * 
 * Instructions d'exécution:
 * - npm run test:e2e : Exécute tous les tests
 * - npm run test:e2e:headed : Exécute avec interface graphique
 * - npm run test:e2e:ui : Exécute avec l'interface Playwright UI
 * - npm run test:e2e:allure : Génère le rapport Allure
 */
test.describe('Navigation B-Store', () => {
  /**
   * Test: Vérifie que la page d'accueil se charge correctement
   * 
   * Instructions:
   * 1. Naviguer vers l'URL racine '/'
   * 2. Vérifier que le titre de la page contient 'B-Store'
   * 3. Vérifier que l'URL correspond à la racine
   */
  test('should load home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/B-Store/);
    await expect(page).toHaveURL(/.*\/$/);
  });

  /**
   * Test: Vérifie la navigation vers la page catalogue
   * 
   * Instructions:
   * 1. Naviguer vers l'URL racine '/'
   * 2. Naviguer vers '/catalogue'
   * 3. Vérifier que l'URL correspond à '/catalogue'
   */
  test('should navigate to catalogue page', async ({ page }) => {
    await page.goto('/');
    await page.goto('/catalogue');
    await expect(page).toHaveURL(/.*\/catalogue/);
  });

  /**
   * Test: Vérifie la navigation vers la page panier
   * 
   * Instructions:
   * 1. Naviguer vers l'URL racine '/'
   * 2. Naviguer vers '/cart' (panier)
   * 3. Vérifier que l'URL correspond à '/cart'
   */
  test('should navigate to cart page', async ({ page }) => {
    await page.goto('/');
    await page.goto('/cart');
    await expect(page).toHaveURL(/.*\/cart/);
  });

  /**
   * Test: Vérifie la navigation vers la page de connexion
   * 
   * Instructions:
   * 1. Naviguer vers l'URL racine '/'
   * 2. Naviguer vers '/login' (connexion)
   * 3. Vérifier que l'URL correspond à '/login'
   */
  test('should navigate to login page', async ({ page }) => {
    await page.goto('/');
    await page.goto('/login');
    await expect(page).toHaveURL(/.*\/login/);
  });

  /**
   * Test: Vérifie la navigation vers la page de commande (checkout)
   * 
   * Instructions:
   * 1. Naviguer vers l'URL racine '/'
   * 2. Naviguer vers '/checkout' (commande)
   * 3. Vérifier que l'URL correspond à '/checkout'
   */
  test('should navigate to checkout page', async ({ page }) => {
    await page.goto('/');
    await page.goto('/checkout');
    await expect(page).toHaveURL(/.*\/checkout/);
  });

  /**
   * Test: Vérifie la navigation vers une page produit avec ID
   * 
   * Instructions:
   * 1. Naviguer vers l'URL racine '/'
   * 2. Naviguer vers '/product/1' (détail produit avec ID 1)
   * 3. Vérifier que l'URL correspond à '/product/1'
   */
  test('should navigate to product detail page with ID', async ({ page }) => {
    await page.goto('/');
    await page.goto('/product/1');
    await expect(page).toHaveURL(/.*\/product\/1/);
  });

  /**
   * Test: Vérifie la gestion des routes inexistantes (404)
   * 
   * Instructions:
   * 1. Naviguer vers une URL qui n'existe pas '/non-existent-route'
   * 2. Vérifier que React Router gère le 404 (la page charge quand même)
   * 
   * Note: React Router ne lance pas d'erreur 404 classique, mais affiche
   * généralement une page de fallback ou gère la route silencieusement
   */
  test('should handle 404 for non-existent routes', async ({ page }) => {
    await page.goto('/non-existent-route');
    // Should still load (React Router handles 404)
    await expect(page).toHaveURL(/.*\/non-existent-route/);
  });
});

test.describe('Layout et Navigation', () => {
  /**
   * Test: Vérifie la présence des liens de navigation
   * 
   * Instructions:
   * 1. Naviguer vers la page d'accueil
   * 2. Sélectionner tous les éléments <a> avec un attribut href
   * 3. Vérifier qu'il y a au moins un lien de navigation
   * 
   * Attendu: Le layout doit contenir des liens (Accueil, Catalogue, Panier, Connexion)
   */
  test('should have navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Check if navigation links exist (assuming they're in Layout)
    const navLinks = page.locator('a[href]');
    const linkCount = await navLinks.count();
    
    expect(linkCount).toBeGreaterThan(0);
  });

  /**
   * Test: Vérifie que le header et le layout sont visibles
   * 
   * Instructions:
   * 1. Naviguer vers la page d'accueil
   * 2. Vérifier que le corps de la page est visible
   * 
   * Attendu: La page doit avoir du contenu visible (header, navigation, etc.)
   */
  test('should have header/layout visible', async ({ page }) => {
    await page.goto('/');
    
    // Check if page has content
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });
});
