import ballerina/http;

service / on new http:Listener(8100) {
    resource function get .() returns string|error {
        return "Hello, I am running 8100...!";
    }
}
