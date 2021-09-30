import React from 'react';
import { FaProductHunt } from 'react-icons/fa';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
   const total = cart.reduce((total,crs)=>total+crs.course_rate,0);
//    let total = 0;
//    for (let i = 0;i<cart.length;i++){
//        const courses = cart[i];
//        total = total + courses.course_rate;
//    }
   const formatNumber = num =>{
       const precision = num.toFixed(2);
       return Number(precision)
   }
   const tax = (total/10).toFixed(2);
   const allTotal = (total+Number(tax)).toFixed(2);
    return (
        <div>
            <div className="sideCard pt-5 ">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className="cart-content">
                        <h2>Course Intake summery</h2>
                            <h2>Courses ordered: {cart.length}</h2>
                            <p>Course rate: {formatNumber(total)} </p>
                            <p><small>tax : {tax}</small></p>
                            <p>Total price: {allTotal}</p>

                        </div>
                    </div>
                </div>
            </div>
            


        </div>
    );
};

export default Cart;
// var numbers = [1,2,4,3];
// var sum = numbers.reduce((preNum,presentNum)=>{
// return preNum+presentNum;
// },0)
// console.log(sum)