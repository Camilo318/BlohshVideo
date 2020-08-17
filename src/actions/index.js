//Action creators

export function setFavorite(payload) {
    return { //Action
        type: 'SET_FAVORITE',
        payload //Object with the props of each item
    }
}

export function deleteFavorite(payload) {
    return {
        type: 'DELETE_FAVORITE',
        payload
    }
}

export function loginRequest(payload) {
    return {
        type: 'LOGIN_REQUEST',
        payload
    }
}

export function logoutRequest(payload) {
    return {
        type: 'LOGOUT_REQUEST',
        payload
        
    }
}

export function newUser(payload) {
    return {
        type: 'NEW_USER',
        payload
    }
}

export function getVideoSource(payload) {
    return {
        type: 'GET_VIDEO_SOURCE',
        payload
    }
}