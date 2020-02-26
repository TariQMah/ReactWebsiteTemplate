function TourCard() {
  return (
    <a href="tour-item.html" className="trending-tour-item">
      <div className="trending-tour-item__sale"></div>
      <img
        className="trending-tour-item__thumnail"
        src="/static/assets/images/uploads/tours/tour1.jpg"
        alt="tour1"
      />
      <div className="trending-tour-item__info">
        <h3 className="trending-tour-item__name">nepal camp treks</h3>
        <div className="trending-tour-item__group-infor">
          <div className="trending-tour-item__group-infor--left">
            <span className="trending-tour-item__group-infor__rating"></span>
            <div className="trending-tour-item__group-infor__lasting">
              <img
                src="/static/assets/images/tours/lasting.png"
                alt="lasting"
              />{" "}
              5 Days / 4 Nights
            </div>
          </div>

          <p className="trending-tour-item__group-infor__sale-price">$999</p>
          <span className="trending-tour-item__group-infor__price">$799</span>
        </div>
      </div>
    </a>
  );
}

export default TourCard;
