import axios from 'axios';
import {store} from '../App';
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const GET_IMAGES = "GET_MOVIE";
export const CLEAR_IMAGES = "CLEAR_IMAGES";
export const SET_FETCH_STATUS = "SET_FETCH_STATUS";
export const INCREMENT_PAGE_NUMBER = "INCREMENT_PAGE_NUMBER";

export const setSearchValue = (payload) => ({
    type: SET_SEARCH_VALUE,
    payload
})
export const setFetchStatus = (payload) => ({
    type: SET_FETCH_STATUS,
    payload
})

export const getImages = (payload) => ({
    type: GET_IMAGES,
    payload
})
export const clearImages = () => ({
    type: CLEAR_IMAGES,
})
export const incrementPageNumber = () => ({
    type: INCREMENT_PAGE_NUMBER
})

export const getImagesFromServer = () => {
    const searchValue = store.getState().searchValue;
    const pageNum = store.getState().pageNumber;
    
    let imagesPerRow = Math.floor(window.innerWidth / 250);
    let rowsNumber = Math.ceil(window.innerHeight / 400);
    let totalImages = imagesPerRow * (rowsNumber + 1);
    let nextImages;

    return dispatch => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=bac9f1ccfd854f27894fd47c4f01b1e8&text=${searchValue}&per_page=${totalImages}&page=${pageNum}&content_type=1&is_getty=1&format=json&nojsoncallback=1`)
        .then(res => nextImages = [...res.data.photos.photo])
        .then(data => {
            if (searchValue && pageNum === 2 ) dispatch(clearImages())
            dispatch(getImages(data))
            dispatch(setFetchStatus(false))
        })
    }
}