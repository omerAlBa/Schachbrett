var Caption="";
var i=0;
(function() 
	{		
	  $("#andereFarbe").click("click", function andereFarbe(){
	  	Caption=document.getElementById("andereFarbe").textContent
	  	console.log(Caption)
	  	if (Caption=="color")
	  	{
	  		document.getElementById("andereFarbe").textContent="classic";
	  		wechselSpiel();
	  	}
	  	else
	  	{
	  		document.getElementById("andereFarbe").textContent="color";
	  		wechselSpiel();
	  	}
	});
})();

function wechselSpiel()
{
	if (Caption=="classic")
	{
	 	for (var i = 0; i <= document.getElementsByClassName("color1").length-1; i++) 
	 	  {
			document.getElementsByClassName("color1")
			[i].style.backgroundColor="black";
		  }
		for (var i = 0; i <= document.getElementsByClassName("blackAwhite").length-1; i++) 
	 	  {
			document.getElementsByClassName("blackAwhite")
			[i].style.backgroundColor="white";
		  }
	}
	else
	if (Caption=="color")
	{
		for (var i = 0; i <= document.getElementsByClassName("color1").length-1; i++) 
	 	  {
			document.getElementsByClassName("color1")
			[i].style.backgroundColor="8A4B08";
		  }
		for (var i = 0; i <= document.getElementsByClassName("blackAwhite").length-1; i++) 
	 	  {
			document.getElementsByClassName("blackAwhite")
			[i].style.backgroundColor="F5ECCE";
		  } 
	}	  
 
}