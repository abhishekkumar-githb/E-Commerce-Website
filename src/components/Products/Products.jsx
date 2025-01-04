import { FaStar } from "react-icons/fa6";
import { ProductsData } from "./ProductsConfig"; 

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary uppercase tracking-wide">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold mb-2">
            Products
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-500">
            Explore our best-selling products with top-notch quality and unbeatable prices.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-full object-cover rounded-md"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    {data.title}
                  </h3>
                  {/* <p className="text-sm text-gray-500 mb-2">Color: {data.color}</p> */}
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-gray-700 font-medium">{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center mt-10">
            <button className="text-center cursor-pointer bg-primary text-white py-2 px-6 rounded-full text-lg font-medium hover:bg-primary-dark transition duration-300">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
