// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

/*-   สร้าง checkbox ขึ้นมา 3 อัน
-   ให้แต่ละอันมี name คือ phoneBrand
-   เมื่อผู้ใช้ tick หรือ untick checkbox ให้ console.log
    -   ค่า name ของ checkbox
    -   ค่า value ของ checkbox
    -   checkbox นั้นถูก tick หรือ untick
*/

const OnCheckboxChangeHandler=(e)=> console.log(e.target.name+"|"+e.target.value);
const App=()=>{
    return(
        <>
            <input id="Cb-1" type="checkbox" name="PhoneBrand"  onChange={OnCheckboxChangeHandler}/>
            <input id="Cb-2" type="checkbox" name="PhoneBrand" onChange={OnCheckboxChangeHandler}/>
            <input id="Cb-13" type="checkbox" name="PhoneBrand" onChange={OnCheckboxChangeHandler}/>
        </>
    );
}
root.render(<App/>)

