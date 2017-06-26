function addExp(str){
if (str === "AC" || str ==="CE") {
d.value = 0;
}else {
d.value += str;
d.value = d.value.replace(/^0+/, '');
}

}

function equal(){
  d.value = eval(d.value);
}