import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../actions/formActions"
import { bindActionCreators } from "redux";
import '../App.css';
class Form extends Component {

    state = {
        ...this.returnStateObject()
    }

    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                name: '',
                lastName: '',
                email: ''
            }
        else
            return this.props.list[this.props.currentIndex]
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length) {
            this.setState({ ...this.returnStateObject() })
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.props.currentIndex == -1)
            this.props.insertForm(this.state)
        else
            this.props.updateForm(this.state)
    }

    render() {
        return (
            <div className="form">
                <h1 style={{ color: 'white' }}>Contact Form</h1>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                    < input type="text" required name="name" placeholder="FirstName" onChange={this.handleInputChange} value={this.state.name} /><br />
                    < input type="text" required name="lastName" placeholder="LastName" onChange={this.handleInputChange} value={this.state.lastName} /><br />
                    < input type="email" required name="email" placeholder="Email" onChange={this.handleInputChange} value={this.state.email} /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.list,
        currentIndex: state.currentIndex
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        insertForm: actions.insert,
        updateForm: actions.update
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)