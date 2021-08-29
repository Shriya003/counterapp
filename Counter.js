import react, { Component, useState } from "react"


const Counter =()=> {
    
        const[num,setNum]=useState(0);

        const incNum =()=>{
            setNum(num+1);
        }
        const decNum =()=>{
            if(num>0){
            setNum(num-1);
            }else{
                alert('could not go below zero')
                setNum(0);
            }
        };


        
        return(
            <> 
            <div className="main-div">
                <div className="center-div">
                    <h1>{num}</h1>
                    <div className="btn-div">
                        <button onClick={incNum}>++</button>
                        <button onClick={decNum}>--</button>
                    </div>
                </div>
            </div>
      
      
            </>
          )
    
    }
  
  export default Counter;