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

  swap(int a, int b) {
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

  bubbleSort() {
    print('Bubble sort -------------------');
    for (int i = 0; i < values.length - 1; i++) {
      for (int j = 0; j < values.length - i - 1; j++) {
        if (values[j] > values[j + 1]) {
          num a = values[j], b = values[j + 1];
          print('$a is larger than $b');
          swap(j, j + 1);
        }
      }
    }
  }
}
