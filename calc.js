var prevclick;

function addExp(str){

if (str === "AC" || str ==="CE") {
    d.value = 0;
} else {
    //var lastChar = d.value.substr(d.value.length - 1);
    console.log(prevclick);
    console.log(str);
    if (!((prevclick === "/" || prevclick === "*" || prevclick === "-" || prevclick === "+" || prevclick === "." )
          &&
         (str === "/" || str === "*" || str === "-" || str === "+" || str === "." )
     )) {

        if (prevclick === "="
            &&  !(str === "/" || str === "*" || str === "-" || str === "+" || str === ".")){
            d.value = str;
        } else {

        d.value += str;
        d.value = d.value.replace(/^0+/, '');
    }
    }


  }

prevclick = str;
}

function equal(){
 //var lastChar = d.value.substr(d.value.length - 1);
  d.value = d.value.replace(/^0+/, '');
  prevclick = "=";
  console.log("In equal:"+d.value);
  d.value = eval(d.value);
}