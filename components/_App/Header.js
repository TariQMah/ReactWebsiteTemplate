import { Form } from "react-bootstrap";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
  const router = useRouter();
  function isActive(route) {
    return route === router.pathname;
  }
  const [tour, setTour] = React.useState({
    pickdate: "",
    selectAge2: "",
    selectAge: "",
    pickdate2: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setTour({ [name]: value });
    console.log(tour);
  }

  return (
    <header id="header-1">
      <div className="wand-container">
        <div className="header-content1">
          <div className="header-content1__logo">
            <a className="header-logo" href="index.html">
              <img src="/static/assets/images/logo.png" alt="logo" />
            </a>
          </div>
          <nav className="header-1-nav">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link>
                  <a href="/tours">TOURS</a>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <a href="tour-grid.html">Tours Grid</a>
                  </li>
                  <li>
                    <Link>
                      <a href="/tourList">Tour List</a>
                    </Link>
                  </li>
                  <li>
                    <a href="index.html#">Tours Items</a>
                    <ul>
                      <li>
                        <a href="tour-item.html">Tours Items</a>
                      </li>
                      <li>
                        <a href="tour-item-2.html">Tours Items 2</a>
                      </li>
                      <li>
                        <a href="tour-item-3.html">Tours Items 3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="index.html#">DESTINATIONS</a>
                <ul className="sub-menu">
                  <li>
                    <a href="destination-grid.html">Destination Grid</a>
                  </li>
                  <li>
                    <a href="destination-mansory.html">Destination Mansory</a>
                  </li>
                  <li>
                    <a href="destination-item.html">Destination Item</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="index.html#">BLOG </a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog List</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Single</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="index.html#">PAGES</a>
                <ul className="sub-menu">
                  <li>
                    <a href="aboutus.html">About Us</a>
                  </li>
                  <li>
                    <a href="404.html">404 Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">CONTACT </a>
              </li>
            </ul>
          </nav>
          <div className="search-area">
            <div className="search-area__close"></div>
            <form action="index.html#">
              <input
                className="search-area__input"
                placeholder="Search..."
                type="text"
              />
              <button className="search-area__submit" type="submit">
                <span>Hit Enter to search or Esc key to close</span>
              </button>
            </form>
          </div>
          <nav className="header-nav-mobile">
            <ul>
              <li>
                <a href="index.html#">
                  HOME <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">HOME 1</a>
                  </li>
                  <li>
                    <a href="index-2.html">HOME 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">HOME 3</a>
                  </li>
                  <li>
                    <a href="index-4.html">HOME 4</a>
                  </li>
                  <li>
                    <a href="index-5.html">HOME 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="index.html#">
                  TOURS <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="tour-grid.html">TOURS GRID</a>
                  </li>
                  <li>
                    <a href="tour-list.html">TOURS LIST</a>
                  </li>
                  <li>
                    <a href="index.html#">
                      TOURS ITEMS<i className="fa fa-angle-down"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="tour-item.html">TOURS ITEM</a>
                      </li>
                      <li>
                        <a href="tour-item-2.html">TOURS ITEM2</a>
                      </li>
                      <li>
                        <a href="tour-item-3.html">TOURS ITEM3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="index.html#">
                  DESTINATIONS <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="destination-grid.html">DESTINATION GRID</a>
                  </li>
                  <li>
                    <a href="destination-mansory.html">DESTINATION MANSORY</a>
                  </li>
                  <li>
                    <a href="destination-item.html">DESTINATION ITEM</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="index.html#">
                  BLOG <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">BLOG LIST</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">BLOG GRID</a>
                  </li>
                  <li>
                    <a href="blog-single.html">BLOG SINGLE</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="index.html#">
                  PAGES <i className="fa fa-angle-down"></i>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="aboutus.html">ABOUT US</a>
                  </li>
                  <li>
                    <a href="404.html">404 PAGE</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">
                  CONTACT <i className="fa fa-angle-down"></i>
                </a>
              </li>
              <li>
                <div className="header-nav-mobile__search-area">
                  <a className="header-nav-mobile__signin" href="index.html#">
                    <img
                      src="/static/assets/images/account.png"
                      alt="account"
                    />
                  </a>
                  <a className="header-nav-mobile__search-bar">
                    <img
                      src="/static/assets/images/headersearch.png"
                      alt="headersearch"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </nav>

          <div className="header-content1__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="header-tittle1">
          <img
            src="/static/assets/images/uploads/pagebanner/header1-tittle.png"
            alt="header-1tittle"
          />
        </div>
      </div>
      <div id="form-1-area">
        <div className="container">
          <div className="form-area">
            <form id="wanderlust-form1" action="index.html#">
              <div className="form__item form__item--select">
                <label>DESTINATION</label>
                <Form.Group
                  className="form__item "
                  controlId="exampleForm.ControlSelect1"
                >
                  <Form.Label>Example select</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="selectAge"
                    className="custom-select"
                    as="select"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="form__item ">
                <label>CHECK IN</label>
                <div className="form__item--datepicker">
                  <span className="far fa-calendar-alt"></span>
                  {/* <DatePicker/> */}
                  <input
                    value="31 / 4 / 2017"
                    type="text"
                    name="pickdate"
                    onChange={handleChange}
                    id="date-check-in"
                    data-select="datepicker"
                  />
                </div>
              </div>
              <div className="form__item">
                <label>CHECK OUT</label>
                <div className="form__item--datepicker">
                  <span className="far fa-calendar-alt"></span>
                  <input
                    value="6 / 2 / 2018"
                    name="pickdate2"
                    onChange={handleChange}
                    type="text"
                    id="date-check-out"
                    data-select="datepicker"
                  />
                </div>
              </div>
              <div className="form__item form__item--select">
                <Form.Group
                  className="form__item "
                  onChange={handleChange}
                  name="selectAge2"
                  controlId="exampleForm.ControlSelect1"
                >
                  <Form.Label>TRAVEL TYPE</Form.Label>
                  <Form.Control className="custom-select" as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
              </div>
              <div className="form__item form__item--submit">
                <input type="submit" value="FIND NOW" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
