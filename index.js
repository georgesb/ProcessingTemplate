void setup() {
	size(600, 600);
  background(255);
  drawGrid();
}

// Write your code inside the draw() function
void draw() {


}



void drawGrid() {

    strokeWeight(0.1);
		fill(0);
      for (int x = -width; x < width; x += 50) {
        line(x, -height, x, height);
        text(x, x + 1, 12);
      }
      for (int y = -height; y < height; y += 50) {
        line(-width, y, width, y);
        text(y, 1, y + 12);
      }
  }





