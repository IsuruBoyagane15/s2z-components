import ballerina/http;

service / on new http:Listener(9090) {
    resource function get .() returns string|error {
        return "Hello, I am foo running in 9090 new commit...!";
    }
}

service / on new http:Listener(8100) {
    resource function get .() returns string|error {
        return "Hello, I am foo running in 8100...!";
    }
}