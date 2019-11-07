import 'dart:async';
import 'dart:html' as html;
import 'dart:html';
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

  void randomizeButtonPressed() {
    int max = int.parse((querySelector("#maxValueInput") as InputElement).value);
    int min = int.parse((querySelector("#minValueInput") as InputElement).value);
    int amount = int.parse((querySelector("#amountInput") as InputElement).value);
    stage.removeChild(elementList);
    elementList.clearLists();
    elementList.newElementList(max, min, amount);
    stage.addChild(elementList);
  }

  void sortButtonPressed() {
    elementList.bubbleSort();
  }

  void createButtons() {
    var randomizeButton = querySelector('#randomizeButton');
    randomizeButton.onClick.listen((e) {randomizeButtonPressed();});

    var sortButton = querySelector('#sortButton');
    sortButton.onClick.listen((e) {sortButtonPressed();});
  }

  createButtons();
  stage.addChild(elementList);
}