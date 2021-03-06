import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { setSearchValue, getImagesFromServer} from '../../store/actions'
import SearchIcon from '@material-ui/icons/Search';
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.searchValue = React.createRef();
    }

    handleChange = () => {
        this.props.dispatch(setSearchValue(this.searchValue.current.value))
        this.props.dispatch(getImagesFromServer())
    }
    render() {
        return (
            <div className = 'search'>
                <SearchIcon />
                <input 
                    placeholder = 'Search...'
                    onChange = { this.handleChange } 
                    ref = { this.searchValue }>
                </input>
            </div>
        ) 
    }
} 
export default connect()(Search);