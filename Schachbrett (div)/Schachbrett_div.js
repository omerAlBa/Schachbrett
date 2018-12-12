var Caption="";
var i=0;
var finder="";
var finder1="";
(function() 
	{		
	  document.getElementById("switch").addEventListener("click", function andereFarbe(){
	  	Caption=document.getElementById("switch").textContent
	  	console.log(Caption)
	  	if (Caption=="color")
	  	{
	  		document.getElementById("switch").textContent="classic";
	  		findHex();
	  		getYourColor();
	  		
	  	}
	  	else
	  	{
	  		document.getElementById("switch").textContent="color";
	  		findHex();
	  		getYourColor();
	  		
	  	}
	});
})();

function getYourColor()
{
	if (Caption=="classic")
	{
	 	for (var i = 0; i <= document.getElementsByClassName("td1").length-1; i++) 
	 	  {
			document.getElementsByClassName("td1")
			[i].style.backgroundColor="black";
		  }
		for (var i = 0; i <= document.getElementsByClassName("td").length-1; i++) 
	 	  {
			document.getElementsByClassName("td")
			[i].style.backgroundColor="white";
		  }
	}
	else
	if (Caption=="color")
	{
		for (var i = 0; i <= document.getElementsByClassName("td1").length-1; i++) 
	 	  {
			document.getElementsByClassName("td1")
			[i].style.backgroundColor=finder1;
		  }
		for (var i = 0; i <= document.getElementsByClassName("td").length-1; i++) 
	 	  {
			document.getElementsByClassName("td")
			[i].style.backgroundColor=finder;
		  } 
	}	  
 
}
function findHex()
{
	finder = takeAcolor.value;
	finder1= takeAcolor1.value;
	console.log(finder);
	
}