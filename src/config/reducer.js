
const initialState = {
    data: [],
    error: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE":
            return { ...state, data: [...state.data, action.payload], error: '' }

        case "READ":
            return { ...state, data: action.payload, error: '' }


        case "DELETE":
            return { ...state, data: state.data.filter(obj => obj.id !== action.id), error: '' }

        case "UPDATE":
            return { ...state, data: [...state.data.filter(obj => obj.id !== action.payload.id), action.payload] }


        case "ERROR":
            return { ...state, data: [], error: action.error }

        default:
            return state;
    }
};
export default reducer;