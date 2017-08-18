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
			searchTerm = searchTerm.replace(/\s\s+/g, " ");
			searchTerm = searchTerm.replace(/\s/, "+");
			
			var wikiURL = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=";
			wikiURL += searchTerm;
			wikiURL += "&utf8=&format=json";
			
			$.ajax({
				type: "GET",
				url: wikiURL,
				dataType: "jsonp",
				success: function(data){
					var numResults = data["query"]["search"].length;
					for(var x = 0; x < numResults; x++){
						var currentResult = data["query"]["search"][x]["title"];
						var result = "<div class='result-container'>" + currentResult + "</div>";
						$("#results-container").append(result);
					}
					
					$(".result-container").each(function () {
						$(this).fadeIn(1500);
					})
				}
			});
		}
	});
	
});