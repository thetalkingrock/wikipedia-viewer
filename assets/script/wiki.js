$(document).ready(function(){
	
	$("#image-container").fadeIn(1500, function () {
		$("#random-link-container").fadeIn(1500, function () {
			$("#search-container").fadeIn(1500);
		});
	});
	
	$(document).keypress(function (e) {
		if(e.which == 13 && $("input").val() !== "" && $("input").val() != null){
			
			var searchTerm = $("input").val();
			searchTerm = searchTerm.trim();
			var wikiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=";
			wikiURL += searchTerm;
			wikiURL += "&utf8=&format=json";
			
			$.ajax({
				type: "GET",
				url: wikiURL,
				dataType: "jsonp",
				success: alert("success!")
			});
		}
	});
	
});