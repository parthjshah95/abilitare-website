import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Assets/CSS/Testimonials.css';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
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
            showDots={true}
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
                <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
                <div class="author">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1" />
                    <h5>Pelican Steve <span> LittleSnippets</span></h5>
                </div>
            </figure>

            <figure class="snip1192">
                <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
                <div class="author">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1" />
                    <h5>Pelican Steve <span> LittleSnippets</span></h5>
                </div>
            </figure>

            <figure class="snip1192">
                <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
                <div class="author">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1" />
                    <h5>Pelican Steve <span> LittleSnippets</span></h5>
                </div>
            </figure>

            <figure class="snip1192">
                <blockquote>Calvin: Sometimes when I'm talking with others, my words can't keep up with my thoughts. I wonder why we think faster than we speak. Hobbes: Probably so we can think twice. </blockquote>
                <div class="author">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg" alt="sq-sample1" />
                    <h5>Pelican Steve <span> LittleSnippets</span></h5>
                </div>
            </figure>

        </Carousel>
        </div>
        </div>
    )
}

export default Testimonials