var Caption = "";
var i = 0;
var finder = "";
var finder1 = "";

(function() {		
	  $("#switch").click("click", function() {
	  	Caption = $("#switch").text()
	  	if (Caption == "color") {
	  		$("#switch").text("classic");
	  		findHex();

	  		$(".td1").each(function () {
				$(this).css("background-color", finder);
			});
			$(".td").each(function () {
				$(this).css("background-color", finder1);
			});
										
	  	} else {
	  		$("#switch").text("color");
	  		findHex();

	  		$(".td1").each(function () {
				$(this).css("background-color", finder);
			});
			$(".td").each(function () {
				$(this).css("background-color", finder1);
			});
	  	}
	});
})();

function findHex() {
	if ($("#switch").text() == "color") {
	   	finder = "black";
	  	finder1 = "white";		
  	} else {
		finder = takeAcolor.value;
		finder1 = takeAcolor1.value;
  }	
}





/*
	if (Caption=="classic")
	{
	 	for (var i = 0; i <= $(".td1").length-1; i++) 
	 	  {

			$(".td1")[i].css("background-color","black");
		  }
		for (var i = 0; i <= $(".td").length-1; i++) 
	 	  {
			$(".td")
			[i].style.backgroundColor="white";
		  }
	}
	else
	if (Caption=="color")
	{
		for (var i = 0; i <= $(".td1").length-1; i++) 
	 	  {
			$(".td1")
			[i].style.backgroundColor=finder1;
		  }
		for (var i = 0; i <= $(".td").length-1; i++) 
	 	  {
			$(".td")
			[i].style.backgroundColor=finder;
		  } 
	}	  
}*/

