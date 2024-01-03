var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
    request.onload = function() {
            var countries = JSON.parse(request.response);
    
            for (let i = 0; i < countries.length; i++) {
                console.log(`Country: ${countries[i].name}, Region: ${countries[i].region}, Sub-region: ${countries[i]['sub-region']}, Population: ${countries[i].population}`);
            }
       
    };