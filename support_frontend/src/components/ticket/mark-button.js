import React, { Component } from 'react';
import axios from 'axios';

export default class MarkButton extends React.Component {
	constructor(props) {
		super(props);

        this.handleClick = this.handleClick.bind(this);

		this.state = { 
            title: '',
            description: '',
            projectName: '',
            assignee: '',
            priority: '',
            status: '',
            type: '',
            users: [],
            projects: []
        };
	}


    handleClick(e) {
        e.preventDefault();

        this.state.status !== 'Resolved' ?
        this.setState({status: 'Resolved'}) : 
        this.setState({status: 'Open'})

        const ticket = {
            title: this.state.title,
            description: this.state.description,
            projectName: this.state.projectName,
            assignee: this.state.assignee,
            priority: this.state.priority,
            status: this.state.status,
            type: this.state.type
        }

        axios.post('http://localhost:5000/tickets/update/' + this.props._id, ticket)
            .then(res => console.log(res.data));
            
        alert('Successfully updated.');
    }
	
	render() {
		return(
            this.state.status !== 'Resolved' ? 
            <a href="#" onClick={this.handleClick} 
            className="badge badge-success">Mark as Resolved</a> :
            <a href="#" onClick={this.handleClick}
            className="badge badge-secondary">Mark as Open</a>          
		);
	}
}