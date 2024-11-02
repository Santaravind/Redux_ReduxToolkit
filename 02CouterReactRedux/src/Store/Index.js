import { createStore } from "redux";



const INITIAL_VALUE={
    counter:0,
    privecy:false
}

const counterReducer=(store=INITIAL_VALUE,action)=>{
   
    if(action.type==='INCREMENT'){
        return{...store,counter:store.counter+1}
    }else if(action.type==='DECREMENT'){
        return{
            counter:store.counter-1
        }
    }else if(action.type==='ADD'){
        return{...store,
            counter:store.counter+ Number(action.payload.num)
                }
    }else if(action.type==='SUB'){
        return {...store,
            counter:store.counter- Number(action.payload.num)
                }

    }else if(action.type==='PRY'){
        return{...store,
              privecy:!store.privecy
        }
    }
    
 return store;
}


const counterStore=createStore(counterReducer)

export default counterStore;