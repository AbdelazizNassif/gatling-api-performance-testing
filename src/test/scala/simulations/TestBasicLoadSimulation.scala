package simulations

import io.gatling.core.scenario.Simulation
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.language.postfixOps;

class TestBasicLoadSimulation extends Simulation{

  val httpConf = http.baseUrl("https://gorest.co.in/")
    .header("Authorization",value = "Bearer 75771f6f3caf746c9ffee5a20b6c5a348957b73960c458621093d4b4eece22e8")

  val csvFeeder = csv("./src/test/scala/csvFiles/getUsers2.csv").circular;

  def getAUser()={
    repeat(1){
      feed(csvFeeder)
        .exec(http("get single user using csv feeder")
          .get("public/v2/users/${userID}")
          .check(jsonPath("$.name").is("${name}"))).pause(2);
    }
  }
  val scn = scenario("CSV Feeder test").exec(getAUser());

//  setUp(
//    scn.inject(nothingFor(5),
//      atOnceUsers(2),
//      rampUsers(10) during(10 seconds))
//      .protocols(httpConf));

  setUp(
      scn.inject(nothingFor(5),
        constantUsersPerSec(10) during(10 seconds),
        rampUsersPerSec(1) to (5) during(20 seconds))
        .protocols(httpConf));

}
