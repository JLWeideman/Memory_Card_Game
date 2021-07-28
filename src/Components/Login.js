import React, { Component } from 'react';

class LoginPage extends Component {
    state ={};

    // Set the username for use in game
    handleChange = (e) => {
        this.setState({name: e.target.value});
    };

    // Stope the button post-back
    handleClick = (e) => {
        e.preventDefault();
        this.props.name(this.state.name, false);
    };

    // Build the login form
    render() {
        return (
            <div className="wrapper">
                <div className="login">
                    <form>
                        <div className="form-group">
                            <label>Name : </label>
                            <input
                                type='name'
                                className="form-control"
                                onChange={this.handleChange}
                            />
                            <small className="form-text text-muted">
                                This is a memory card game.
                            </small>
                        </div>
                        <button 
                            onClick={this.handleClick}
                            className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;