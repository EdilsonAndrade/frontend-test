import { Reducer } from 'redux';
import { IPostState, PostTypes } from './types';

const INITIAL_STATE: IPostState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<IPostState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostTypes.LOAD_REQUEST: {
      return { ...state, loading: true, error: false };
    }
    case PostTypes.LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: false,
      };
    }
    case PostTypes.LOAD_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case PostTypes.SAVE_REQUEST: {
      return { ...state, loading: true, data: action.payload.data };
    }
    case PostTypes.SAVE_SUCCESS: {
      return { ...state, loading: false, data: action.payload.data };
    }
    case PostTypes.DELETE_REQUEST: {
      return { ...state, loading: false, data: action.payload.data };
    }
    case PostTypes.DELETE_SUCCCESS: {
      return { ...state, loading: false, data: action.payload.data };
    }
    default:
      return state;
  }
};

export default reducer;
