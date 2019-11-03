alert("hallo welkom bij de badgirlz. we hebben hier fris,bier of wijn of als u een snackje wilt heeft u de keus tussen 8 of 16 bitterballen ")

function drankje(){
const fp = 3;
const wp =7;
const bp = 11;
const sp = 6;
var prize=0;


while( bestelling != "stop" ){
var bestelling = prompt('wat wilt u toevoegen een drankje of een wilt u bitterballen typ dan in snack. of als u de rekening wilt typ dan stop in.');

  if (bestelling =='stop'){
	return false;
}//stoppen

 if(bestelling =='drankje'){
	var drankje=prompt('wat wilt u drinken fris,bier of wijn');



  if (drankje =='fris'){
	var fris=prompt ('hoeveel fris wilt u bestellen');
	var prijs = fris * fp
	document.write(fris+ 'x fris:'+ "\u20AC" + prijs + '<br>');
	prize+=prijs
		}//fris


 else if (drankje=='bier'){
	var bier=prompt('hoeveel bier wilt u bestellen');
	var prijs = bier * bp
	document.write(bier+ 'x bier :'+ "\u20AC" + bier  + '<br>');
	prize+=prijs
}//bier

else if(drankje=='wijn'){
	var wijn =prompt('hoeveel wijn wilt u bestellen');
	var prijs = wijn * wp
	document.write(wijn+ 'x wijn:' + "\u20AC" + wijn   + '<br>');
	prize+=prijs
}//wijn

  else {
	alert('u drankje wordt niet toegevoegd');
}//sluit alert
}//sluit drankje

if (bestelling=='snack'){
	var snackje=prompt('hoeveel bitterballen wilt u 8 of 16');
	 		  if (snackje=='8'){
			var snack=prompt('hoeveel schalen wilt u');
			var prijs = snack * sp
			document.write( snack+ 'x 8x bitterballen : ' + "\u20AC" + snackje   + '<br>'); 
			prize+=prijs
		}//sluit 8
			 else if (snackje=='16'){
			var snack=prompt('hoeveel schalen wilt u')
			var prijs = snack * sp
			document.write(snack +'x 16x bitterballen :' + "\u20AC" + snackje   + '<br>');
			prize+=prijs
		}//sluit 16
 else{
	alert('u kunt alleen kiezen tussen 8 of 16 bitterballen');
}//alert


}//sluit bitterballen
document.write('totaalprijs is '+prize+" euro");




}//for loop sluit


}//function sluit
drankje();