
            
 // Build a query url to get data from
 var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
 var apiKey = '&api-key=HyveNee7ZsA36O8F8MSUJ1LSgvC0UEk0'
var beginDate = 'begin_date^\d{8}$'
var endDate = 'end_date^\d{8}$'
var query = '?q='
var numberRecords = $('#numberRecords');


        
$('#submit').on(submit, function(e) {
    event.preventDefault();
    var numberRecords = $('#numberRecords').text();
    var searchTerm = $('#searchTerm').text();
    var startYear = $('#startYear').text();
    var enddYear = $('#endYear').text();

    console.log(startYear);
   // Fully constructed URL based on search
    var fullURL = queryURL + query + searchTerm + apiKey;

    if ( startYear ) {

        fullURL = fullURL + "&begin_date="  + startYear + "0101";

    }

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function( response ) {
        
        console.log( response )
    }

    $( '' )
    

    queryURL + query + apiKey
}