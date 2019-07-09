import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as actions from "../actions";
class CommentList extends Component {
    renderComments(){
        return this.props.comment.map((a, i) => (
                <li key={i} className="comment__list-item">{a}</li>
        ))
    }
    render() {
        return (
            <div>
                <h2>Comments</h2>
                <button className="btn btn-secondary" onClick={this.props.fetchComment} >Fetch Comment</button>
                <ul className="comment__list">
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
} 
const mapStateToProps = (state) => {
    return {
        comment:state.comment
    }
}
export default connect(mapStateToProps, actions)(CommentList);
