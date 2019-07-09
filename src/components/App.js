import React from "react";
import { Route, Switch,Link } from "react-router-dom";
import { connect } from "react-redux";
import {changeAuth} from './../actions';
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
class App extends React.Component{
    renderButton=()=>{
        return (!this.props.auth)?
            <button className="btn-auth" onClick={() => this.props.changeAuth(true)} >&nbsp;&nbsp;SignIn&nbsp;</button>
            : <button className="btn-auth" onClick={()=>this.props.changeAuth(false)}>SignOut</button>
    }
    render(){
        return (
            <>
                <ul className="navbar" >
                    <li><Link to='/'>List</Link></li>
                    <li><Link to='/post'>Comment</Link></li>
                    <li>{this.renderButton()}</li>
                </ul>
                <Switch>
                <Route path='/post'  component={CommentBox} />
                <Route path='/' exact component={CommentList} />
                </Switch>
            </>
        )
    }
}
const mapStateToProps =(state)=>{
    return {
       auth:state.auth
    }
}
export default connect(mapStateToProps,{changeAuth})(App);