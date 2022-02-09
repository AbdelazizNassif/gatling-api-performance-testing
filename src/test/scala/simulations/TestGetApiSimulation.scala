package  simulations;

import io.gatling.core.scenario.Simulation;
import io.gatling.core.Predef._;
import io.gatling.http.Predef._;

class TestGetApiSimulation extends Simulation{

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("accept",value = "application/json")
    .header("content-type",value = "application/json")

  val scn = scenario("get single user")
    .exec(http("get single user")
    .get("/api/users/2")
    .check(status is 200));

  setUp(scn.inject(atOnceUsers(1000))).protocols(httpConf);
}