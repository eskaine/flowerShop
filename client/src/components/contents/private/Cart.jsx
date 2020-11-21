import React from 'react';

function Cart() {
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










    return (
        <div>
            Cart
        </div>
    )
};

export default Cart;
