import 'dart:async';
import 'dart:html' as html;
import 'dart:html';
import 'package:stagexl/stagexl.dart';
import 'dart:math';
import 'package:sorting_algorithm_visualiser/element_list.dart';

class Controller {
  ElementList elementList = ElementList();
  TextField minText, maxText, minMidText, maxMidText;
  StageOptions options = StageOptions()
    ..backgroundColor = Color.White
    ..renderEngine = RenderEngine.WebGL;
  var canvas, stage, renderLoop;

  Controller();

  createStage() {
    canvas = querySelector('#stage');
    stage = Stage(canvas, width: 1280, height: 512, options: options);

    renderLoop = RenderLoop();
    renderLoop.addStage(stage);

    var randomizeButton = querySelector('#randomizeButton');
    randomizeButton.onClick.listen((e) {
      randomizeButtonPressed();
    });

    var sortButton = querySelector('#sortButton');
    sortButton.onClick.listen((e) {
      sortButtonPressed();
    });

    Bitmap minLine = Bitmap(BitmapData(1280, 2, Color.LightGray))
    ..x = 0
    ..y = 512;
    stage.addChild(minLine);

    Bitmap maxLine = Bitmap(BitmapData(1280, 2, Color.LightGray))
    ..x = 0
    ..y = 0;
    stage.addChild(maxLine);
    
    Bitmap minMidLine = Bitmap(BitmapData(1280, 2, Color.LightGray))
    ..x = 0
    ..y = 384;
    stage.addChild(minMidLine);

    Bitmap maxMidLine = Bitmap(BitmapData(1280, 2, Color.LightGray))
    ..x = 0
    ..y = 128;
    stage.addChild(maxMidLine);

    TextFormat valueFormat = TextFormat('Helvetica, Arial, sans-serif', 18, Color.Black)
      ..leftMargin = 5
      ..rightMargin = 5;

    minText = TextField('', valueFormat)
      ..mouseEnabled = false
      ..background = true
      ..backgroundColor = Color.White
      ..autoSize = TextFieldAutoSize.LEFT
      ..pivotX = 0
      ..pivotY = 9
      ..x = 30
      ..y = 512;
    stage.addChild(minText);

    maxText = TextField('', valueFormat)
      ..mouseEnabled = false
      ..background = true
      ..backgroundColor = Color.White
      ..autoSize = TextFieldAutoSize.LEFT
      ..pivotX = 0
      ..pivotY = 9
      ..x = 30
      ..y = 0;
    stage.addChild(maxText);

    minMidText = TextField('', valueFormat)
      ..mouseEnabled = false
      ..background = true
      ..backgroundColor = Color.White
      ..autoSize = TextFieldAutoSize.LEFT
      ..pivotX = 0
      ..pivotY = 9
      ..x = 30
      ..y = 384;
    stage.addChild(minMidText);

    maxMidText = TextField('', valueFormat)
      ..mouseEnabled = false
      ..background = true
      ..backgroundColor = Color.White
      ..autoSize = TextFieldAutoSize.LEFT
      ..pivotX = 0
      ..pivotY = 9
      ..x = 30
      ..y = 128;
    stage.addChild(maxMidText);

    createElementList();
    stage.addChild(elementList);

    Bitmap zeroLine = Bitmap(BitmapData(1280, 2, Color.Black))
    ..x = 0
    ..y = 256;
    stage.addChild(zeroLine);

    TextField zeroText = TextField('0', valueFormat)
      ..mouseEnabled = false
      ..background = true
      ..backgroundColor = Color.White
      ..autoSize = TextFieldAutoSize.LEFT
      ..pivotX = 0
      ..pivotY = 9
      ..x = 30
      ..y = 256;
    stage.addChild(zeroText);
  }

  createElementList() {
    int max = int.parse((querySelector("#maxValueInput") as InputElement).value),
      min = int.parse((querySelector("#minValueInput") as InputElement).value),
      amount = int.parse((querySelector("#amountInput") as InputElement).value);
    if (max > 999999) {
      max = 999999;
    } else if (max < -999999) {
      max = -999999;
    }
    if (min > 999999) {
      min = 999999;
    } else if (min < -999999) {
      min = -999999;
    }
    num halfMax = max / 2,
      halfMin = min / 2;
    minText.text = '$min';
    maxText.text = '$max';
    minMidText.text = '$halfMin';
    maxMidText.text = '$halfMax';
    if (amount > 1024) {
      amount = 1024;
    } else if (amount < 0) {
      amount = 0;
    }
    elementList.newElementList(max, min, amount);
  }

  randomizeButtonPressed() {
    createElementList();
  }

  sortButtonPressed() {
    elementList.bubbleSort();
  }
}
