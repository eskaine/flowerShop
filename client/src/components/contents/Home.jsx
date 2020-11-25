
import React from 'react';
import { Link } from 'react-router-dom'
import { Carousel, Container, Row } from 'react-bootstrap';
// import { saveState, loadState } from '../../helpers/localStorage';


function Home() {
    // console.log("home state", loadState());
    return (
        <div className="mt-2 mx-2">
            <Carousel>
               <Carousel.Item interval={8000}>
                    <div className="w-100 text-center d-flex align-middle"
                        style={{
                            backgroundImage: "url(https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606290888/mumsworkshop/product-images/website/jenny-smith-FfeYgPKBgqY-unsplash_smb5y8.jpg)",
                            height: '93vh', 
                            backgroundSize: 'cover',
                            opacity: '50%',                                
                        }}
                    >     
                    <Container fluid style={{background: 'none'}}> 
                        <Row className="d-flex justify-content-center">
                            <Link to="/products">
                                <h1 className="car-heading">mumsworkshop</h1>
                            </Link>
                        </Row>
                    </Container>

                    </div>
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <div className="w-100 text-center"
                        style={{
                            backgroundImage: "url(https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606290888/mumsworkshop/product-images/website/ivonne-adame-6Hu3aJNdEV4-unsplash_nsnpof.jpg)",
                            height: '93vh', 
                            backgroundSize: 'cover',
                            opacity: '50%',                                
                        }}
                    >     
                        <Link to="/products">
                            <h1 className="car-heading">browse our catalogue</h1>  
                        </Link>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={8000}>
                <div className="w-100 text-center"
                        style={{
                            backgroundImage: "url(https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606290888/mumsworkshop/product-images/website/veri-ivanova-whOkVvf0_hU-unsplash_uam1og.jpg)",
                            height: '93vh', 
                            backgroundSize: 'cover',
                            opacity: '50%',                                
                        }}
                    >     
                        <Link to="/products">
                            <h1 className="car-heading">contact us</h1>  
                        </Link>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home
