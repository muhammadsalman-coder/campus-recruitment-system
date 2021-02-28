const set_data = (user) => {
  // console.log("running... user->", user);
  alert('i ma in actions, functions call');
  return (dispatch) => {
    dispatch({type: 'SETDATA', payload: user});
  };
};
export {set_data};
