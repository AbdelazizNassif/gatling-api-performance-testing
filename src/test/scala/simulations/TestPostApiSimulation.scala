package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._;

class TestPostApiSimulation extends Simulation{

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("accept",value = "application/json")
    .header("content-type",value = "application/json")

  val scn = scenario("Add user Scenario")
    .exec(http("add user request")
    .post("/api/users/")
      .body(RawFileBody("./src/test/scala/bodies/AddUser.json")).asJson
      .header("content-type",value = "application/json")
    .check(
      jsonPath("$.name").is("morpheus"),
      jsonPath("$.job").is("leader"),
      status is 201
    ))
    .pause(3)
    .exec(http("get users list")
      .get("/api/users/2")
      .check(status is 200));
    ;

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf);
}