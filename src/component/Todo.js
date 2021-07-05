import React,{useState,useEffect} from 'react';
import '../App.css';


const Todo = () => {
    const [inputData,setInputData] = useState("");
    const [items,setItems] = useState([]);
    const [toggleSubmit,setToggleSubmit] = useState(true);
    const [isEditItem,setisEditItem] = useState(null);

    //add item
    const addItem = () => {
        if(!inputData) {
   alert("no empty data");
        } else if(inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                if (elem.id === isEditItem) {
                    return {...elem,name:inputData}
                }
                return elem;
            })
            )
            setToggleSubmit(true);
            setInputData('');
            setisEditItem(null);
        }
        
        
        
        else {
            const allInputData = { id: new Date().getTime().toString(),name:inputData}
            setItems([...items,allInputData]);
            setInputData("");
        }
          
    }
  
    //delete item
    const deleteItem = (id) => {
        const updatedItems = items.filter((elem) => {
            return elem.id != id;
        });
        setItems(updatedItems)
    }
    //edit item
    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItem);
        setToggleSubmit(false);
        setInputData(newEditItem.name);
        setisEditItem(id);
    }
  
    
    useEffect(() => {
        localStorage.setItem('lists',JSON.stringify(items))
    }, [items])
  
    return (
        <>
          <div className="main-div">
          <div className="child-div">
              <h1>TODO-LIST</h1>
              <div className="addItems">
              <input  type='text' placeholder="Add Items.." value={inputData} onKeyPress={(e) => e.key === 'Enter' && addItem()} onChange={(e) => setInputData(e.target.value)} />
              {
                  toggleSubmit ? <button  title="Add Item"  onClick={addItem}>Add</button> : 
                  <button  title="Edit Item" onClick={addItem} >Edit</button>

              }
              </div>
              <div className="showItems">
        

                  {
                      items.map((elem) => {
                          return (
                              <ol className="eachItem" key={elem.id} >
                                
                                  <h3 >{elem.name}</h3>
                                  <div className="todo-btn" action="javascript:void(0)">
                                  <i className="fas fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}></i>
                                  <i className="fas fa-trash-alt" title="Check Item" onClick={() => deleteItem(elem.id)}></i>
                                  </div>
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



