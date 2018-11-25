import React from 'react';
import './Image.css';

const Image = props => {
    const imageUrl = `https://farm${props.data.farm}.staticflickr.com/${props.data.server}/${props.data.id}_${props.data.secret}_z.jpg`;
    return (
        <div className = 'image' data-title = { props.data.title }>
            <img src = { imageUrl } alt = { props.data.title }  /> 
            <div className = 'image-descr'> <span>{ props.data.title }</span></div>
        </div>)
}

export default Image;