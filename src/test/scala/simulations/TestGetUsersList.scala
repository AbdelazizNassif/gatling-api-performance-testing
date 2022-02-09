package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._;

class TestGetUsersList extends Simulation{

  val httpConf = http.baseUrl("https://reqres.in/")
    .header("accept",value = "application/json")
    .header("content-type",value = "application/json")

  val scn = scenario("get users list")
    .exec(http("get users list")
    .get("/api/users?page=2")
    .check(status.is(200)))
    .pause(2)
    .exec(http("Get single user")
    .get("/api/users/2")
    .check(status.in(198 to 203), status.not(400)));

  setUp(scn.inject(atOnceUsers(1000))).protocols(httpConf);
}