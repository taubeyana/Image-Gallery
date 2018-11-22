import {
    SET_SEARCH_VALUE, 
    INCREMENT_PAGE_NUMBER, 
    GET_IMAGES, 
    SET_FETCH_STATUS, 
    CLEAR_IMAGES } 
    from '../store/actions'

const initialState = {
    images: [],
    searchValue: 0,
    isLoading: true,
    pageNumber: 1
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return ({
                ...state, 
                searchValue: action.payload,
                pageNumber: 1
            })
        case SET_FETCH_STATUS:
            return ({
                ...state, 
                isLoading: action.payload
            })
        case INCREMENT_PAGE_NUMBER:
            return ({
                ...state, 
                pageNumber: ++ state.pageNumber
            })
        case GET_IMAGES:
            return ({
                ...state, 
                images: [ ...state.images, ...action.payload ]
            })
        case CLEAR_IMAGES:
            return ({
                ...state, 
                images: []
            })
        default:
            return state;
    }
}

export default rootReducer;