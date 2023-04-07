import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan , faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


const Cart = ({cart}) => {
    
    let totalPrice = 0 ;
    let totalShipping = 0 ;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = (totalPrice * 7) / 100 ;
    const grandTotal = totalPrice + totalShipping + tax ; 

    return (
        <div className='cart'>
            <h3 className='text-3xl text-center'>Order Summary</h3>
            <p className='my-3'>Selected Items : {cart.length}</p>
            <p>Total Price : ${totalPrice}</p>
            <p className='my-2'>Total Shipping : ${totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <h6 className='my-2 font-bold text-xl'>Grand Total : ${grandTotal.toFixed(2)}</h6>
            <button className='btn btn-error w-full text-white flex justify-between my-3'>
                <span>Clear Cart</span>
                <span><FontAwesomeIcon icon={faTrashCan} /> </span>
            </button>
            <button className='btn btn-error w-full text-white flex justify-between'>
                <span>Review Order</span>
                <span><FontAwesomeIcon icon={faArrowRightLong} /> </span>
            </button>
        </div>
    );
};

export default Cart;