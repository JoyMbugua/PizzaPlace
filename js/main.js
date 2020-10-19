function getReceipt() {
	text1 = "";
	text2 = "";
	var runningTotal = 0;
    var sizeTotal = 0;
    
    var sizeArray = document.getElementsByClassName("size");
    
	for (var i = 0; i < sizeArray.length; i++) {

		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		}
	}
	if (selectedSize === "Medium Pizza") {
		sizeTotal = 800;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 1000;
		text2 = text2+sizeTotal+"<br>";
	} else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 1250;
        
		text2 = text2+sizeTotal+"<br>";
	}
    runningTotal = sizeTotal;
    
    document.getElementById("cart").style.opacity=1;
    document.getElementById("showText1").innerHTML=text1;
    document.getElementById("showText2").innerHTML=text2;
    document.getElementById("totalPrice2").innerHTML = "</h3>KES"+runningTotal+".00"+"</h3>";

};

function clearAll() {
document.getElementById("form").reset();
document.getElementById("cart").style.opacity=0;
};