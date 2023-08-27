import './index.css';
import React,{useState} from 'react';
import { createRoot} from 'react-dom/client';


function App() {

const [itemList,setItemList] = useState([]);
const [inputText,setText] = useState("");

const OnInputTextHandeler = (e)=>{
  setText(e);
  console.log(e);
}
const OnAddHandeler=()=>{
  if(inputText!=""){
    setItemList([...itemList,inputText]);
    setText("");
  }
 
}
const RemoveItem=(i)=>{
  //  setItemList([]);
  //  console.log(i);
   setItemList(itemList.filter((e,index)=>index != i))
}
const CreateItemDisplay=(e,index)=>{
  
    return(
          <div key ={index}className="item__container">
            <p>{e}</p>
           
            <a onClick={()=>RemoveItem(index)}>X</a>
           </div>
          
    )
  
}

  return (
    <div className="app">

      <div className="container">

        <div className="hearder">
          <h1>List</h1>
        </div>

        <div className="input__container">
          <input value={inputText} maxLength="20" onChange={e=>OnInputTextHandeler(e.target.value)} placeholder="Type..."/>
          <button onClick={OnAddHandeler}>Add</button>
        </div>

        <div className="item__list--container">
            {
              itemList.map((e,index)=>CreateItemDisplay(e,index))
            }
        </div>


      </div>
    </div>
  );
}

export default App;

// ReactDOM
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
