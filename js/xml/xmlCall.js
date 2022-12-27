const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "js/xml/xmlcompress.xml", true);
xhttp.send();

function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    console.log(xmlDoc)
}