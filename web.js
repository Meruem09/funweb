let name;
document.getElementById("btn2").onclick = function(){
    name =document.getElementById("nam").value;
    document.getElementById("c1").textContent= `Hello, ${name}`;
    console.log(name);
}
