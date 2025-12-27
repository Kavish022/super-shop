import { fetchProduct } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";

export const metadata = {
  title: "Product Details | SuperCom",
  description: "View product details",
};

interface ProductPageProps {
  params: {
    id: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await fetchProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto p-4">
      <Link href="/shop/products" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Product Image */}
        <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>

          <div className="mb-6">
            <span className="text-4xl font-bold text-primary">${product.price.toFixed(2)}</span>
          </div>

          {product.description && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">Description</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>
          )}

          {/* Product Actions */}
          <div className="space-y-4">
            <button className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition">
              Add to Cart
            </button>
            <button className="w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition">
              Save for Later
            </button>
          </div>

          {/* Product Info */}
          <div className="mt-8 border-t pt-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-700">Product ID</h3>
                <p className="text-gray-600">{product.id}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Stock Status</h3>
                <p className="text-green-600">In Stock</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16 border-t pt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">You Might Also Like</h2>
        <p className="text-gray-600">More products coming soon...</p>
      </div>
    </div>
  );
}