---
description: Add a new product to the catalogue
---

# Add Product Workflow

## Purpose
Add a new product to the B-Store catalogue in `src/data/products.json`.

## Steps

1. **Get Product Details**
   - Product name
   - Category (Electronics, Clothing, Accessories, Home)
   - Price
   - Description
   - Image URL (preferably Unsplash)

2. **Update products.json**
   - Open `src/data/products.json`
   - Add new product object at the end
   - Use the next available ID
   - Follow the existing data structure

3. **Product Structure**
```json
{
  "id": 21,
  "name": "Product Name",
  "category": "Category",
  "price": 99.99,
  "description": "Product description",
  "image": "https://images.unsplash.com/..."
}
```

4. **Verify**
   - Check JSON syntax is valid
   - Test the catalogue page
   - Verify new product appears
   - Check category filter works

## Agent: B-Store-Dev-TechLead
