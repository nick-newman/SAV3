import 'dart:async';
import 'dart:html' as html;
import 'package:stagexl/stagexl.dart';
import 'dart:math';
import 'package:sorting_algorithm_visualiser/element_list.dart';

Future<Null> main() async {
  StageOptions options = StageOptions()
    ..backgroundColor = Color.White
    ..renderEngine = RenderEngine.WebGL;

  var canvas = html.querySelector('#stage');
  var stage = Stage(canvas, width: 1280, height: 800, options: options);

  var renderLoop = RenderLoop();
  renderLoop.addStage(stage);

  ElementList elementList = ElementList(100, 0, 10);
  stage.addChild(elementList);
  elementList.bubbleSort();
}