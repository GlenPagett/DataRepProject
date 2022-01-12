import React, { Component } from 'react';
import axios from 'axios';


class Edit extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentId = this.onChangeStudentId.bind(this);
        this.onChangeStudentDes = this.onChangeStudentDes.bind(this);
        this.onChangeStudentGrade = this.onChangeStudentGrade.bind(this);
        this.onChangeStudentTeacher = this.onChangeStudentTeacher.bind(this);
        this.state = {
            Name: '',
            Id: '',
            Description: '',
            Grade: '',
            Teacher: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/api/roles/'+ this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Name:response.data.Name,
                Id:response.data.Id,
                Description:response.data.Description,
                Grade:response.data.Grade,
                Teacher:response.data.Teacher,
                _id:response.data._id
            })
        })
        .catch();
    }

    handleSubmit(event) {
        console.log("Student Name: " +this.state.Name+
        " Student Id: " + this.state.Id +
        " Student Description: " + this.state.Description+
        " Student Grade: " + this.state.Grade+
        "Student Teacher: " + this.state.Teacher);

        const NewRole = {
            Name: this.state.Name,
            Id: this.state.Id,
            Description: this.state.Description,
            Grade: this.state.Grade,
            Teacher: this.state.Teacher
        }

        axios.put('http://localhost:4000/api/roles/' + this.state._id, NewRole)
        .then((response)=>{console.log(response)})
        .catch();
        

        event.preventDefault();
        this.setState({
            Name:'',
            Id:'',
            Description:'',
            Grade: '',
            Teacher: ''
        });
    }
    onChangeStudentName(event) {
        this.setState({
            Name: event.target.value
        })
    }
    onChangeStudentId(event) {
        this.setState({
            Id: event.target.value
        })
    }
    onChangeStudentDes(event){
        this.setState({
            Description: event.target.value
        })
    }
    onChangeStudentGrade(event){
        this.setState({
            Grade: event.target.value
        })
    }
    onChangeStudentTeacher(event){
        this.setState({
            Teacher: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Here is if you want to Edit the Student Information</h1>
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Edit Student's Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Name}
                            onChange={this.onChangeStudentName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Student's Id: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Id}
                            onChange={this.onChangeStudentId}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Student Description: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Description}
                            onChange={this.onChangeStudentDes}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Student's Grade: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Grade}
                            onChange={this.onChangeStudentGrade}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Student's Teacher: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Teacher}
                            onChange={this.onChangeStudentTeacher}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Edit Student Information"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default Edit;