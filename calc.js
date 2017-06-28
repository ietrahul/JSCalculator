var prevclick;

function addExp(str){

if (str ==="CE") {
    d.value = 0;
} else if (str === "x"){
   d.value = d.value.substring(0, d.value.length - 1);
   if (d.value.length <1) d.value = 0;
} else {
    //var lastChar = d.value.substr(d.value.length - 1);
    console.log(prevclick);
    console.log(str);
    if (!((prevclick === "/" || prevclick === "*" || prevclick === "-" || prevclick === "+" || prevclick === "." )
          &&
         (str === "/" || str === "*" || str === "-" || str === "+" )
     )) {

        if (prevclick === "="
            &&  !(str === "/" || str === "*" || str === "-" || str === "+" )){
            d.value = str;
        } else {
        if (d.value === "0") {
           d.value = str;
        } else {
           d.value += str;
        }
        //d.value = Number(d.value);
       // if (prevclick === undefined || prevclick === "=")
        //d.value = d.value.replace(/^0+/, '');
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
  d.value = eval(d.value).toFixed(4);
}

function addDecimal(){
  //d.value = d.value.replace(/^0+/, '');
      if (!(prevclick === "." )) {
        if (prevclick === "=") {
            d.value = "0.";
        } else {
        d.value += ".";
        //d.value = Number(d.value);
        //d.value = d.value.replace(/^0+/, '');
    }
    }

  prevclick = ".";
  //console.log("In equal:"+d.value);
  //d.value = eval(d.value);
}