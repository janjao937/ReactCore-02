// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
/*
even={target:{value: }}

*/

const App =()=>{
    return(
        <div>
            <input onChange={e =>onChangeHandler(e.target.value)}/> {/*target คือ สิ่งที่ user มา interact*/}
            <input onChange={onChangeHandler2}/> 
            <input type="checkbox" id="c" onChange={()=>console.log("Hello")}/>
            <label htmlFor="c">My Name:</label>
            <div>
                <label htmlFor="change">select:</label>
                <select id="change" onChange={onCheckboxChangeHandler}>
                    <option value= "Banana" >Banana</option>
                    <option value= "mario">Mario</option>
                </select>
            </div>
            <input onChange={WrapperFunction}></input>
        </div>
    );
}
const onCheckboxChangeHandler=(e)=>console.log(e.target.value);

const onChangeHandler=(text)=> console.log("typing..."+text);
const onChangeHandler2=(even)=> console.log("typing..."+even.target.value);{/*target คือ สิ่งที่ user มา interact*/}

//Wraper function = ไว้ custom parameter
const logic = (x)=>console.log(x*2);
const WrapperFunction=(event)=>
{
    console.log(event.target.value);
    logic(5);
}

root.render(<App/>);
