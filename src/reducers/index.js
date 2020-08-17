const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            const duplicate = state.myList.find(item => item.title === action.payload.title)

            return duplicate ? state :
            {
                ...state,
                myList: [...state.myList, action.payload]
            }

        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(item => item.title !== action.payload)
            }

        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload
            }
            
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'NEW_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload)) || state.originals.find(item => item.id === Number(action.payload)) || {}
            }
        default:
            return state
    }
}

export default reducer