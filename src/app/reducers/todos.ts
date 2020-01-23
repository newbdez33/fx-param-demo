import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { TodoActions } from 'app/actions/todos';

const initialState: RootState.TodoState = [];

export const todoReducer = handleActions<RootState.TodoState>(
  {
    [TodoActions.Type.ADD_TODO]: (state, action) => {
      if (action.payload) {
        console.log(action.payload);
        return action.payload;
      }
      return state;
    },
    // [TodoActions.Type.ADD_TODO]: (state, action) => {
    //   if (action.payload && action.payload.lot) {
    //     return [
    //       {
    //         id: state.reduce((max, todo) => Math.max(todo.id || 1, max), 0) + 1,
    //         completed: false,
    //         lot: action.payload.lot,
    //         gid: 0,
    //         price: 0
    //       },
    //       ...state
    //     ];
    //   }
    //   return state;
    // },
    [TodoActions.Type.DELETE_TODO]: (state, action) => {
      return state
    },
    [TodoActions.Type.COMPLETE_TODO]: (state, action) => {
      return state
    },
    [TodoActions.Type.COMPLETE_ALL]: (state, action) => {
      return state
    },
    [TodoActions.Type.CLEAR_COMPLETED]: (state, action) => {
      return state
    }
  },
  initialState
);
