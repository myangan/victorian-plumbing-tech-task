// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductList = ({ products }: { products: any[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition pb-5 flex flex-col justify-between"
        >
          <div className="relative">
            <img
              src={product.image.url}
              alt={product.attributes.imageAltText}
              className="w-full object-cover mb-4 border-b border-gray-300"
            />
            <div>
              {product.attributes.isBestSeller && (
                <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 text-sm font-bold rounded">
                  Bestseller
                </div>
              )}
              {product.price.isOnPromotion && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm font-bold rounded">
                  SALE
                </div>
              )}
              {product.attributes.isEco && (
                <div className="absolute bottom-10 right-2 bg-green-500 text-white px-2 py-1 text-sm font-bold rounded">
                  ECO
                </div>
              )}
            </div>
          </div>
          <div className="mx-5 flex flex-col gap-4 justify-between">
            <img
              src={product.brand?.brandImage.url}
              alt={product.brand?.name}
              className="w-20 object-contain mx-4 mb-4"
            />

            <h2 className="text-lg font-semibold">{product.productName}</h2>
            <div className=" font-bold flex flex-row gap-4 items-end">
              <div className="text-lg text-red-600">{`£${product.price.priceIncTax}`}</div>
              <div className="text-sm line-through text-gray-500">
                {product.price.wasPriceIncTax}
              </div>
            </div>
            {(product.stockStatus.status === "G" ||
              product.stockStatus.status === "R") && (
              <div className="flex flex-row items-center gap-2 text-green-600">
                <img
                  src="/check-mark.png"
                  alt="check mark"
                  className="w-6 object-contain"
                />
                In Stock
              </div>
            )}
            {product.reviewsCount > 0 && (
              <div className="text-sm text-yellow-600">
                {"★".repeat(Math.round(product.averageRating))}
                <span className="text-gray-400"> {product.reviewsCount}</span>
              </div>
            )}
            <div className="">
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
