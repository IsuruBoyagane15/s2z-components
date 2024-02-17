import ballerina/http;

service / on new http:Listener(8080) {
    resource function get .() returns string|error {
        return "Hello, I am running 8080...!";
    }
}
