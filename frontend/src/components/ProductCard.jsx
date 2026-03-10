function ProductCard({name, price, img}) {
  return (
    <div className="product-card">

      <div className="wishlist">
        ♡
      </div>

      <img src={img} alt={name} />

      <div className="product-info">
        <h5>{name}</h5>
        <p>{price}</p>
      </div>

    </div>
  );
}

export default ProductCard;