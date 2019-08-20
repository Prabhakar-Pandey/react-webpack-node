import APP_CONSTANTS from "../Constants";
import postData from '../UtilityFunctions/PostCall';

export function getBuildings(query,dispatch) {
    return postData('http://smart-meeting.herokuapp.com/', { "operationName": null, "variables": {}, "query": query })
        .then(data => {
            dispatch({
                type: APP_CONSTANTS.SET_BUILDINGS,
                data:data.data.Buildings
              });
        })
        .catch(error => console.error(error));
}

export function getMeetings(query,dispatch) {
    return postData('http://smart-meeting.herokuapp.com/', {"query": query })
        .then(data => {
            dispatch({
                type: APP_CONSTANTS.SET_MEETINGS,
                data:data.data.MeetingRooms
              });
        })
        .catch(error => console.error(error));
}