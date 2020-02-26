function Video() {
  return (
    <section>
      <div className="video-popup-1">
        <div className="video-popup-1__head-Brg"></div>
        <div className="container">
          <div className="video-popup-1__tittle">
            <img
              src="/static/assets/images/uploads/video-popup/melbouensnow.png"
              alt="melbournetittle"
            />
          </div>
          <h2>VIDEO REVIEW</h2>
          <div className="video-popup-1__area">
            <span id="btn-popup">
              <img
                src="/static/assets/images/video-popup/btn-popup.png"
                alt="button-pop"
              />
            </span>
            <div className="video-popup-img">
              <img
                src="/static/assets/images/uploads/video-popup/imgSnowtour.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="preview-video-1">
        <div className="preview-video-1__close"></div>
        <div className="preview-video-1__area">
          <span className="preview-video-1__btn-close">&times;</span>
          <iframe
            className="preview-video-1__iframe"
            src="index.html#"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            data-src="https://www.youtube.com/embed/ePtcI8obTVo?autoplay=1"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Video;
