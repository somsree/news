// กำไร
function Display(){
    let  a=parseInt(document.getElementById('pa').value);
    let  b=parseInt(document.getElementById('pv').value);
    sum=(((a-b)/b)*100)
    document.getElementById("demo").innerHTML =sum+"%";
}
// ขาดทุน
function Display_1(){
    let  a=parseInt(document.getElementById('pa_1').value);//income
    let  b=parseInt(document.getElementById('pv_1').value);
    sum=(((b-a)/b)*100)
    document.getElementById("demo_1").innerHTML =sum+"%";
}