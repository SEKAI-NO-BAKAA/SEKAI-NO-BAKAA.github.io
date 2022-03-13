window.onload = function(){
	var motsClefs = [
		'Lettre au major',
		'Loli',
		'Bakaa',
		'Personne',
		'Tagada',
		'Elle',
		'Bobu'
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
  var a = document.getElementById("search").value;
  
  if (a === "Lettre Au Major" || a==="Lettre au major" || a==="Lettre" || a==="lettre au major"){
    window.open("page10.html","_self") ;
}
   
  else {
        window.open("erreur.html","_self");
      }
    }