# cordova-plugin-call-log2

Cordova plugin to access the call history on a device.

## Platforms

- Android.
- iOS (TODO)

## Installation

```shell script
cordova plugins add cordova-plugin-call-log2
```

## Usage

### Listing all the call logs

```javascript
// days is how many days back to go
const days = 7;

window.plugins.callLog.list(days, function (response) {
    console.log(response.rows);
}, function (error) {
    console.error(error)
});
```

Here the `response.rows` will be something like:

```javascript
[
    {
        date: 1590644153980,
        number: "9876543210",
        type: 2,
        duration: 16,
        new: 1,
        cachedNumberType: 0,
        cachedNumberLabel: 0
    }
]
```

Where `type` is-

- 1 === Incoming Call
- 2 === Outgoing Call
- 3 === Missed Call
- 4 === Unknown

### Contact a phone number

```javascript
window.plugins.callLog.contact("+919876543210", function (response) {
    console.log(response);
}, function (error) {
    console.error(error)
});
```

### Show a phone number

```javascript
window.plugins.callLog.show("+919876543210", function (response) {
    console.log(response);
}, function (error) {
    console.error(error)
});
```

### Delete a call log

```javascript
window.plugins.callLog.delete("+919876543210", function (response) {
    console.log(response);
}, function (error) {
    console.error(error)
});
```
