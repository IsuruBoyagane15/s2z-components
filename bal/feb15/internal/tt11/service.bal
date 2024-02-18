import ballerina/http;

service / on new http:Listener(9091) {
    resource function get .() returns string|error {
        return "Hello, I am running 9091...!";
    }
}
