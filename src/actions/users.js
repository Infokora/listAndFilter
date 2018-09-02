import Api from '../components/api';
import { users } from './types';

export const actionGetUsers = () => dispatch => {
  return Api.getUsers()
    .then(res => {
      dispatch({
        type: users.LOADED,
        payload: res
      });
    }).catch(error => Promise.reject(error));
};