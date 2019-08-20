import APP_CONSTANTS from '../Constants';

const initialState = {
    Buildings: [],
    MeetingRooms:[]
  };
  function rootReducer(state = initialState, action) {
    switch (action.type) {
        case APP_CONSTANTS.SET_BUILDINGS:
            return {
                ...state,
                Buildings: action.data,
            };
        case APP_CONSTANTS.SET_MEETINGS:
            return {
                ...state,
                MeetingRooms: action.data,
            };
        default: {
            return state;
        }
    }
  };
  export default rootReducer;