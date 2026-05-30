import ProductCard from './ProductCard'
function ProductPage({data}) {

  return (
    <div className="products-wrapper">
      <div className="products-grid">
        {data?.map((el) => (
          <ProductCard key={el.id} product={el} />
        ))}
      </div>
    </div>
  )
}

export default ProductPage