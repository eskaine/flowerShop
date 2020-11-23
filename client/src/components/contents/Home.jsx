
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { saveState, loadState } from '../../helpers/localStorage';


function Home() {
    console.log("home state", loadState());
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={8000}>
                    <img
                    className="d-block w-100"
                    src="https://media.karousell.com/media/photos/products/2020/01/01/wedding_bridesmaids_bouquets_artificial_flowers_1577869583_e29ed926_progressive.jpg"
                    alt="First slide"
                    style={{height: '80vh', objectFit: 'cover'}}
                    />
                    <Carousel.Caption>
                    <h3>Flower Power</h3>
                    <p>We use a carousell for carousell items lolol find out more about us yay.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img
                    className="d-block w-100"
                    src="https://media.karousell.com/media/photos/products/2018/08/11/wedding_bouquet__fresh_and_dried_flowers_1533925063_d3ac757c_progressive.jpg"
                    alt="Third slide"
                    style={{height: '80vh', objectFit: 'cover'}}
                    />
                    <Carousel.Caption>
                    <h3>Browse Our Catalogue</h3>
                    <p>Link here i guess</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img
                    className="d-block w-100"
                    src="https://media.karousell.com/media/photos/products/2019/03/29/wedding_flowers_calla_lily_and_rose_bouquet_1553861072_e1397ce3_progressive.jpg"
                    alt="Third slide"
                    style={{height: '80vh', objectFit: 'cover'}}
                    />
                    <Carousel.Caption>
                    <h3>Contact Us</h3>
                    <p>We don't have to do this lol</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home
