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
'Tu as aimé la mort',
'Cendres',
'Bête de foire',
'Lettre au major',
'Encore une fois',
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
  
  

 if  (a === "Loli" || a==="loli" || a==="LOLI" || a==="lolii" || a==="Lolii"){
    window.open("page1.html","_self") ;
}else if  (a === "Elle" || a==="elle" || a==="ELLE" || a==="l" || a==="L"){
    window.open("page2.html","_self") ;
}else if  (a === "Souvenirs" || a==="SOUVENIRS" || a==="souvenirs" || a==="Souvenir" || a==="SOUVENIR" || a==="souvenir") {
    window.open("page3.html","_self") ;
}else if  (a === "Bakaa" || a==="Bakaa" || a==="BAKAA" || a==="BAKA" || a==="baka" || a==="Baka"){
    window.open("page4.html","_self") ;
}else if  (a === "Personne" || a==="PERSONNE" || a==="personne" || a==="Personnes" || a==="PERSONNES" || a==="personnes") {
    window.open("page5.html","_self") ;
}else if  (a === "Oublie moi" || a==="OUBLIE MOI" || a==="oublie moi" || a==="Oublie Moi" || a==="oublie Moi" || a==="OUBLIEMOI") {
    window.open("page6.html","_self") ;
}else if  (a === "T'as aimé la mort" || a==="Tu as aimé la mort" || a==="TU AS AIME LA MORT" || a==="T'as Aimé La Mort" || a==="Tu as aimé la mort" || a==="T AS AIME LA MORT"){
    window.open("page7.html","_self") ;
}else if  (a === "Cendres" || a==="CENDRES" || a==="cendres" || a==="cendre" || a==="CENDRE" || a==="Cendre"){
    window.open("page8.html","_self") ;
}else if  (a === "Bete de foire" || a==="bete de foire" || a==="BETE DE FOIRE" || a==="Bête de foire" || a==="Bête de foire" || a==="Bêtes de foire"){
    window.open("page9.html","_self") ;
}else if  (a === "Lettre Au Major" || a==="Lettre au major" || a==="Lettre" || a==="lettre au major"){
    window.open("page10.html","_self") ;
}else if  (a === "Tagada" || a==="TAGADA" || a==="tagada" || a==="tagadaa" || a==="TaGaDa" || a==="tAgAdA") {
    window.open("page11 Tagada.html","_self") ;
}else if  (a === "Merci Major" || a==="merci major" || a==="Merci major" || a==="MERCI MAJOR" || a==="Merci" || a==="MERCI" || a==="merci"){
    window.open("pageViolet.html","_self") ;
}else if  (a === "Encore une fois" || a==="encore une fois" || a==="ENCORE UNE FOIS" || a==="Encore Une Encore" || a==="Encore une Fois" || a==="encore" || a==="Encore"){
		window.open("page12 Encore une fois.html","_self") ;


}

  else {
        window.open("erreur.html","_self");
      }
    }