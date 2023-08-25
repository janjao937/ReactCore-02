// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
/*-   จงสร้าง tag `<select>` ซึ่งมีข้อมูลชื่อประเทศในรายการให้เลือก (ให้ลองใส่มา 5 ประเทศ)
-   เมื่อผู้ใช้เลือกประเทศ ให้ console.log ค่าประเทศที่ถูกเลือก

Hint : onChange*/
const changeHandler=(e)=>console.log(e.target.value)
const App =()=>{
    return(
        <>
            <select onchange={changeHandler}>
                <option value="Thai" >Room</option>
                <option value="China" >China</option>
                <option value="India" >India</option>
                <option value="Usa" >Usa</option>
                <option value="Cammeroon" >Cammeroon</option>
                <option value="Africa" >Africa</option>
            </select>
        </>
        );
    }
    
    
root.render(<App/>);