export const config = (state, action) => {
    switch (action.type) {
        case 'SET_CONFIG': {
            return action.data || {};
        }
        default: return action.data || {};
    }
}