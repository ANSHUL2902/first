
function add(){
   let no1 = document.getElementById("num1").value;
   let no2 = document.getElementById("num2").value;
  //console.log(parseInt(no1)+parseInt(no2));
  document.getElementById("res").innerHTML = parseInt(no1)+parseInt(no2);
}

function sub(){
    let no1 = document.getElementById("num1").value;
    let no2 = document.getElementById("num2").value;
  
    document.getElementById("res").innerHTML = parseInt(no1)-parseInt(no2);
}
