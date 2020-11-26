import React from 'react';
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';

function Home() {
    return (
        <div className="mt-2 mx-2">
            <Carousel>
               <Carousel.Item interval={8000}>
                    <div className="text-center"
                        style={{
                            backgroundImage: "url(https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606290888/mumsworkshop/product-images/website/jenny-smith-FfeYgPKBgqY-unsplash_smb5y8.jpg)",
                            height: '93vh', 
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(105%)'                                
                        }}
                    >     
                        <Link to="/about">
                            <div className="car-heading">
                                mumsworkshop
                                <p className="car-subhead">
                                    flowers for every occasion<br />
                                </p>
                                    
                            </div>
                        </Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <div className="text-center"
                        style={{
                            backgroundImage: "url(https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606290888/mumsworkshop/product-images/website/ivonne-adame-6Hu3aJNdEV4-unsplash_nsnpof.jpg)",
                            height: '93vh', 
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            // opacity: '50%',                                
                        }}
                    >     
                        <Link to="/browse">
                            <h1 className="car-heading">
                                browse our catalogue
                                <p className="car-subhead">check out our latest pickings</p>    
                            </h1>  
                        </Link>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={8000}>
                <div className="text-center"
                        style={{
                            backgroundImage: "url(https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606290888/mumsworkshop/product-images/website/veri-ivanova-whOkVvf0_hU-unsplash_uam1og.jpg)",
                            height: '93vh', 
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(120%)'                    
                        }}
                    >     
                        <Link to="/contact">
                            <h1 className="car-heading">
                                contact us
                                <p className="car-subhead">not sure where to start? message us!</p>
                            </h1>  
                        </Link>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home
