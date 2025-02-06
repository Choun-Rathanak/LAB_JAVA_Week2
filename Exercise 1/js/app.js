//Q2
let item3 = document.getElementById("container1").lastElementChild;
let container2 = document.getElementById("container2");
container2.appendChild(item3);
//Q3
let items = container2.getElementsByClassName("item");   
if(items.length > 0){
    container2.removeChild(items[0]);
}
//Q4
let container3 = document.getElementById("container3");
let newItem = document.createElement("div");
newItem.className = "item";
newItem.textContent= "10";
container3.appendChild(newItem);
//Q5
let styleBlue = document.querySelectorAll(".containerBlue");
for(let i of styleBlue){
    i.style.color = "red"; 
}