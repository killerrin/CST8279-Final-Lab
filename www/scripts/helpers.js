﻿function getDomainNameAndFolder() {
    //var WebsiteURL = "http://192.168.2.120/8279/";
    //WebsiteURL = "http://127.0.0.1/8279/";
    var loc = window.location.pathname;
    var dir = loc.substring(0, loc.lastIndexOf('/'));
    return dir;
}

// Recieved Pure Javascript HTTPGET code from http://stackoverflow.com/questions/247483/http-get-request-in-javascript
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
};

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}