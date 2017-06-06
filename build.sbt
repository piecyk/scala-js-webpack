scalaJSOptimizerOptions ~= { _.withDisableOptimizer(true) }
scalaJSModuleKind := ModuleKind.CommonJSModule

scalacOptions ++= Seq(
  "-P:scalajs:sjsDefinedByDefault",
  "-P:scalajs:suppressExportDeprecations"
)

lazy val project = Project(
  "scala-js-webpack",
  file("."),
  settings = Seq(
    organization := "piecyk",
    name := "scala-js-webpack",
    version := "1.0",
    scalaVersion := "2.12.2"
  )
).enablePlugins(ScalaJSPlugin)
