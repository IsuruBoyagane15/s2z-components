import ballerina/http;

// http:Client barEp = check new(os:getEnv("BAR_EP"));
// http:Client diseaseEp = check new(os:getEnv("DISEASE_EP")); // https://disease.sh/v3/covid-19

service / on new http:Listener(9090) {
    resource function get .() returns string|error {
        return "Hello, I am foo running in 9090 new commit...!";
    }
}

service / on new http:Listener(9091) {
    resource function get .() returns string|error {
        return "Hello, I am foo running in 9091 new commit...!";
    }
}