import ProductCard from "./ProductCard";
import "./recommended.css";

function Recommended() {

  const products = [
    {
      name: "Magnetic Wallet Stand",
      price: "₹ 680/-",
      img: "/images/3909e117f6e298967b83b0b08add57c2 1.png"
    },
    {
      name: "Tote Bag",
      price: "₹ 860/-",
      img: "/images/bee5350e38803fe962558b46ed47a998 1.png"
    },
    {
      name: "Smart Watch Band",
      price: "₹ 700/-",
      img: "/images/image 15.png"
    },
    {
      name: "Phone Case",
      price: "₹ 700/-",
      img: "/images/image 16.png"
    }
  ];

  return (
    <section className="recommended-section">

      <div className="container">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2 className="recommended-title">
            Recommended For You
          </h2>

          <div className="view-all">
            View All ↗
          </div>

        </div>

        {/* Products Grid */}
        <div className="row g-4">

          {products.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-3">
              <ProductCard {...item} />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Recommended;