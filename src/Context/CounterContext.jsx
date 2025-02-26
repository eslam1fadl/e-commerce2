import { createContext,useState } from "react";


export let counterContext=createContext(0)

export default function counterContextProvider({children}){

    let [counter,setCounter]=useState(0);
    function increase(){
        setCounter(counter+1)
    }
    return <counterContext.Provider value={{counter,increase}}>
            {children}
    
    </counterContext.Provider>

}