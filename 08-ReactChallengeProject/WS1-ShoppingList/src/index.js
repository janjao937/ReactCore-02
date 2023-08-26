import './index.css';
import React from 'react';
import { createRoot} from 'react-dom/client';


//delete item in list by key//

//onClick={e =>OnDeleteHandeler(e)}
//onFocus={e=>OnFocustHandler(e)}
const ItemComponent=(p)=>{
    
    const OnDeleteHandeler=(e)=>{
    // // console.log(e.target.parentNode);
    // // allItems.forEach(a=>console.log(a.props.name == e.target.parentNode.name));
    // // console.log(e.target.parentNode)
    // // console.log(allItems[0])

    // //   let k = allItems?.findIndex((a=>e.target.parentNode));
    // //    console.log(allItems[allItems.length-1].props)
    //       console.log(e.target.parentNode);
    console.log("X",e.target.parentNode);
    
    }

    return(
        <div className="item__container">
            
            <p>{p.name}</p>
             <a onClick={e =>OnDeleteHandeler(e)}>X</a> 
        </div>
    )
}




const InputContainer=()=>{
    const defaultText = "";
    const [isAdd,setAddState] = React.useState(false);
    const [textState,setText] = React.useState(defaultText);
    const [itemList,setList] = React.useState([]);
    
    const allItems = itemList;

    const OnTexHandeler=(e)=>{
        setText(e.target.value);
        // console.log(textState);
        setAddState(true);
    }
    const OnFocustHandler=(e)=>{
        if(!isAdd){
            e.target.value="";
        }
    }

    const OnAddHandeler=()=>{
        if(isAdd)
        {
            //allItems.push(<ItemComponent name= {textState}/>)
            allItems.push({id:allItems.length,name:textState,});
            setList(allItems);
            
            setAddState(false);
            setText("");
            // console.log(allItems)
        }
        
        
    }
    

    return(
        <>
        <div className="input__container">
            <input onFocus={e=>OnFocustHandler(e)} onChange ={e=>OnTexHandeler(e)} maxlength="20" placeholder="Add a new item"></input>
            <button onClick={OnAddHandeler}>ADD</button>
        </div>
         <div className="item__list--container">
            
         {itemList.map((e=><ItemComponent key={e.key} name={e.name} />))}
         
        </div>
        </>
        
    );
}

const HeaderComponent=()=>{
    return(
        <div className="header">
            <h1>Items to buy</h1>
        </div>
    );
}

// React
function App() {
    return (
        <div className="app">
            <div className="container">
                <HeaderComponent/>
                <InputContainer/>
                
            </div>
        </div>
    );
}

// ReactDOM
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
