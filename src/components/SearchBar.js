import React,{Component} from 'react';
import {Paper,TextField} from '@material-ui/core';

class SearchBar extends Component {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        let searchTerm = event.target.value;
        this.setState({searchTerm: searchTerm});
    }

    handleSubmit = (event) => {
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
    }

    render (){
        return(
            <Paper elevation={6} style={{padding: '10px',width: '40%',margin: 'auto'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}></TextField>
                </form>
            </Paper>
        );
    }
}

export default SearchBar;