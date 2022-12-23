


fetch('https://cs.simpleviewinc.com/feeds/listings.cfm?pagestart=1&apikey=ECB2A7C5-5056-A36A-1C4477A6EED8BB7B')
    // Handle success
    .then(response => response.json())  // convert to json
    .then(json => console.log(json))    //print data to console
    .catch(err => console.log('Request Failed', err)); // Catch errors