package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._;

class TestCRUDForUsers extends Simulation{

  val httpConf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization" , "Bearer 75771f6f3caf746c9ffee5a20b6c5a348957b73960c458621093d4b4eece22e8");

  val scn = scenario("CREATE, READ, UPDATE, DELETE For USER")
    .exec(http("CREATE NEW USER")
    .post("public/v2/users")
      .body(RawFileBody("./src/test/scala/bodies/CreateUser.json")).asJson
      .check(jsonPath("$.id").saveAs("userID")))

    .exec(http("Get user by ID")
    .get("public/v2/users/${userID}")
      .check(jsonPath("$.id").is("${userID}"))
      .check(jsonPath("$.name").is("ZYK KFE")))

    .exec(http("update user by ID")
      .put("public/v2/users/${userID}")
      .body(RawFileBody("./src/test/scala/bodies/UpdateUser.json")).asJson
      .check(jsonPath("$.name").is("ZYK KFE - Updated")))

    .exec(http("delete user by ID")
      .delete("public/v2/users/${userID}")
      .check(status.is(204)))

    .exec(http("Get user by ID after deletion")
      .get("public/v2/users/${userID}")
      .check(jsonPath("$.message").is("Resource not found"))
      .check(status.is(404)))

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf);

}
