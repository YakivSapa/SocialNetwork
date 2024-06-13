let initialState = {};
type InitialStateType = typeof initialState
const sidebarReducer = (state = initialState, action: any) => {
    let stateCopy = { ...state };
    return stateCopy;
}

export default sidebarReducer;