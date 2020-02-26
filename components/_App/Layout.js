import Head from "next/head";

import Router, { useRouter } from "next/router";
import Header from "./Header";
import HeaderInner from "./HeaderInner";
import Footer from "./Footer";
import HeadContent from "./HeadContent";

function Layout({ children }) {
  const router = useRouter();

  function HeaderFunction() {
    if (router.pathname === "/") {
      return <Header />;
    }
    return <HeaderInner />;
  }

  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel="stylesheet" type="text/css" href="/static/styles.css" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link rel="stylesheet" href="/static/bootstrap.min.css" />
        <link rel="stylesheet" href="/static/assets/styles/css/slick.css" />
        <link
          rel="stylesheet"
          href="/static/assets/styles/css/slick-theme.css"
        />
        <link
          rel="stylesheet"
          href="/static/assets/styles/css/jquery.datepicker2.css"
        />
        <link rel="stylesheet" href="/static/assets/styles/css/animate.css" />

        <link rel="stylesheet" href="/static/assets/styles/style.css" />

        <title>ReactReserve</title>
      </Head>
      <HeaderFunction />

      {children}
      <div className="scroll-top">
        <i className="fas fa-angle-up"></i>
      </div>
      <Footer />
      <script src="/static/assets/scripts/jquery-3.4.1.js"> </script>
      <script src="/static/assets/scripts/slick.min.js"></script>
      <script src="/static/assets/scripts/jquery.datepicker2.js"></script>
      <script src="/static/assets/scripts/isotope.pkgd.min.js"></script>
      <script src="/static/assets/scripts/app.js"></script>
      <script src="/static/assets/scripts/jquery-3.4.1.js"> </script>
      <script src="/static/assets/scripts/priceRangeSlider.js"></script>
    </>
  );
}

export default Layout;
