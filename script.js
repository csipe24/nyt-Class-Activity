
            
 // Build a query url to get data from
 var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
 var apiKey = '&api-key=HyveNee7ZsA36O8F8MSUJ1LSgvC0UEk0'
var beginDate = '$begin_date^\d{8}$'
var endDate = '$end_date^\d{8}$'
var query = '?q='
var numberRecords = $('#numberRecords');


//when search term is submitted, run search based on user parameters
//$("#searchTerm").on("click", function(e) {
    $('#search').on('click', function(event){ 
        
        event.preventDefault()
        
      
    //event.preventDefault();
    var numberRecords = $('#numberRecords').text();
    var searchTerm = $('#searchTerm' ).val();
    var startYear = $('#start-year').val();
    var endYear = $('#end-year').val();
    var fullURL = "";
   
   // Fully constructed URL based on search
    var searchURL = query + searchTerm ;
    var startSearchYear = beginDate + startYear + '0101';
    var endSearchYear = endDate + endYear +'1231';

    if (startYear) {
        fullURL = queryURL + searchURL + startSearchYear + endSearchYear + apiKey;
    } else {
        fullURL = queryURL + searchURL + apiKey;
    }
console.log (fullURL)

    $.ajax({
        url: fullURL,
        method: "GET"
    }).then(function( response ) {
        
        console.log( response )
    })

  
});

