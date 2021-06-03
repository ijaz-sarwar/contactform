import React, { Component } from 'react'
import Form from './Form'
import { connect } from "react-redux";
import * as actions from "../actions/formActions"
import { bindActionCreators } from "redux";

class FormList extends Component {


    handleEdit = (index) => {
        this.props.updateForm(index)
    }

    handleDelete = (index) => {
        this.props.deleteForm(index)
    }

    render() {
        return (
            <div style={{ display: 'flex', width: '100%' }}>
                <Form />
                <div className="listdata">

                    {this.props.list.map((item, index) => {
                        return <div className="list" key={index}>

                            <p>FirstName:</p>
                            <h6>{item.name}</h6>
                            <p>LastName:</p>
                            <h6>{item.lastName}</h6>
                            <p>Email:</p>
                            <h6>{item.email}</h6>
                            <button onClick={() => this.handleEdit(index)}>Edit</button>
                            <button onClick={() => this.handleDelete(index)}>Delete</button>
                            <hr />
                        </div>

                    })}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateForm: actions.updateIndex,
        deleteForm: actions.Delete
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FormList)