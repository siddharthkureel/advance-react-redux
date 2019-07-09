import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions";
import requireAuth from "../HOC/requireAuth";
class CommentBox extends Component {
    state={
        comment:""
    }
    
    handleChange=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        if(this.state.comment){
            this.props.saveComment(this.state.comment)
            this.setState({
                comment:''
            })
        }
    }
    render() {
        return (
            <div className="comment" >
                <form onSubmit={this.handleSubmit}>
                    <h1 className="comment__heading">Leave a Comment</h1>
                    <textarea rows="4" cols="25" className="comment__area" 
                    onChange={this.handleChange} 
                    value={this.state.comment} 
                    />
                    <div>
                        <button className="btn btn-primary"  >Submit</button>
                    </div>
                </form>
                
            </div>
        )
    }
}
export default connect(null, actions )(requireAuth(CommentBox));