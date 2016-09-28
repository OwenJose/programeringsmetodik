function ingridients() {
	while (true){
		var skaferi = prompt("finns det ingredienser");
		if (skaferi == "ja"){
					console.log("A men laga då");
					break;
			}
			else 
					console.log("gå till affär");
	}
}



while (true)
{
	var ide = prompt("Vet du vad du vill äta?");
	if (ide == "ja"){
		ingridients();
		break;
	}
	else
		console.log("sök insiration");
}
console.log("Sätt dig ner och ät!");