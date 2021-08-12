import React, { Component } from 'react';
import axios from 'axios';


const priorities = ['Basse', 'Moyenne', 'Haute'];
const statuses = ['Ouvert', 'En progres', 'Resolu'];
const types = ['Bug/Erreur', 'Demande de fonctionnalité', 'Securite', 'Autre'];

export default class CreateTicket extends Component {
	constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeAssignee = this.onChangeAssignee.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeProjectName(e) {
        this.setState({
            projectName: e.target.value
        })
    }

    onChangeAssignee(e) {
        this.setState({
            assignee: e.target.value
        })
    }

    onChangePriority(e) {
        this.setState({
            priority: e.target.value
        })
    }

    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        })
    }

    onChangeType(e) {
        this.setState({
            type: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const ticket = {
            title: this.state.title,
            description: this.state.description,
            projectName: this.state.projectName,
            assignee: this.state.assignee,
            priority: this.state.priority,
            status: this.state.status,
            type: this.state.type
        }

        axios.post('http://localhost:5000/tickets/create', ticket)
            .then(res => console.log(res.data))

        alert('Successfully created.');

        // clear form
        this.setState({ 
          title: '',
          description: '',
          priority: '',
          status: '',
          type: ''
        });
    }

	render() {
		return(
			<div>
				<h3>Envoyer un ticket</h3>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Titre: </label>
            	<input type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
            	/>
					</div>
					<div className="form-group">
						<label>Description: </label>
            	<textarea style={{resize: 'none'}}
                  type="text"
                  maxLength="250"
                  rows="3"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
            	></textarea>
					</div>          
					<div className="form-group">
						<label>Ordre de priorite: </label>
            	<select className="form-control"
                      value={this.state.priority}
                      onChange={this.onChangePriority}>
                      {
                          priorities.map((priority) => {
                          return <option key={priority}
                                         value={priority}>{priority}
                                 </option>;
                          })
                      }
              </select>
					</div>
					<div className="form-group">
						<label>Status: </label>
            	<select className="form-control"
                      value={this.state.status}
                      onChange={this.onChangeStatus}>
                      {
                          statuses.map((status) => {
                          return <option key={status}
                                         value={status}>{status}
                                 </option>;
                          })
                      }
              </select>
					</div>
					<div className="form-group">
						<label>Type: </label>
            	<select className="form-control"
                      value={this.state.type}
                      onChange={this.onChangeType}>
                      {
                          types.map((type) => {
                          return <option key={type}
                                         value={type}>{type}
                                 </option>;
                          })
                      }
              </select>
					</div>
					<div className="form-group">
              <input type="submit"
                   value="Envoyer"
                   className="btn btn-primary"
              />
          </div>
				</form>
			</div>
		);
	}
}