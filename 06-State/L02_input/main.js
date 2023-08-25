// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);


const AppHideButton = ()=>{
    const [isVisible,setIsvisible] = React.useState(true);
    return(
        <div>
            <button  onClick={()=>setIsvisible(!isVisible)}>Button</button>
            <h1 className={`${isVisible?"visible":"invisible"}`}>Text</h1>
        </div>
    );
}
root.render(<AppHideButton/>)
