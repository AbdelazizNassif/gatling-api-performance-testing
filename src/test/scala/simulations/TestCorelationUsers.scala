package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._;
import io.gatling.http.Predef._;

class TestCorelationUsers extends Simulation{

  val httpConf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization" , "Bearer 75771f6f3caf746c9ffee5a20b6c5a348957b73960c458621093d4b4eece22e8");

  val scn = scenario("Correlation and Extract data")
    .exec(http("Get all users")
    .get("public/v2/users")
      .check(
        status.is(200))
      .check(jsonPath("$[0].id").saveAs("userID")))

    .exec(http("Get user by ID")
    .get("public/v2/users/${userID}")
      .check(jsonPath("$.id").is("5432"))
      .check(jsonPath("$.name").is("Tenali Ramakrishna")))

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf);

}
