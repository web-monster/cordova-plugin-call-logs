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

CallLog.prototype.delete = function (id, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CallLog", "delete", [id]);
};

CallLog.prototype.insert = function (args, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "CallLog", "insert", args);
};

module.exports = new CallLog();
