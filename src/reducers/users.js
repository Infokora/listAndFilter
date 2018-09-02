import { users } from '../actions/types';

const initState = {

};

export default (state = initState, action) => {
  const { type, payload } = action;

  switch(type){
    case users.LOADED:
      return [
        ...payload
      ];

    default:
      return state
  }
}