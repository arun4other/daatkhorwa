import React from 'react';
import './card.style.css'

const images = require.context('../../Assets/images', true);


export const Card = (props) =>{
    const urlis = images(`./${props.monster.username}.jpg`);
    return <div className="card-container">
        
            {/* <img alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img> */}
            <img className="image-style" alt="monsters" src={urlis}></img>
            <h2> {props.monster.name}</h2>
        
    </div>
}