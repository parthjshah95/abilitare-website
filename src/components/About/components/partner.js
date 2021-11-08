import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Assets/partners.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 627 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 627, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function Partners() {
  return (
    <div className="testimonial-section">
      <div className="testimonial-heading">
        <h1>
          Who are our amazing <span className="special-char">Partners</span>?
        </h1>
      </div>
      <div className="main-testimonials">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000} // in ms
          keyBoardControl={true}
          customTransition="transform 2000ms ease-in-out"
          transitionDuration={2000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-10-px"
        >
          <figure class="snip1192">
            <div class="author">
              <img
                src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg"
                alt="sq-sample1"
              />
              <h5>
                XYYZ <span> Hardware</span>
              </h5>
            </div>
          </figure>

          <figure class="snip1192">
            <div class="author">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                alt="sq-sample1"
              />
              <h5>
                Axis <span> Payments</span>
              </h5>
            </div>
          </figure>

          <figure class="snip1192">
            <div class="author">
              <img
                src="https://image.shutterstock.com/image-photo/close-isolated-portrait-cheerful-happy-260nw-763024246.jpg"
                alt="sq-sample1"
              />
              <h5>
                ABC consulting agencyy <span> Consultant</span>
              </h5>
            </div>
          </figure>

          <figure class="snip1192">
            <div class="author">
              <img
                src="https://image.shutterstock.com/mosaic_250/2598844/1554086789/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg"
                alt="sq-sample1"
              />
              <h5>
                Abilitare <span> people</span>
              </h5>
            </div>
          </figure>
        </Carousel>
      </div>
    </div>
  );
}

export default Partners;
