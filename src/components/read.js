import React, { Component } from 'react';
import Roles from './roles';
import axios from 'axios';

class Read extends Component
{
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/roles')
        .then((response)=>{
            this.setState({myroles: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/roles')
        .then((response)=>{
            this.setState({myroles: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    state = {
        myroles: []            
    };

    render(){
        return(
            <div>
                <h1>Here is the Student Rolebook</h1>
                <Roles files={this.state.myroles} ReloadData={this.ReloadData}></Roles>
            </div>
        );
    }
}
export default Read;