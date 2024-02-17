import ballerina/http;

service / on new http:Listener(8101) {
    resource function get .() returns string|error {
        return "Hello, I am running 8101...!";
    }
}
