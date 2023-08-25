// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
const alertBtn =()=>{
    console.log("Hello");
    alert("Hello");
}
root.render(<button onClick={alertBtn}>BTN</button>);
