// ReactDOM
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
/*-   สร้างลิงค์ <a> มีข้อความว่า “Google”
-   เมื่อผู้ใช้ click link ให้ขึ้นคำถามว่า “Leave for https://google.com?”
-   ถ้าผู้ใช้กด OK ให้ redirect ไปที่ https://google.com
-   ถ้าผู้ใช้กด Cancel ให้ยกเลิก redirect ไปที่ https://google.com
*/
const OnClickHandeler=()=>{
    // alert("https://google.com?");
    confirm("https://google.com?")?window.location.href = "https://google.com":console.log("Cancle");
}
const App = ()=>{
    return(
        <>
        <a onClick={OnClickHandeler}>Google</a>
        </>
    )
}

root.render(<App/>)