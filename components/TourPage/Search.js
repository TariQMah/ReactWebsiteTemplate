import { Form } from "react-bootstrap";
function Search() {
  return (
    <>
      <div className="left-sidebar__item left-sidebar__item--form">
        <h3>PLAN YOUR TRIP</h3>
        <form className="left-sidebar-form">
          <div className="form__item form__item--select">
            <Form.Group
              className="form__item "
              controlId="exampleForm.ControlSelect1"
            >
              <Form.Label>Destination</Form.Label>
              <Form.Control className="custom-select" as="select">
                <option value="0">Select destinaion</option>
                <option value="SanFrancisco">SanFrancisco</option>
                <option value="NewYork">NewYork</option>
                <option value="California">California</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="form__item ">
            <label>Check in</label>
            <div className="form__item--datepicker">
              <span className="far fa-calendar-alt"></span>
              <input
                value="31 / 4 / 2017"
                type="text"
                id="date-check-in"
                data-select="datepicker"
              />
            </div>
          </div>
          <div className="form__item">
            <label>Check out</label>
            <div className="form__item--datepicker">
              <span className="far fa-calendar-alt"></span>
              <input
                value="6 / 2 / 2018"
                type="text"
                id="date-check-out"
                data-select="datepicker"
              />
            </div>
          </div>
          <div className="form__item form__item--select">
            <Form.Group
              className="form__item "
              controlId="exampleForm.ControlSelect1"
            >
              <Form.Label>Travel type</Form.Label>
              <Form.Control className="custom-select" as="select">
                <option value="0">Select destinaion</option>
                <option value="Adventure">Adventure</option>
                <option value="Hiking">Hiking</option>
                <option value="Suffing">Suffing</option>
              </Form.Control>
            </Form.Group>
          </div>

          <div className="left-sidebar__price-range">
            <label>Filter Price</label>
            <div className="left-sidebar__price-range__value">
              <span id="slider-range-value1"></span>
              <span id="slider-range-value2"></span>
            </div>
            <div
              className="left-sidebar__price-range__range"
              id="slider-range"
            ></div>
            <input type="hidden" name="min-value" />
            <input type="hidden" name="max-value" />
          </div>
          <input
            className="left-sidebar-form__submit"
            type="submit"
            value="SEARCH"
          />
        </form>
      </div>

      <div className="left-sidebar__item left-sidebar__item--type-filter ">
        <h3>type filter</h3>
        <form action="" className="left-sidebar-form">
          <label>Star Rating</label>
          <div className="star-rating">
            <p className="star-rating__field">
              <input name="rating" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="star-rating__5-stars"></span>
            </p>
            <p className="star-rating__field">
              <input name="rating" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="star-rating__4-stars"></span>
            </p>
            <p className="star-rating__field">
              <input name="rating" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="star-rating__3-stars"></span>
            </p>
            <p className="star-rating__field">
              <input name="rating" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="star-rating__2-stars"></span>
            </p>
            <p className="star-rating__field">
              <input name="rating" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="star-rating__1-stars"></span>
            </p>
          </div>

          <label>Duration</label>
          <div className="duration">
            <p className="star-rating__field">
              <input name="duration" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="choices-content">1 Day Tour</span>
            </p>
            <p className="star-rating__field">
              <input name="duration" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="choices-content">2 - 4 Days Tour</span>
            </p>
            <p className="star-rating__field">
              <input name="duration" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="choices-content">5 - 7 Days Tour</span>
            </p>
            <p className="star-rating__field">
              <input name="duration" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="choices-content">7+ Days Tour</span>
            </p>
            <a href="tour-list.html#" className=" duration__arrow-down">
              More
            </a>
          </div>

          <label>Activity Type</label>
          <div className="activity-type">
            <p className="star-rating__field">
              <input name="activity" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="choices-content">Trekking</span>
            </p>
            <p className="star-rating__field">
              <input name="activity" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="choices-content">Kayaking</span>
            </p>
            <p className="star-rating__field">
              <input name="activity" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="choices-content">Camping</span>
            </p>
            <p className="star-rating__field">
              <input name="activity" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="choices-content">Adventure</span>
            </p>
            <p className="star-rating__field">
              <input name="activity" type="checkbox" />
              <span className="star-rating__box"></span>
              <span className="choices-content">Skiing</span>
            </p>
            <a href="tour-list.html#" className="duration__arrow-down">
              More
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;
