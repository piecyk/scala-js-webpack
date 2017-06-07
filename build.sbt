scalaJSOptimizerOptions ~= { _.withDisableOptimizer(true) }
scalaJSModuleKind := ModuleKind.CommonJSModule

scalacOptions ++= Seq(
  "-deprecation",
  "-encoding", "UTF-8",
  "-feature",
  "-unchecked",
  "-language:implicitConversions",
  "-language:postfixOps",
  // "-Ywarn-unused",
  "-Ywarn-unused-import",
  "-Ywarn-numeric-widen",
  "-Xlint:missing-interpolator",

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
    scalaVersion := "2.12.2",
    libraryDependencies ++= Seq(
      "org.scala-js" %%% "scalajs-dom" % "0.9.2"
    ),
    artifactPath in(Compile, fastOptJS) := baseDirectory.value / "src" / "lib" / "bundle" / "scala.js",
    artifactPath in(Compile, fullOptJS) := baseDirectory.value / "src" / "lib" / "bundle" / "scala.js"
  )
).enablePlugins(ScalaJSPlugin)
