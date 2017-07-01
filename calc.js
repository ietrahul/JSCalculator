var prevclick;

function addExp(str){

if (str ==="CE") {
    d.value = 0;
    d2.value = "";
} else if (str === "x"){
  if (prevclick === "=") {
    d.value = 0;
    d2.value = "";
  } else {
   d.value = d.value.substring(0, d.value.length - 1);
   if (d.value.length <1) d.value = 0;
  }
} else {
    //var lastChar = d.value.substr(d.value.length - 1);
    console.log(prevclick);
    console.log(str);
    if (prevclick === "=") {
            d.value = str;
            d.value = Number(d.value);
            d2.value = "";
    } else if (prevclick === "operator"){
            d2.value += d.value;
            d.value = str;
            d.value = Number(d.value);
    } else {
        if (d.value === "0") {
            d.value = str;
        } else {
           d.value += str;
           d.value = Number(d.value);
        }
    }
}
prevclick = str;
}

function equal(){
 //var lastChar = d.value.substr(d.value.length - 1);
  //d.value = d.value.replace(/^0+/, '');
  console.log("In equal:"+d.value);
  if ( prevclick !== "=" && prevclick !== "operator") {
     if (d2.value !== "0") {
        if (Number(d.value) > 0) d2.value += d.value;
        d.value = Number(eval(d2.value).toFixed(4));
       d2.value += "=" + d.value;
     }
  prevclick = "=";
  }

}

function addDecimal(){
  //d.value = d.value.replace(/^0+/, '');
      if (prevclick !== ".") {
        if (prevclick === "="  || d.value === "0") {
            d.value = "0.";
            d2.value = "";
        } else if (prevclick === "operator"){
           d2.value += d.value;
           d.value = "0.";
        }else {
          if (d.value.indexOf(".") < 0) d.value += ".";
        //d.value = Number(d.value);
        //d.value = d.value.replace(/^0+/, '');
        }
      prevclick = ".";
    }
  //console.log("In equal:"+d.value);
  //d.value = eval(d.value);
}

function addOperator(str){

    console.log(prevclick);
    console.log(str);
    if (prevclick !== "operator")
      {
        if (d.value === "0") {
             if (!(str === "/" || str === "*" || str === "-" || str === "+")) d.value = str;
        } else if (prevclick === "=")
        {
          d2.value = d.value;
          d.value = str;
        }
        else {
           d2.value += d.value;
           d.value = str;
        }
        prevclick = "operator";
    }

}