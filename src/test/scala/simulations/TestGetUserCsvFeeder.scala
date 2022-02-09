package simulations

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._;

class TestGetUserCsvFeeder extends Simulation{

  val httpConf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization",value = "Bearer 75771f6f3caf746c9ffee5a20b6c5a348957b73960c458621093d4b4eece22e8")

  val csvFeeder = csv("./src/test/scala/csvFiles/getUsers.csv").circular;

  def getAUser()={
    repeat(7){
      feed(csvFeeder)
        .exec(http("get single user using csv feeder")
        .get("public/v2/users/${userID}")
        .check(jsonPath("$.name").is("${name}"))).pause(2);
    }
  }
  val scn = scenario("CSV Feeder test").exec(getAUser());

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf);
}