package util

import scala.util.Random
import scala.scalajs.js
import js.annotation._

@JSExportTopLevel("RandomGen")
class RandomGen extends js.Object

object RandomGen {
  private def privateMethod(): Unit = {
    println("I am private")
  }

  private val rnd = new Random()

  @JSExportStatic
  def publicMethod(): Unit = {
    println(s"The public can see me! ${AjaxClient.version}")
    privateMethod()
  }

  val name = "RandomGen"

  @JSExportStatic
  def getRandomNumber: Double = rnd.nextDouble()
}
