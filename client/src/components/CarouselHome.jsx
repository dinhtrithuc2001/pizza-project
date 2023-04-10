import Carousel from 'react-bootstrap/Carousel';


function CarouselHome() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/carousel-01.png"
                    alt="First slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/carousel-02.jpeg"
                    alt="Second slide"
                />

               
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/carousel-03.jpeg"
                    alt="Third slide"
                />

               
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselHome;