// Mock API functions - Replace with your actual API calls

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  description?: string;
}

// Mock product data
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Laptop",
    image: "https://via.placeholder.com/300x200?text=Laptop",
    price: 999.99,
    description: "High-performance laptop for professionals",
  },
  {
    id: "2",
    title: "Headphones",
    image: "https://via.placeholder.com/300x200?text=Headphones",
    price: 199.99,
    description: "Premium noise-canceling headphones",
  },
  {
    id: "3",
    title: "Keyboard",
    image: "https://via.placeholder.com/300x200?text=Keyboard",
    price: 149.99,
    description: "Mechanical keyboard with RGB lighting",
  },
  {
    id: "4",
    title: "Mouse",
    image: "https://via.placeholder.com/300x200?text=Mouse",
    price: 79.99,
    description: "Wireless mouse with precision tracking",
  },
];

export async function fetchProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return MOCK_PRODUCTS;
}

export async function fetchProduct(id: string): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return MOCK_PRODUCTS.find((p) => p.id === id) || null;
}

export async function createProduct(product: Omit<Product, "id">): Promise<Product> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const newProduct: Product = {
    ...product,
    id: Math.random().toString(36).substr(2, 9),
  };
  MOCK_PRODUCTS.push(newProduct);
  return newProduct;
}

export async function updateProduct(
  id: string,
  product: Partial<Product>
): Promise<Product | null> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const index = MOCK_PRODUCTS.findIndex((p) => p.id === id);
  if (index === -1) return null;
  MOCK_PRODUCTS[index] = { ...MOCK_PRODUCTS[index], ...product };
  return MOCK_PRODUCTS[index];
}

export async function deleteProduct(id: string): Promise<boolean> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  const index = MOCK_PRODUCTS.findIndex((p) => p.id === id);
  if (index === -1) return false;
  MOCK_PRODUCTS.splice(index, 1);
  return true;
}
