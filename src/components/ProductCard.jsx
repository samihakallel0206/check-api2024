import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>
      {product.images[0] && (
        <div>
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-[350px] w-full object-cover sm:h-[450px]"
          />

          <div className="mt-3 flex justify-between text-sm">
            <div>
              <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                {product.title}
              </h3>

              <p className="mt-1.5 text-pretty text-xs text-gray-500">
                {product.description}
              </p>
            </div>

            <p className="text-gray-900">{product.price}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard