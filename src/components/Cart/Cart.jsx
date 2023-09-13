/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Cart.css'

const Cart = ({selectedActor, remaining, totalCost}) => {
    // console.log(selectedActor);
    // const {name} = selectedActor;
    return (
        <div>
            <h5>Total Cart: {selectedActor.length}</h5>
            <h5>Remaining: {remaining}</h5>
            <h5>Total cost: {totalCost}</h5>
            {
                selectedActor.map(actor=>(<li key={actor.id}>{actor.name}</li>))
            }
        </div>
    );
};

export default Cart;