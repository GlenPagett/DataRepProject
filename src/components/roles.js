import React, { Component } from 'react';
import RoleItem from './roleitem';

class Roles extends Component
{
    render(){
        return this.props.files.map((file)=>{
            return <RoleItem role={file} key={file.imdbID} ReloadData={this.props.ReloadData}></RoleItem>
        })
    }
}
export default Roles;