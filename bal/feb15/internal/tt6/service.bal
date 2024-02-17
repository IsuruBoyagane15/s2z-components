import ballerina/http;

service / on new http:Listener(7070) {
    resource function get .() returns string|error {
        return "Hello, I am running 7070...!";
    }
}
