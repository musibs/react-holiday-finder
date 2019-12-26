import React, { Component } from 'react';
import axios from 'axios';

export default class SearchForm extends Component {


    constructor(props){
        super(props);
        this.state = {
            countrises : [],
            holidays : []
        }
    }


    getCountries(){
        axios.get(``)
    }


    render() {
        return (
            <div className="row">
                
            </div>
        )
    }
}
