import ballerina/http;

service / on new http:Listener(9090) {
    resource function get .() returns string|error {
        return "Hello, I am running in 9090 nc...!";
    }

    resource function get abc() returns string|error {
        return "Hello, I am running in 9090 nc...!";
    }
}
