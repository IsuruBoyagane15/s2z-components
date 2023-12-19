import ballerina/http;
import ballerina/os;

int p1 =  os:getEnv("P1") != "" ? check int:fromString(os:getEnv("P1")) : 8081;
int p2 =  os:getEnv("P2") != "" ? check int:fromString(os:getEnv("P2")) : 8082;

listener http:Listener listener1 = check new (p1);
listener http:Listener listener2 = check new (p2);

service / on listener1 {
    resource function get .() returns string|error {
        return string `Hello, I am v2-multi-port service running in ${p1}...!`;
    }
}

service / on listener2 {
    resource function get .() returns string|error {
        return string `Hello, I am v2-multi-port service running in ${p2}...!`;
    }
}
