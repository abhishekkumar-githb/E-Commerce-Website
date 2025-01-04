import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          {" "}
          {/* Reduced gap from 6 to 4 */}
          {/* image section */}
          <div data-aos="zoom-in" className="flex justify-center">
            <img
              src={BannerImg}
              alt="Banner"
              className="max-w-[450px] h-[400px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* text details section */}
          <div className="flex flex-col justify-center gap-4 sm:pt-0">
            {" "}
            {/* Reduced gap from 6 to 4 */}
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Winter Sale up to 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Discover amazing discounts on your favorite products this winter.
              Shop now and save up to 50% on exclusive items for a limited time!
            </p>
            <div className="flex flex-col gap-3">
              {" "}
              {/* Reduced gap from 4 to 3 */}
              <div data-aos="fade-up" className="flex items-center gap-3">
                {" "}
                {/* Reduced gap from 4 to 3 */}
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-3">
                {" "}
                {/* Reduced gap from 4 to 3 */}
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-3">
                {" "}
                {/* Reduced gap from 4 to 3 */}
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-3">
                {" "}
                {/* Reduced gap from 4 to 3 */}
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
