import React, {useState} from 'react';

export const Cart = ({onAdd, onRemove, cartItems}) =>{
    const itemsPrice = cartItems.reduce((acc, curr)=>
        acc + curr.price * curr.qty, 0
    )

    return (
        <>
           <aside className="block col-1">
                <h2>Cart Items</h2>
                <div>
                    {cartItems.length === 0 && <h3>Your Cart is Empty..!! :(</h3>}
                </div>
                {cartItems.map(item => (
                    <div key={item.id} className="row">
                        <div className="col-2">
                            {item.name}
                        </div>
                        <div className="col-2">
                            <button className="add" onClick={()=>onAdd(item)}>+</button>
                            <button className="remove" onClick={()=>onRemove(item)}>-</button>
                        </div>
                    <div className="col-2 text-right">
                       <h1> {item.qty} * ${item.price} </h1>
                    </div>
                    </div>
                ))}
                {cartItems.length !== 0 && (
                    <>
                    <hr />
                    <div className="row">
                        <div className="col-2">
                            Items Price: 
                        </div>
                        <div className="col-1 text-right ">
                            <strong>
                                {itemsPrice}
                                </strong>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <button className="button yellow" onClick={() => alert('Implement Checkout!')}>
                            Checkout
                        </button>
                    </div>
                    </>
                )}
           </aside>
        </>
    )
}