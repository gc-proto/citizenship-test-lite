

	/*
	Nice to haves:
	1. expand collapse for each chapter's results
	2. facet counts on chapter result headings
	3. only results scroll, not the search bar or 'back to TOC'
	*/

	//document URL param parser
	document.addEventListener("DOMContentLoaded", function(){
	 var q = getUrlParameter('txthl'); // (gets me URL parameters)
	 /*var lang = getUrlParameter('lang'); // (gets me URL parameters)*/

	 // get the URL aprameters for ID and Lang then return API JSON

	 var jsonfromsearch = getSearchresults(q);
	 console.log(q);

	});
	/* how to use the parsed parameters in a function*/
	function getSearchresults(q) {
	   var base = 'https://ca-gov-staging.c.lucidworks.cloud/api/query/goc-paragraphs-demo';
	   var uri = base + '?q=' + '"' + q + '"';
		 console.log(uri);

		 /*basic ajax request to the search api*/
			$.ajax({
				 url: uri,
				 type: "GET", //This is what you should change
					 crossDomain: true,
					 dataType: "json",
					 headers: {
						"Authorization": "Basic " + btoa("search" + ":" + "RuXbgK6?Xa@[QEbl")
					 },
						/*beforeSend: function (xhr){
					xhr.setRequestHeader('Authorization', make_base_auth("search", "RuXbgK6?Xa@[QEbl"));
				 },*/
				 /*username: "search", // Most SAP web services require credentials
				 password: "RuXbgK6?Xa@[QEbl",*/
				 /*processData: false,*/
				 success: function (data) {
							 /*process search results json here!!*/
							 console.log("success");
							 console.log(data);
							 var queryTerm = data.responseHeader.params.q.substring(1, data.responseHeader.params.q.length - 1); //remove ""
							 console.log(queryTerm);
							 console.log(data.responseHeader.params.q);
							 if (data.response.numFound > 0) { // check if there are search results
								$("#back-to-toc").removeClass("hidden");
								$("#resultsNumber").append(data.response.numFound + ' results for "' + queryTerm + '"');
								var header = "definescopeoutsideeach"; //random term so that we can evaluate new section
								//$("#searchResults").append('<div class="search-results-header-div"><p class="search-results-header-p">Results for <strong>Canada\'s History</strong></p></div>');
								console.log(header);
								$.each(data.response.docs, function(i, f) {
									if (f.title_s != header) {
										console.log(header);
										console.log(f.title_s);
										header = f.title_s;
										$("#searchResults").append('<div style="margin-top:15px; clear:both;"><p style="font-size:18px;">Results for <strong>' + header.substring(header.indexOf(" - ") + 3, header.indexOf(" - ", header.indexOf(" - ") + 3)) + '</strong></p></div>');
									}
									//get 45 characters before and after search term in returned paragraph, or beginning/end of snippet if it doesn't go that far.


									console.log(f.body_txt_en.toLowerCase().indexOf(queryTerm));
									if (f.body_txt_en.toLowerCase().indexOf(queryTerm.toLowerCase()) < 45) {
										var iStart = 0;
									} else {
										var iStart = f.body_txt_en.toLowerCase().indexOf(queryTerm.toLowerCase()) - 45;
									}
									if ((f.body_txt_en.toLowerCase().indexOf(queryTerm.toLowerCase()) + queryTerm.length + 45) > f.body_txt_en.length) {
										var iEnd = f.body_txt_en.length;
									} else {
										var iEnd = f.body_txt_en.toLowerCase().indexOf(queryTerm.toLowerCase()) + queryTerm.length + 45;
									}

									//bold or highlight search term in result panels


									var sSnippet = f.body_txt_en.substring(iStart, iEnd);

									// if iStart = 0 or iEnd = f.body_text_en.length, then ellipsis
									if (iStart != 0) {
										var sSnippet = '...' + sSnippet.substring(sSnippet.indexOf(" "),sSnippet.Length); //to nearest space
									}
									if (iEnd != f.body_txt_en.length) {
										var sSnippet = sSnippet.substring(0, sSnippet.lastIndexOf(" ")) + '...'; //to nearest space
									}

									console.log(q);
									var anchorid = f.id.substring(f.id.indexOf("#para-"),f.id.length);
									var linkbase = f.id.substring(0, f.id.indexOf("#para-"));
									console.log(linkbase);
									var linkAddress = linkbase + "?txthl=" + q + anchorid;
									console.log(linkAddress);
									//for local file dev
									if (window.location.href.substring(0, 3) != "http") {
										var linkAddress = window.location.href + anchorid;
										console.log(linkAddress);
									}



									$("#searchResults").append('<a class="search-result-link" href="' + linkAddress + '"><div class="search-result-div">' + sSnippet + '</div></a>');
								});

							} else { // no search results message
								console.log(queryTerm);
								//check if this works with the trimmed queryTerm
								if (queryTerm === "" || queryTerm === "undefined" ) {
									//What I actually want to do is show the TOC class when undefined, as if there was no search done
									$("#table-of-contents").removeClass("hidden");
									console.log("undefined query");
									//$("#searchResults").append('<div class="no-results-div"><p class="no-results-p">Results for <strong>Please enter a word or phrase to find it within this document.</strong></p></div>');
								} else {
									$("#back-to-toc").removeClass("hidden");
									$("#searchResults").append('<div class="no-results-div"><p class="no-results-p">Results for <strong>' + 'There are no results for ' + data.responseHeader.params.q + ' in this document.</strong></p></div>');
								}
							}

				 },
				 error: function (xhr, ajaxOptions, thrownError) { //Add these parameters to display the required response
					 console.log(xhr.status);
					 console.log(xhr.responseText);
							 console.log("fail");
				 },
			 });
			 return;
			 console.log("hi");
	};
	var getUrlParameter = function getUrlParameter(sParam) {
	   var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		   sURLVariables = sPageURL.split('&'),
		   sParameterName,
		   i;
	   for (i = 0; i < sURLVariables.length; i++) {
		   sParameterName = sURLVariables[i].split('=');
		   if (sParameterName[0] === sParam) {
			   return sParameterName[1] === undefined ? true : sParameterName[1];
		   }
	   }
	};
	function make_base_auth(user, password) {
	  var tok = user + ':' + password;
	  var hash = btoa(tok);
	  return "Basic " + hash;
	};
	function backtoToc () {
			$("#table-of-contents").removeClass("hidden");
			$("#searchResults").addClass("hidden");
			$("#resultsNumber").addClass("hidden");
			$("#back-to-toc").addClass("hidden");
			//remove highlighting
			//Not sure how????
	}