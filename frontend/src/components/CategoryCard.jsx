function CategoryCard({title, img}) {
  return (
    <div className="category-card">

      <img src={img} alt={title} />

      <div className="category-label">
        {title}
      </div>

    </div>
  );
}

export default CategoryCard;