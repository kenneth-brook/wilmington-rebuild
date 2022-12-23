const Connect = new XMLHttpRequest();

Connect.open("GET", "http://cs.simpleviewinc.com/feeds/listings.cfm?pagestart=1&apikey=ECB2A7C5-5056-A36A-1C4477A6EED8BB7B", false);
Connect.setRequestHeader("Content-Type", "text/xml");
Connect.send(null);

const TheDocument = Connect.responseXML;

console.log(TheDocument);