// Real API calls to Next.js backend with MongoDB

export interface Product {
  id: string;
  _id?: string;
  title: string;
  image: string;
  price: number;
  description?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || '/api';

// Fetch all products
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE}/products`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data = await response.json();
    // Map MongoDB _id to id for consistent interface
    return data.data.map((product: any) => ({
      ...product,
      id: product._id,
    }));
  } catch (error) {
    console.error('fetchProducts error:', error);
    return [];
  }
}

// Fetch single product by ID
export async function fetchProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_BASE}/products/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      ...data.data,
      id: data.data._id,
    };
  } catch (error) {
    console.error('fetchProduct error:', error);
    return null;
  }
}

// Create new product
export async function createProduct(
  product: Omit<Product, 'id' | '_id'>
): Promise<Product> {
  try {
    const response = await fetch(`${API_BASE}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error(`Failed to create product: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      ...data.data,
      id: data.data._id,
    };
  } catch (error) {
    console.error('createProduct error:', error);
    throw error;
  }
}

// Update product
export async function updateProduct(
  id: string,
  product: Partial<Product>
): Promise<Product | null> {
  try {
    const response = await fetch(`${API_BASE}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error(`Failed to update product: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      ...data.data,
      id: data.data._id,
    };
  } catch (error) {
    console.error('updateProduct error:', error);
    return null;
  }
}

// Delete product
export async function deleteProduct(id: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE}/products/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Failed to delete product: ${response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error('deleteProduct error:', error);
    return false;
  }
}
