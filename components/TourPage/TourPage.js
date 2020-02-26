import LeftSideSearch from "../TourPage/Search";
import TourListCard from "../TourCard/TourListCard";

function TourPage() {
  const elements = [
    "product1",
    "product2",
    "product3",
    "product1",
    "product2",
    "product3"
  ];
  return (
    <section className="grid-left-sidebar">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-5">
            <div className="left-sidebar">
              <LeftSideSearch />
            </div>
          </div>
          <div className="col-xl-9 col-lg-8 col-md-7">
            <div class="grid-left-sidebar__filter">
              <span class="grid-left-sidebar__filter--result">
                9 Results Found
              </span>
              <div class="grid-left-sidebar__filter--mode">
                <div class=" custom-select">
                  <select>
                    <option value="0">Default Sorting</option>
                    <option value="SanFrancisco">Alphabet</option>
                    <option value="NewYork">Price: Low to high</option>
                    <option value="California">Price: Hight to low</option>
                  </select>
                </div>
                <div class=" grid-left-sidebar__filter--mode--sort">
                  <img
                    src="/static/assets/images/tours/sort-mode-list.png"
                    alt="sort-mode-list"
                  />
                </div>
                <div class=" grid-left-sidebar__filter--mode--sort">
                  <img
                    src="/static/assets/images/tours/sort-mode-grid.png"
                    alt="sort-mode-grid"
                  />
                </div>
              </div>
            </div>

            {elements.map((value, index) => {
              return <TourListCard />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TourPage;
