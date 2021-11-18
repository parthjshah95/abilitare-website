import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Assets/CSS/News.css';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1480 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    small: {
        breakpoint: { max: 1480, min: 1024 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 775 },
        items: 2,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 775, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function News() {
    return (
        <div className="news-section">
            <div className="news-heading">
                <h1>In The <span className="special-char">News</span></h1>
            </div>
            <div className="main-news">
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={false} // means to render carousel on server-side.
                    infinite={false}
                    autoPlay={false}
                    autoPlaySpeed={4000} // in ms
                    keyBoardControl={true}
                    customTransition="transform 2000ms ease-in-out"
                    transitionDuration={2000}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-10-px"
                >

                    <div class="p-10">
                        <div class="max-w-sm rounded overflow-hidden shadow-5x">
                            {/* <img class="w-full" src="https://images.squarespace-cdn.com/content/v1/574f5d401bbee0485a5f2027/3e960c54-9076-4652-9b44-2d449b9f23a4/PS27+Leadership+Day+Shark+Tank+Winner.png?format=750w" alt="Mountain" /> */}
                            <img class="w-full" src="https://media-exp1.licdn.com/dms/image/C4E22AQHVI8FCI4JM8g/feedshare-shrink_2048_1536/0/1635358821482?e=1638403200&v=beta&t=0VnawI2vGs3rMomoBbQUJOdHuFS4FlHMaPrVoTPWtLw" alt="Mountain" />
                            <div class="px-6 py-4">
                                <a href="https://www.ps27ventures.com/news/leadershipdaysharktankwinner" class="font-bold text-xl mb-2">Over 200 Founders Attend PS27 Leadership Day and Startup Abilitare Takes Home $10K</a>
                                <p class="text-gray-700 text-base">
                                    Congratulations to the Abilitare team, Parth Shan and Mohit Patil for winning the PS27 Leadership Day $10K Shark Tank Prize!..
                                </p>
                            </div>
                            <div class="px-6 pt-1 pb-2">
                                <a href="https://www.ps27ventures.com/news/leadershipdaysharktankwinner" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="p-10">
                        <div class="max-w-sm rounded overflow-hidden shadow-5x">
                            <img class="w-full" src="https://media-exp1.licdn.com/dms/image/C4E22AQGX2PnOFQDwBg/feedshare-shrink_800/0/1634080437157?e=1638403200&v=beta&t=4UngFBfqHMdCyfvd9fPCrLGvpKVXDFCxr93h1uMh2Fg" height="201" alt="Mountain" />
                            <div class="px-6 py-4">
                                <a href="https://www.facebook.com/FloridaVentureForum/posts/4287381377981564" class="font-bold text-xl mb-2">Abilitare won the Collegiate Competition at the EarlyStage21 Capital Conference</a>
                                <p class="text-gray-700 text-base">
                                    With more than 250+ attendees and 25+ early-stage startups, this was one of the largest venture capital conferences in..
                                </p>
                            </div>
                            <div class="px-6 pt-1 pb-2">
                                <a href="https://www.facebook.com/FloridaVentureForum/posts/4287381377981564" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div class="p-10">
                        <div class="max-w-sm rounded overflow-hidden shadow-5x">
                            <img class="w-full" src="https://news.warrington.ufl.edu/wp-content/uploads/2021/04/BrainForce-1080x675.jpg" alt="Mountain" />
                            <div class="px-6 py-4">
                                <a href="https://news.warrington.ufl.edu/students/brainforce-wins-25000-in-2021-big-idea-competition/" class="font-bold text-xl mb-2">BrainForce wins $25,000 in 2021 Big Idea Competition</a>
                                <p class="text-gray-700 text-base">
                                    BrainForce empowers the disabled by providing hands-free operation of phones and computers to those who cannot use their upper limbs..
                                </p>
                            </div>
                            <div class="px-6 pt-1 pb-2">
                                <a href="https://news.warrington.ufl.edu/students/brainforce-wins-25000-in-2021-big-idea-competition/" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Read more</a>
                            </div>
                        </div>
                    </div>


                    <div class="p-10">
                        <div class="max-w-sm rounded overflow-hidden shadow-5x">
                            <img class="w-full" src="https://erau.edu/-/media/images/university/micaplex/lyv/launch-logo-4c.jpg?h=352&la=en&w=1200&hash=4AC55EA6A653B1529B2697EB08362B5B5E1B439F" alt="Mountain" />
                            <div class="px-6 py-4">
                                <a href="https://erau.edu/launchyourventure" class="font-bold text-xl mb-2">BrainForce secures third place at 2021 Launch Your Venture</a>
                                <p class="text-gray-700 text-base">
                                Launch Your Venture looks for university student-led startups with revolutionary ideas that will change the future of the engineering, aerospace and..
                                </p>
                            </div>
                            <div class="px-6 pt-1 pb-2">
                                <a href="https://erau.edu/launchyourventure" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Read more</a>
                            </div>
                        </div>
                    </div>

                </Carousel>
            </div>
        </div>
    )
}

export default News