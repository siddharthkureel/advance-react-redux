import commentReducer from "../commentReducer";

it('has a reducer to save comment',()=>{
    const action ={
        type:'SAVE_COMMENT',
        payload:'new comment'
    }
    const newState = commentReducer([],action)

    expect(newState).toEqual(['new comment'])
})