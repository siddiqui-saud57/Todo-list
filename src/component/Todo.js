import React,{useState} from 'react';
import '../App.css';


const Todo = () => {
    const [inputData,setInputData] = useState("");
    const [items,setItems] = useState([]);
    const addItem = () => {
        if(!inputData) {
   alert("no empty data");
        } else {
            setItems([...items,inputData]);
            setInputData("");
        }
          
    }
  
  
    return (
        <>
          <div className="main-div">
          <div className="child-div">
              <h1>TODO-LIST</h1>
              <div className="addItems">
              <input  type='text' placeholder="Add Items.." value={inputData} onChange={(e) => setInputData(e.target.value)} />
              <button  onClick={addItem}>Add</button> 
              </div>
              <div className="showItems">
        

                  {
                      items.map((elem,index) => {
                          return (
                              <ol className="eachItem" key={index} >
                                  <h3 >{elem}</h3>
                                  <i className="fas fa-check" title="Check Item"></i>
                              </ol>
                          ) 
                      })
                  }
        

              </div>
          </div>      
        </div>  
        </>
    )
}

export default Todo




