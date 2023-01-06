window.onload = function(){
	var motsClefs = [
'Tagada' ,
'Merci Major',
'Loli',
'Elle',
'Souvenirs',
'Bakaa',
'Personne',
'Oublie moi',
'tu as aimé la mort',
'Cendres',
'Bête de foire',
'Lettre au major',
'Encore une fois',
'Fuis moi',
'Bulle',
'Ne faites pas comme Saki',
"faut pas t'en faire",
'Le jeu du loup',
'Destin',
'coeur dans les abysses'
	];
	
	var form = document.getElementById("auto-suggest");
	var input = form.search;
	
	var list = document.createElement("ul");
	list.className = "suggestions";
	list.style.display = "none";

	form.appendChild(list);

	input.onkeyup = function(){
		var txt = this.value;
		if(!txt){
			list.style.display = "none";
		    return;
		}
		
		var suggestions = 0;
		var frag = document.createDocumentFragment();
		
		for(var i = 0, c = motsClefs.length; i < c; i++){
			if(new RegExp("^"+txt,"i").test(motsClefs[i])){
				var word = document.createElement("li");
				frag.appendChild(word);
				word.innerHTML = motsClefs[i].replace(new RegExp("^("+txt+")","i"),"<strong>$1</strong>");
				word.mot = motsClefs[i];
				word.onmousedown = function(){					
					input.focus();
					input.value = this.mot;
					list.style.display = "none";
					return false;
				};				
				suggestions++;
			}
		}

		if(suggestions){
			list.innerHTML = "";
			list.appendChild(frag);
			list.style.display = "block";
		}
		else {
			list.style.display = "none";			
		}
	};

	input.onblur = function(){
		list.style.display = "none";
        if(this.value=="")
            this.value = "Rechercher...";
	};
};


function ouvrirPage()
{
  var a = document.getElementById("search").value ;
//   convertir la chaine de caractères en entrée en chaine de caractère en minuscule
  var a = a.toLowerCase()
  var a = a.replace(/ /g,"")
  

 if  ( a == "loli" ||  a==="lolii" ){
    window.open("../page html/page1.html","_self") ;
}else if  (a==="elle"|| a==="l" || a==="ele"){
    window.open("../page html/page2.html","_self") ;
}else if  (a === "souvenirs"|| a==="souvenir"|| a==="souvnir") {
    window.open("../page html/page3.html","_self") ;
}else if  (a==="baka" || a==="bakaa"){
    window.open("../page html/page4.html","_self") ;
}else if  (a === "personne" || a==="personnes") {
    window.open("../page html/page5.html","_self") ;
}else if  (a==="oubliemoi" || a==="oubliermoi") {
    window.open("../page html/page6.html","_self") ;
}else if  ( a==="tuasaimélamort" || a==="t'asaimélamort" ){
    window.open("../page html/page7.html","_self") ;
}else if  (a === "cendres" || a==="cendre" ){
    window.open("../page html/page8.html","_self") ;
}else if  (a === "betedefoire" || a==="bêtedefoire" ){
    window.open("../page html/page9.html","_self") ;
}else if  ( a==="lettre" || a==="lettreaumajor" || a==="lettresaumajor" || a==="lettreauxmajors"){
    window.open("../page html/page10.html","_self") ;
}else if  ( a==="tagada" || a==="tagadaa") {
    window.open("../page html/page11 Tagada.html","_self") ;
}else if  (a==="mercimajor" ||a==="merci" ){
    window.open("../page html/page Merci.html","_self") ;
}else if  (a==="encoreunefois"|| a==="encoreuneencore" || a==="encore" ){
	window.open("../page html/page12 Encore une fois.html","_self") ;
}else if  (a==="fuismoi" || a==="fuis" ){
	window.open("../page html/page13 Fuis moi.html","_self") ;
}else if  ( a === "bulle" ||a === "bulles" || a==="bule"){
	window.open("../page html/page bulle.html","_self") ;
}else if  ( a === "nefaitespascommesaki" ||a === "saki" || a===" nefaitepascommesaki"|| a==="177013" ){
	window.open("../page html/page ne faites pas comme Saki.html","_self") ;
}else if  ( a === "fautpast'enfaire" ||a === "fautt'enfaire" || a==="fautpas"|| a==="fautpass'enfaire"|| a==="fautpastenfaire"|| a==="fautpassenfaire" ){
	window.open("../page html/page faut pas t'en faire.html","_self") ;
}else if  ( a === "destin" ||a === "desstin" || a==="destiné"){
	window.open("../page html/page destin.html","_self") ;
}else if  ( a === "lejeuduloup" ||a === "lejeuxduloup" || a==="jeuduloup"){
	window.open("../page html/page jeu du loup.html","_self") ;
}else if  ( a === "happyend" ||a === "hapyend" || a==="happy"){
	window.open("../page html/page happy end.html","_self") ;
}else if  ( a === "coeurdanslesabysses"||a === "coeurdanslesabysse" || a==="coeur"|| a==="abysse"|| a==="abysses"|| a==="madeinabyss"|| a==="madeinabyyse" ){
	window.open("../page html/page abysse.html","_self") ;
}
	
	
}

//   else {
//         window.open("erreur.html","_self");
//       }
    



	
	