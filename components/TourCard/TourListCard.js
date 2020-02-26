function TourListCard() {
  return (
    <>
      <div class="list-left-sidebar">
        <a href="tour-item.html" class="trending-tour-item">
          <div class="trending-tour-item__sale"></div>
          <div class="list-left-sidebar__grid">
            <img
              class="trending-tour-item__thumnail"
              src="/static/assets/images/uploads/tours/tour1.jpg"
              alt="tour1"
            />
            <div class="trending-tour-item__info">
              <h3 class="trending-tour-item__name">nepal camp treks</h3>
              <div class="trending-tour-item__group-infor">
                <div class="trending-tour-item__group-infor--left">
                  <span class="trending-tour-item__group-infor__rating"></span>
                  <div class="trending-tour-item__group-infor__lasting">
                    <img
                      src="/static/assets/images/tours/lasting.png"
                      alt="lasting"
                    />{" "}
                    5 Days / 4 Nights
                  </div>
                </div>
              </div>
              <p class="list-left-sidebar__tour-descript">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi esse, atque laboriosam reprehenderit est iure minima
                nostrum voluptatibus, totam aut duci
              </p>
            </div>
            <div class="list-left-sidebar__price">
              <div class="list-left-sidebar__price__discount">
                <span>From</span>{" "}
                <span class="trending-tour-item__group-infor__sale-price">
                  {" "}
                  $999
                </span>
              </div>
              <span class="trending-tour-item__group-infor__price">$799</span>
              <div class="list-left-sidebar__price__view-detail">
                VIEW DETAIL
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default TourListCard;
