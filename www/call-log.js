const exec = require('cordova/exec');

function CallLog() {
};

CallLog.prototype.list = function (period, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CallLog", "list", [period]);
};

CallLog.prototype.contact = function (phoneNumber, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CallLog", "contact", [phoneNumber]);
};

CallLog.prototype.show = function (phoneNumber, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CallLog", "show", [phoneNumber]);
};

module.exports = new CallLog();
