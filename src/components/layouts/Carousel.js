import React from "react";

function Carousel() {
  return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" >
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="bd-placeholder-img" height="700" width="100%" src="https://www.scnsoft.com/blog-pictures/ecommerce/fashion-ecommerce/guide-to-fashion-ecommerce.png" alt="Lorem ipsum" />

              <div className="container">
                <div className="carousel-caption text-start">
                  <h1 className="text-dark">Example headline.</h1>
                  <p className="text-dark">Some representative placeholder content for the first slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary text-dark" href="#">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <img className="bd-placeholder-img" height="700" width="100%" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f52f6237807899.574d55a01cc19.jpg" alt="Lorem ipsum" />
              <div className="container">
                <div className="carousel-caption">
                  <h1 className="text-dark">Another example headline.</h1>
                  <p className="text-dark">Some representative placeholder content for the second slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary text-dark" href="#">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
            <img className="bd-placeholder-img" height="700" width="100%" src="https://botika.io/cdn-cgi/image/width=1536,height=864,fit=crop,quality=90,gravity=auto,sharpen=1,metadata=none,format=auto,onerror=redirect/wp-content/uploads/2023/11/Botika_Main_Hero_AI_Models.png" alt="Lorem ipsum" />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1 className="text-dark">One more for good measure.</h1>
                  <p className="text-dark">Some representative placeholder content for the third slide of this carousel.</p>
                  <p><a className="btn btn-lg btn-primary text-dark" href="#">Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
  );
}

export default Carousel;
