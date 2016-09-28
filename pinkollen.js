function pinKoll(){
var fel = 1;
	while (true){
		var kod = prompt("Mata in din PINkod");
		if(kod == 1234){
			console.log("Grattis, du har åtkomst");
			break;
		}else if(kod != 1234 && fel < 3){
			fel++;
			console.log("Fel, försök igen!");
		}else{
			console.log("Du har inte åtkomst");
			break;
		}
	}
}
pinKoll();