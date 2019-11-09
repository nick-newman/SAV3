import 'dart:async';
import 'dart:html';
import 'dart:math';
import 'package:stagexl/stagexl.dart';

class ElementList extends DisplayObjectContainer {
  List<int> values = [];
  List<Bitmap> bitmaps = [];
  Random random = Random();

  ElementList();

  newElementList(int max, int min, int amount) {
    removeChildren();
    values.clear();
    bitmaps.clear();

    for (int i = 0; i < amount; i++) {
      // Value calculations
      int value;
      if (min == max || max == min) {
        value = max;
      } else {
        value = min + random.nextInt(max - min);
      }

      // Width and height calculations
      num width = (1024 / amount) * 0.5, height;
      if (value.abs() < 1) {
        height = 1;
      } else if (value.abs() > max || (value.abs() < max && value.isNegative)) {
        height = (value.abs() / min.abs()) * 256;
      } else {
        height = (value.abs() / max) * 256;
      }

      var element = BitmapData(width, height, Color.SpringGreen);
      var elementBitmap = Bitmap(element);

      // Bitmap position calculations
      elementBitmap.pivotX = elementBitmap.width / 2;
      if (value >= 0) {
        elementBitmap.pivotY = elementBitmap.height;
      } else {
        elementBitmap.pivotY = -2;
      }
      elementBitmap.x = 128 + (((i + 1) / (amount + 1)) * 1024);
      elementBitmap.y = 256;

      addChild(elementBitmap);
      values.add(value);
      bitmaps.add(elementBitmap);
    }
  }

  changeColor(int a, int b, num color) {
    num aX = bitmaps[a].x,  bX = bitmaps[b].x;
    bitmaps[a].visible = false;
    bitmaps[a] = Bitmap(BitmapData(bitmaps[a].width, bitmaps[a].height, color));
    bitmaps[a].pivotX = bitmaps[a].width / 2;
    if (values[a] >= 0) {
      bitmaps[a].pivotY = bitmaps[a].height;
    } else {
      bitmaps[a].pivotY = -2;
    }
    bitmaps[a].x = aX;
    bitmaps[a].y = 256;
    stage.addChild(bitmaps[a]);
    bitmaps[a].visible = true;

    bitmaps[b].visible = false;
    bitmaps[b] = Bitmap(BitmapData(bitmaps[b].width, bitmaps[b].height, color));
    bitmaps[b].pivotX = bitmaps[b].width / 2;
    if (values[b] >= 0) {
      bitmaps[b].pivotY = bitmaps[b].height;
    } else {
      bitmaps[b].pivotY = -2;
    }
    bitmaps[b].x = bX;
    bitmaps[b].y = 256;
    stage.addChild(bitmaps[b]);
    bitmaps[b].visible = true;
  }

  swap(int a, int b) async {
    int tempValue = values[a];
    values[a] = values[b];
    values[b] = tempValue;

    Bitmap tempBitmap = bitmaps[a];
    bitmaps[a] = bitmaps[b];
    bitmaps[b] = tempBitmap;

    num tempX = bitmaps[a].x;
    bitmaps[a].x = bitmaps[b].x;
    bitmaps[b].x = tempX;
  }

<<<<<<< HEAD
//TODO: animation speed
  bubbleSort(int duration) async {
=======
  bubbleSort() {
    print('Bubble sort -------------------');
>>>>>>> 1954f862ec91ab8d00477f4592fd58db0fdaac61
    for (int i = 0; i < values.length - 1; i++) {
      for (int j = 0; j < values.length - i - 1; j++) {
        changeColor(j, j + 1, Color.LightSkyBlue);
        await Future.delayed(Duration(milliseconds : duration));
          if (values[j] > values[j + 1]) {
            num a = values[j], b = values[j + 1];
            changeColor(j, j + 1, Color.PaleVioletRed);
            await Future.delayed(Duration(milliseconds : duration));
            print('$a is larger than $b');
            swap(j, j + 1);
          }
        await Future.delayed(Duration(milliseconds : duration));
        changeColor(j, j + 1, Color.SpringGreen);
      }
    }
  }
}
