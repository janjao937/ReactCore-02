// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);


const AppHideButton = ()=>{
    const [isVisible,setIsvisible] = React.useState(true);
    return(
        <div>
            <button className={`${isVisible?"visible":"invisible"}`} onClick={()=>setIsvisible(!isVisible)}>Button</button>
        </div>
    );
}
root.render(<AppHideButton/>)
