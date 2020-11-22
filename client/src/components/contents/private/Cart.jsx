import React, { useState, Fragment, useEffect, Div } from "react";
import { Row, Col, Card, Form, Image, Button} from "react-bootstrap";
import axios from "axios";
import { decode } from "jsonwebtoken";


function Cart() {
    const [displayCart, setDisplayCart] = useState([])
    const [quantity, setQuantity] = useState({})

    async function getCart() {

        try {
            let token = localStorage.getItem("token");
            let user = decode(token);
            let userid = user.id;
            let response = await axios.get(process.env.REACT_APP_USER + `/${userid}/cart`)
            console.log(response.data.userCart)
            setDisplayCart(response.data.userCart)
        } catch (error) {
            console.log(error)
        }
    }

    async function updateQuantity(){
        // console.log("hello")
        try{

            let response = await axios.put(process.env.REACT_APP_USER + `/cart/userid/updateCart`, quantity)
            getCart();
        }catch (error){
            console.log(error)
        }
        
    }

    
    async function removeItem(e){
        try{
            let token = localStorage.getItem("token");
            let user = decode(token);
            let userid = user.id;
            let data = {"cartid":e.target.id, userid}
            console.log(data)
            let response = await axios.put(process.env.REACT_APP_USER + `/cart/userid/removeFromCart`, data)
            getCart();
        }catch (error){

        }
    }

    
    function changeHandler(e){
        let token = localStorage.getItem("token");
        let user = decode(token);
        let userid = user.id;
        setQuantity((quantity)=>({...quantity,"cartid": e.target.id, [e.target.name]: e.target.value, userid}))
        console.log(quantity)
    }


    useEffect(() => {
        getCart();
    }, [])






    return (
        <Fragment>
            <Row className="no-gutters">
                <Col md={8} className="border">
                    CART
                    {displayCart.map((cart,index)=>(
                        <Row className="no-gutters">
                            <Col md={6} className="border">
                                <Image src={cart.cartItem.img_url} fluid/>
                            </Col>
                            <Col md={6} className="border">
                                <Card>
                                    <Card.Title>
                                        {cart.cartItem.productName}
                                    </Card.Title>
                                    <Card.Body>
                                    <Card.Text>
                                    {cart.cartItem.desc}
                                    </Card.Text>
                                    <Card.Text>
                                    Quantity : {cart.count} <br/>
                                    Total Price : {cart.totalPrice} <br/>
                                    Ribbon : {cart.ribbon} <br/>
                                    Wrap : {cart.wrap}
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Form inline>
                                            <Form.Control 
                                            type="Number" 
                                            name="count"
                                            id={cart._id}
                                            placeholder={cart.count} 
                                            onChange={changeHandler}
                                            />
                                            <Button
                                            onClick={updateQuantity}
                                            >Update cart</Button>
                                            <Button
                                            id={cart._id}
                                            onClick={removeItem}
                                            >Remove from Cart</Button>
                                        </Form>
                                        
                                    </Card.Footer>
                                </Card>
                                
                            </Col>

                        </Row>
                    ))}
                </Col>
                <Col md={4} className="border">
                    <Button>Check Out</Button>
                    <Button>Continue Browsing</Button>
                </Col>
            </Row>
        </Fragment>
    )
};

export default Cart;





















































//EVERYTHING from here on is my past code
    // function Cart({cart,setcart}) {

    //     let sum =0;
    //     let gst =0;
    //     let grandtotal =0;
    //     let shipping = 5;
        
        
    //     function carttotal(){
    //         let newSum = 0;
    //         let newGst = 0;
            
    //         cart.forEach((item,index)=>{
    //             newSum += item.price
    //             sum = newSum;
    //         })
    //         console.log(sum)
    //         gsttotal(newSum,newGst);
            
    //     }
    //     carttotal();
        
        
        
    //     function gsttotal(newSum,newGst){
           
    //         newGst = newSum*7/100;
    //         gst = Math.ceil(newGst.toFixed(2));
    //     }
        
        
    //     function totalup(){
    //         let newTotal = parseInt(sum) + parseInt(gst) + parseInt(shipping);
    //         grandtotal = parseInt(newTotal);
    //     }
    //     totalup();
    //     console.log(sum,gst,grandtotal)
        
        
    //     function remove(e){
    //         // console.log(parseInt(e.target.id));
    //         // console.log(cart)
    //         let updatedCart=[...cart]
        
    //         updatedCart.forEach((item,index)=>{
    //             if((parseInt(item.id) === parseInt(e.target.id)) && parseInt(item.quantity)>1){
    //                 item.quantity -= 1;            
    //                 item.price = Math.ceil((item.price * parseInt(item.quantity)/(parseInt(item.quantity)+1)))
    //             } else if ((parseInt(item.id) === parseInt(e.target.id)) && parseInt(item.quantity)===1){
                
    //             updatedCart.splice(index,1)}
    //         })
    //         console.log(updatedCart)
    //         setcart(updatedCart)
        
    //     }