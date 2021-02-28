const INITIAL_STATE = {
  users: '',
};
export default function myReduce(state = INITIAL_STATE, action) {
  console.log('Reducer action...', action.users, action.type);
  console.log('Reducer state...', state.users);

  switch (action.type) {
    case 'SETDATA':
      return {
        ...state,
        users: [action.payload],
      };

    default:
      return state;
  }
  // return state;
}
