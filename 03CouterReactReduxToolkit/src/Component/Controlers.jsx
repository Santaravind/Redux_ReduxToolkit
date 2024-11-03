import React, { useRef } from 'react' 
import { useDispatch } from 'react-redux';
import { counterAction } from '../Store/Counter';
import { privacyAction } from '../Store/Privecy';


function Controlers() {
  const dispatch =useDispatch()
  const inputElement=useRef()

  const handlincrement=()=>{
    dispatch(counterAction.increment());
    }

  const handldecrent=()=>{
    dispatch(counterAction.decrement())
  }
  const handladd=()=>{
    
    dispatch(counterAction.add( {
      num:inputElement.current.value
    }))
    inputElement.current.value=""
  }
  
  const handLSUB=()=>{
    
    // dispatch({type:'SUB',payload:})
    dispatch(counterAction.subtract(
      
        {  num:inputElement.current.value
        }
    ))
    inputElement.current.value=""
  }
  const handLprivacy=()=>{
    //console.log("toggale function call")
    dispatch(privacyAction.toggle())
  }




  return (
    <>  <div className='m-1'>
      
      <button className=' border-2 p-1 rounded-md bg-pink-300 m-1' 
      onClick={handlincrement}>
        Increment
      </button>
      <button className=' border-2 p-1 rounded-md bg-green-300'
      onClick={handldecrent}> Decrement</button>
    </div>
    <div className='m-1'>
    <input type="nuber"
        placeholder='Enter number'
        ref={inputElement}
         className='border-2 w-20 p-2 border-gray-500 rounded-xl'
        />
      <button className=' border-2 p-1 rounded-md bg-amber-200 m-1' 
      onClick={handladd}
      >
       
        Add
      </button>
      <button className=' border-2 p-1 rounded-md bg-red-300'
      onClick={handLSUB}
      >
     
      
         Subtract
      </button>
      </div>
      <div>
      <button className=' border-2 p-1 rounded-md bg-blue-400'
      onClick={handLprivacy}
      >
     
      
         Privacy Toggal
      </button>
      </div>
      
    
    </>
  
  )
}

export default Controlers
