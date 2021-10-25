import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import nano from '../../../images/nano.jpg';
import nano_headband_worn from '../../../images/nano_headband_worn.jpg';
import earable from '../../../images/earable.jpg'
import earable_worn from '../../../images/earable_worn.jpg'
import Card from './CardItem';
import '../Assets/CSS/Slideshow.css';


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
  
function Slideshow () {
    return (
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
            
            <Card 
                src={nano} 
                label="Current Beta Prototype"
                text="Prototype currently in use for beta trials"
            />
            
            <Card 
                src={nano_headband_worn} 
                label="Current Beta Prototype"
                text="Sensor can be worn as a headband"
            />
            
            <Card 
                src={earable} 
                label="Upcoming MVP"
                text="Concept design for an earable sensor"
            />
            
            <Card 
                src={earable_worn} 
                label="Upcoming MVP"
                text="Earable sensors are tiny, discreet, comfortable and portable"
            />

        </Carousel>
        )
}

export default Slideshow