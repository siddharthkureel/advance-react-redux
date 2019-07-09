import axios from "axios";
export const saveComment = (comment)=>{
   return {
       type:'SAVE_COMMENT',
       payload:comment
   }
}
export const fetchComment = () =>{
    const response = axios.get('http://jsonplaceholder.typicode.com/comments')
    return {
        type:'FETCH_COMMENT',
        payload:response
    }
}
export const changeAuth = (authentication) =>{
    return {
        type:'CHANGE_AUTH',
        payload:authentication
    }
}