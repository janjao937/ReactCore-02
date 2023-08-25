
/*
initialState => APP =>Array [item1,item2]  |item1 = state, item2 = setState()
*/
//Destructure ARRAY
const Hi =()=>console.log("Hello");
const arrF = [7,Hi]
const [a,b] = arrF;
//b();



let gobalM = 0;
//1 App component
const AppCount=()=>{
     //2 Handle Logic
   // const arr = React.useState(11);
   // console.log(arr[0]);//11 =State
   // const [state,setState] = React.useState({name:"Banana",boon:"Hello"});//obj
   const [state,setState] = React.useState(0);//string
   //const [state,setState] = React.useState([5,4,3]);//Array
   let localN = 0;

    const onIncressHandler =()=>{
        gobalM+=1;
        localN+=1;
        setState(state+1);
        console.log("Local variable: "+localN);
        console.log("Gobal variable: "+gobalM)
    }//Set State
    const onDecressHandler =()=> setState(state-1);//Set State
    const onReset =()=> setState(0);//Set State
    return(
        //3 UI
        <div className = "container">
            {/*Banana State: {state.name}{state.boon}*/}
            
            <h1>{state}</h1>
            <div className="btn__container">
            <button className="btn salmonColor" onClick = {onDecressHandler}>Decrese</button>
           
            <button className="btn salmonColor" onClick = {onIncressHandler}>Incress</button>
           
            </div>
            <button className="btn"onClick = {onReset}>Reset</button>
        </div>
    );
}


const AppDark=()=>
{
    const [isDark,setIsDark] = React.useState(false);

    const OnToggleHandler =()=>{
        setIsDark(!isDark);
    }

    return(
        
        <div className ={`${isDark?"dark":"light"}`}>
        {isDark?<h3 className="dark">Dark</h3>:<h3 className="light">Light</h3>}

        {/* <h3>{isDark?Dark:Light}</h3> */}
        <button onClick={OnToggleHandler}>Toggle mode</button>
        </div>
    )

}
// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<AppDark/>)