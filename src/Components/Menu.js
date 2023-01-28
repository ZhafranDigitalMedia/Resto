/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
import "aos/dist/aos.css";
import AOS from "aos";
import ReactLoading from "react-loading";

const Menu = () => {
  const [meals, setMeal] = useState([]);

  const [foodModal, setFoodModal] = useState([]);
  const [loading, setLoading] = useState(true);

  const getFoodModal = async (idMeal) => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    // console.log(res.data.meals[0]);
    
    setTimeout(() => {
      // console.log(res.data.meals[0]);
      setFoodModal(res.data.meals[0]);
      setLoading(false);
    }, 2000);

    setLoading(true);
  };

  const getMeal = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        setMeal(res.data.meals);
      })
      .catch((res) => {
        console.error(res);
      });
  };

  useEffect(() => {
    getMeal();
    getFoodModal();
    AOS.init({
      once: false,
    });
  }, []);

  console.log(meals);

  function truncateString(str, num) {
    if (num > str.length) {
      return str;
    } else {
      str = str.substring(0, num);
      return str + "...";
    }
  }

  return (
    <section id="menu">
      <div className="bg-menu flex items-center flex-col p-32 max-lg:px-4 max-xl:px-20">
        <div className="title -mb-10 max-lg:text-7xl">Discover</div>
        <div className="subtitle text-white z-10 max-lg:text-5xl">Our Menu</div>

        <div className="m-10 p-5 bg-white w-full h-full rounded-md flex flex-wrap gap-8 justify-center items-center">
          {meals?.slice(0, 6).map((meal) => (
            <>
              <div
                className="menu-card border w-1/4 h-auto rounded-lg max-lg:text-xs max-lg:w-full"
                data-aos="fade-up"
              >
                <img
                  className="object-cover rounded-t-lg"
                  src={meal.strMealThumb}
                  alt="Ini gambar menu"
                />
                <div className="py-4 px-2 flex flex-col">
                  <h2 className="text-xl font-semibold ">
                    {truncateString(meal.strMeal, 20)}
                  </h2>
                  <h2 className="text-xs mt-1">{meal.strArea}</h2>
                  <button
                    className="uppercase ml-auto mt-5 text-sm relative before:content-[''] before:absolute before:block before:w-full before:h-[2px]
                      before:bottom-0 before:left-0 before:bg-yellow-400
                      before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
                      before:transition before:ease-in-out before:duration-300 "
                    data-bs-toggle="modal"
                    data-bs-target="#modal-food"
                    value={foodModal}
                    onClick={(e) => getFoodModal(meal.idMeal)}
                  >
                    Read More
                  </button>
                </div>
              </div>

              <div
                class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="modal-food"
                tabindex="-1"
                aria-labelledby="exampleModalXlLabel"
                aria-modal="true"
                role="dialog"
              >
                <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
                  <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    {loading ? (
                      <div className="flex h-screen justify-center items-center">
                        <ReactLoading
                          type="spin"
                          color="red"
                          width={50}
                          height={50}
                        />
                      </div>
                    ) : (
                      <>
                        <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                          <h5
                            class="text-xl font-medium leading-normal text-gray-800"
                            id="exampleModalXlLabel"
                          >
                            {foodModal.strMeal} - {foodModal.strArea}
                          </h5>
                          <button
                            type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body relative p-4">
                          <img src={foodModal.strMealThumb} alt="img" />
                          <p className="font-bold mb-2 text-xl">Instructions</p>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strInstructions}
                          </li>
                          <p className="font-bold mb-2 text-xl">Category</p>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strCategory}
                          </li>
                          <p className="font-bold mb-2 text-xl"> Tags</p>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strTags}
                          </li>
                          <p className="font-bold mb-2 text-xl"> Ingredient</p>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient1}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient2}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient3}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient4}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient5}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient6}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient7}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient8}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient9}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient10}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient11}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient12}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient13}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient14}
                          </li>
                          <li className="font-body mb-4 text-base">
                            {foodModal.strIngredient15}
                          </li>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
