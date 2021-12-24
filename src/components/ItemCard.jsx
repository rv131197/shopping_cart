import React from 'react'
import './card-styles.css';

const ItemCard = (props) => {
    
    return (
        <>
        <div className="block col-2">
        <h2>{props.title}</h2>
            <img src={props.img} height="400" width="400" />
            <h3>{props.desc}</h3>
            <h2>${props.price}</h2>
            <button 
            onClick={()=>{props.onAdd(props.item)}}
            className="button green">
                Add to cart!
                </button>

                <button 
                disabled={props.item.qty === 0}
            onClick={()=>{props.onRemove(props.item)}}
            className="button red">
                Remove Item!
                </button>
        </div>
        </>
    )
}

export default ItemCard;