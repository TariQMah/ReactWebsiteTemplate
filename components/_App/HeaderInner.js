import Link from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
function HeaderInner() {
  const router = useRouter();
  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <header id="header-2">
      <div className="wand-container">
        <div className="header-content2">
          <div className="header-content2__logo">
            <a className="header-content2__logo__sitename" href="index.html">
              <img src="/static/assets/images/logo.png" alt="logo" />
            </a>
          </div>

          <nav className="header-2-nav">
            <ul>
              <li>
                <Link href="/" active={isActive("/")}>
                  HOME
                </Link>
                <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home 1 </a>
                  </li>
                  <li>
                    <a href="index-2.html">Home 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home 3</a>
                  </li>
                  <li>
                    <a href="index-4.html">Home 4</a>
                  </li>
                  <li>
                    <a href="index-5.html">Home 5</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="tour-item.html#">TOURS </a>
                <ul className="sub-menu">
                  <li>
                    <a href="tour-grid.html">Tours Grid</a>
                  </li>
                  <li>
                    <a href="tour-list.html">Tours List</a>
                  </li>
                  <li>
                    <a href="tour-item.html#">Tours Items</a>
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
                <a href="tour-item.html#">DESTINATIONS</a>
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
                <a href="tour-item.html#">BLOG </a>
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
                <a href="tour-item.html#">PAGES</a>
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

          <a href="tour-item.html#" className="header-content2__call">
            <img src="/static/assets/images/call.png" alt="call" />
            <div className="header-content2__call__phone-number">
              <p>Call Us Today!</p>
              <span>+053 569 7810</span>
            </div>
          </a>
          <div className="search-area">
            <div className="search-area__close"></div>
            <form action="tour-item.html#">
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
                <a href="tour-item.html#">
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
                <a href="tour-item.html#">
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
                    <a href="tour-item.html#">
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
                <a href="tour-item.html#">
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
                <a href="tour-item.html#">
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
                <a href="tour-item.html#">
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
                  <a
                    className="header-nav-mobile__signin"
                    href="tour-item.html#"
                  >
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

          <div className="header-content2__hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderInner;
