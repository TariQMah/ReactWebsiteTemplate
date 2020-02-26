import TourCard from "../TourCard/TourCard";
import React, { useEffect } from "react";
import axios from "Axios";
function Tours({ tours }) {
  React.useEffect(() => {
    getData();
  });

  async function getData() {
    const url = "http://www.secretcloset.pk/blog/wp-json/wp/v2/posts";
    const response = await axios.get(url);
    console.log(response);
  }
  const elements = [
    "product1",
    "product2",
    "product3",
    "product1",
    "product2",
    "product3"
  ];

  return (
    <section id="col-3-tours">
      <div className="container">
        <div className="trending-tour__tittle">
          <div className="section-tittle">
            <h2>Trending Tour</h2>
            <div className="section-tittle__line-under"></div>
            <p>
              Trending <span>Tour</span>
            </p>
          </div>
        </div>
        <div className="row">
          {elements.map((value, index) => {
            return (
              <div className="col-lg-4 col-sm-6 col-12">
                <TourCard tours={tours} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
Tours.getInitialProps = async () => {
  const url = "http://www.secretcloset.pk/blog/wp-json/wp/v2/posts";
  const response = await axios.get(url);
  console.log(response);
  return { tours: response.data };
};

export default Tours;
