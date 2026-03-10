import CategoryCard from "./CategoryCard";
import "./category.css";

function CategorySection() {

  const categories = [
    {
      title: "Tech Accessories",
      img: "/images/1.png"
    },
    {
      title: "Bags & Wallet",
      img: "/images/2.png"
    },
    {
      title: "Work Essentials",
      img: "/images/3.png"
    }
  ];

  return (
    <section className="category-section">
      <div className="container">

        <h2 className="category-title">Browse By Category</h2>

        <div className="row g-4">

          {categories.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <CategoryCard title={item.title} img={item.img}/>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CategorySection;