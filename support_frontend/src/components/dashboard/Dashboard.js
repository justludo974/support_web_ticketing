import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import CreateTicket from "../ticket/create-ticket.component";
//import EditTicket from "../ticket/edit-ticket.component";
import "bootstrap/dist/css/bootstrap.min.css";
//import TicketList from "../ticket/ticket-list.component"



class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Bienvenue,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Tu es connecté à ton compte support web             
              </p>
            </h4> 
            <div>
            </div>
            <CreateTicket/>     
            <button
              style={{
                textAlign: "center",                 
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"                               
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
            Déconnexion
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);