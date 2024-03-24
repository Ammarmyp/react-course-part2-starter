
interface Action { 
type: "INCREMENT" | "RESET";
}
    //the parameters here are 
    /**
     *1. the current state
     2. action: an object that describes what the user is trying to do
     */
const counterReducer = (state: number, action: Action): number => {

    if (action.type === "INCREMENT") return state + 1;
    if (action.type === "RESET" ) return 0;
    return state;
}

export default counterReducer;