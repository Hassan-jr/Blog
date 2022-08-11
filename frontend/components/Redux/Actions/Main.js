import * as t from "../Types";


export const get_all = () => dispatch=>{
    dispatch({
        type: t.GET_ALL_POSTS
    });
}


// export const signOut = () => dispatch => {
//     localStorage.removeItem("user_info")
//     dispatch({
//       type: t.SIGN_OUT
//     });
//   }