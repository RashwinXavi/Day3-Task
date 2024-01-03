var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
    request.onload = function() {
            var countries = JSON.parse(request.response);
    
            for (let i = 0; i < countries.length; i++) {
                console.log(`Country: ${countries[i].name}, Flag: ${countries[i].flags[0]}`);
            }
       
    };