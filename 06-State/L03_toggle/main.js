// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

const AppToggle=()=>
{
    const [isVisible,setVisible] = React.useState(false);
    const OnToggle =()=>{
        setVisible(!isVisible);
    }
    return(
        <div>
            {/* <button className={`${isVisible?"invisible":"visible"}`} onClick={OnToggle}>Hiden</button>
            <button className={`${!isVisible?"invisible":"visible"}`} onClick={OnToggle}>Show</button> */}

            <button  onClick={OnToggle}> {!isVisible?"show":"hide"} </button>
            <h1 className={`${isVisible?"invisible":"visible"}`} >Text</h1>
        </div>
    );
}

const TeacherCode =()=>{
    const [isVisible,setVisible] = React.useState(false);
    const OnToggle =()=>{
        setVisible(!isVisible);
    }
    if(isVisible){
        return(
            <div>
                <button  onClick={OnToggle}> {!isVisible?"show":"hide"} </button>
                <h1 className="invisible" >Text</h1>
            </div>
        );
    }
    else{
        
        return(
            <div>
                <button  onClick={OnToggle}> {!isVisible?"show":"hide"} </button>
                <h1 className= "visible" >Text</h1>
            </div>
        );
    }
}
root.render(<AppToggle/>)