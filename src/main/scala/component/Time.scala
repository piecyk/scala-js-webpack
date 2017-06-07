package component

import scala.scalajs.js
import js.annotation._

@js.native
@JSImport("preact", JSImport.Namespace)
object P extends js.Object {
  def h(props: js.Any*): js.Any = js.native
}

@JSExportTopLevel("Time")
class Time extends js.Object

object Time {
  @JSExportStatic
  def simple(): js.Any = P.h("div", null, "yeah from time")
}
