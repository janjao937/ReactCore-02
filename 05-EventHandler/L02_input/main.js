// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

const OnTextChange = (val)=>console.log(val);
const App =()=>{
    return(
        <>
        <input onChange={e=>OnTextChange(e.target.value)}></input>
        </>
    )
}
root.render(<App/>);
