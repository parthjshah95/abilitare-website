import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Assets/CSS/Testimonials.css';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 627 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 627, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function Testimonials() {
    return (
        <div className="testimonial-section">
            <div className="testimonial-heading">
                <h1>Testimonials</h1>
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
                        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  </blockquote>
                        <div class="author">
                            <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg" alt="sq-sample1" />
                            <h5>John Doe <span> Salesman</span></h5>
                        </div>
                    </figure>

                    <figure class="snip1192">
                        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  </blockquote>
                        <div class="author">
                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1" />
                            <h5>Pelican Steve <span> Author</span></h5>
                        </div>
                    </figure>

                    <figure class="snip1192">
                        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation  </blockquote>
                        <div class="author">
                            <img src="https://image.shutterstock.com/image-photo/close-isolated-portrait-cheerful-happy-260nw-763024246.jpg" alt="sq-sample1" />
                            <h5>James Smith <span> Consultant</span></h5>
                        </div>
                    </figure>

                    <figure class="snip1192">
                        <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation </blockquote>
                        <div class="author">
                            <img src="https://image.shutterstock.com/mosaic_250/2598844/1554086789/stock-photo-close-up-portrait-of-yong-woman-casual-portrait-in-positive-view-big-smile-beautiful-model-posing-1554086789.jpg" alt="sq-sample1" />
                            <h5>Angela Doe <span> Businesswoman</span></h5>
                        </div>
                    </figure>

                </Carousel>
            </div>
        </div>
    )
}

export default Testimonials