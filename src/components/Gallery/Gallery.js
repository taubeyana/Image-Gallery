import React, { Component }  from 'react';
import { connect } from 'react-redux';
import './Gallery.css';
import Image from '../Image/Image';
import { getImagesFromServer, incrementPageNumber } from '../../store/actions';
import { ClipLoader } from 'react-spinners';

class Gallery extends Component {
    constructor(props) {
        super(props)
        window.onscroll = () => {
            this.handleScroll()
          };
    }
    handleScroll = () => {
        if (window.innerHeight + 
            document.documentElement.scrollTop === 
            document.documentElement.offsetHeight + 130) {
                this.props.dispatch(incrementPageNumber());
                this.props.dispatch(getImagesFromServer());
          }
    }
    componentDidMount() {
        this.props.dispatch(getImagesFromServer());
    }
    render() {
        return (
            <div className = "gallery">
                { this.props.isLoading ? <ClipLoader/> : 
                 this.props.images.map(image => 
                    <Image data = { image } key = { image.id }/>)
                }
            </div>)
    }
} 
    
const mapStateToProps = state => ({
    images: state.images,
    isLoading: state.isLoading,
})    
export default connect(mapStateToProps)(Gallery);
