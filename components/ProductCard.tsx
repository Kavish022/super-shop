import Link from 'next/link';
import type { Product } from '@/lib/api';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, title, image, price, description } = product;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {description}
          </p>
        )}
        <p className="text-2xl font-bold text-primary mb-4 mt-auto">
          ${price.toFixed(2)}
        </p>
        <Link
          href={`/products/${id}`}
          className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;