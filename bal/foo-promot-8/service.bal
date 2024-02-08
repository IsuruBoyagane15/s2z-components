import ballerina/os;
import ballerina/http;

http:Client barEp = check new(os:getEnv("BAR_EP"));
// http:Client diseaseEp = check new(os:getEnv("DISEASE_EP")); // https://disease.sh/v3/covid-19

service / on new http:Listener(9090) {
    resource function get .() returns string|error {
        return "Hello, I am foo running in 9090...!";
    }

    resource function get callBar() returns string|error {
        string env = os:getEnv("X_CHOREO_PROJECT_NS");
        http:Response response = check barEp->get("", {"X-CHOREO-PROJECT-NS": [env]});
        string resp = "Bar says, " + check response.getTextPayload();
        return resp;
    }
}
