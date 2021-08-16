"use strict";
var logged;
var sendAnalytics = function (data) {
    console.log(data);
    logged = true;
    console.log(logged);
};
sendAnalytics("The data");
