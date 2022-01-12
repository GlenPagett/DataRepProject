import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from  'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import axios from 'axios';

// some comments
class RoleItem extends Component {

constructor(){
    super();
    this.DeleteRole = this.DeleteRole.bind(this);
}

DeleteRole(){
    axios.delete('http://localhost:4000/api/roles/' +this.props.role._id)
    .then(()=>{
        this.props.ReloadData();
    })
    .catch();
}

    render() {
        return (
            <div>
                {/* some comments  */}
                <Card>
                    <Card.Header>{this.props.role.Name}</Card.Header>
                    <Card.Body>
                        <blockquote>
                               <label>Student's Id: </label>{ this.props.role.Id}  
                            <footer>                              
                                <label>Student Description: </label>{ this.props.role.Description} 
                            </footer>
                            <footer>                              
                                <label>Student's Grade: </label>{ this.props.role.Grade} 
                            </footer>
                            <footer>                              
                                <label>Student's Teacher: </label>{ this.props.role.Teacher} 
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <div>
<Link to={"/edit/" +this.props.role._id} style={{ height: 45, width: 300 }} className="btn btn-primary">Edit Student Information</Link>
<Button variant="danger" style={{ height: 45, width: 300 }} onClick={this.DeleteRole}>Delete Student Information</Button>
                    </div>
                </Card>
            </div>
        );
    }
}
export default RoleItem;