import React, { useState } from 'react'
import ItemCard from './ItemCard';
import data from './data';
import { Cart } from './Cart';

const Home = () => {
    const [cartItems, setCartItems] = useState([])
    const onAdd = (item) => {
        const exist = cartItems.find(x => x.id === item.id)
        if(exist){
            setCartItems(cartItems.map(x => x.id === item.id 
                ? {...exist, qty: exist.qty + 1} 
                : x ))
        }else{
            setCartItems([...cartItems, {...item, qty: 1}])
        }
    }

    const onRemove = (item) => {
        const exist = cartItems.find(x => x.id === item.id)
        if(exist.length === 1){
            setCartItems(cartItems.filter(x => x.id !== item.id))
        }else{
            setCartItems(cartItems.map(x => x.id === item.id 
                ? {...exist, qty: exist.qty - 1} 
                : x ))
        }
    }
  return (
    <>
    <header className="row block center">
        <div>
            <a href="#/">
                <h1>Small Shopping cart</h1>
            </a>
        </div>

        <div>
         <a href="#/cart">
             Cart {' '}
             {cartItems.length !== 0 ? 
             <button className="badge">
                 {cartItems.length}
                 </button> : ''
                 }
             </a>
        </div>
    </header>
    <section>
        <div className="row">
            {data.itemData.map((item,index) => {
                return(
            <ItemCard 
            img={item.img} 
            title={item.title} 
            desc = {item.desc} 
            price={item.price} 
            item={item}
            cartItems={cartItems}
            key={index}
            onAdd={onAdd} 
            onRemove = {onRemove}
            />
                )
            })}
        </div>
        <div className="block">
            <Cart 
            cartItems={cartItems}
            onAdd={onAdd} 
            onRemove = {onRemove}/>
        </div>
    </section>
    </>
  );
}

export default Home;