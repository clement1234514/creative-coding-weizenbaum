let t = 0;

// Hover-Event
let hoverCenter = false;

// Zitat Animation
let quoteAlpha = 0;
let quoteSize = 22;
let quoteY = 0;

// Partikel für Blütenblatt-Effekt
let particles = [];

let quoteLines = [
  "A computer will do what you tell it to do,",
  "but that may be much different",
  "from what you had in mind.",
  "—",
  "Joseph Weizenbaum"
];

function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("canvas-container");
  textFont("Helvetica");
  textAlign(CENTER, CENTER);

  // Partikel erzeugen
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: random(width),
      y: random(height),
      size: random(2, 5),
      alpha: 0,
      drift: random(0.5, 1.5),
      direction: random([-1, 1])
    });
  }
}

function draw() {
  background(0);

  // Hover-Bereich (Mitte des Canvas)
  hoverCenter = mouseX > 200 && mouseX < 600;

  // -------------------------------------
  // PARTIKEL-ANIMATION (Blütenblätter)
  // -------------------------------------
  for (let p of particles) {
    if (hoverCenter) {
      p.alpha = lerp(p.alpha, 255, 0.05);
      p.y += p.drift * 0.4;
      p.x += p.direction * 0.2;
    } else {
      p.alpha = lerp(p.alpha, 0, 0.05);
      p.y -= p.drift * 0.4;
      p.x -= p.direction * 0.2;
    }

    fill(255, p.alpha * 0.4);
    noStroke();
    circle(p.x, p.y, p.size);
  }

  // -------------------------------------
  // Wenn Hover aktiv → Blöcke ausblenden
  // -------------------------------------
  if (!hoverCenter) {

    // TITEL
    fill(0, 255, 120);
    textSize(20);
    text("HUMAN THINKING", 150, 40);
    text("STARTING POINT", 400, 40);
    text("MACHINE INTERPRETATION", 650, 40);

    // STARTING POINT (statisch, keine Animation)
    fill(200);
    textSize(12);
    text(
      "A human imagines an organic, flowing shape.\n" +
      "The machine tries to interpret this idea —\n" +
      "but only through rigid, pixel-based logic.",
      400, 250
    );

    // HUMAN THINKING (organisch)
    push();
    translate(150, height / 2 + 60);
    noFill();
    stroke(0, 255, 120);
    strokeWeight(3);

    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.1) {
      let r = 70 
              + sin(a * 4 + t * 0.08) * 22 
              + noise(a * 3, t * 0.03) * 35;
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();

    // MACHINE INTERPRETATION (glitchy)
    let cell = 12;
    for (let x = 0; x < 15; x++) {
      for (let y = 0; y < 15; y++) {
        let px = 580 + x * cell;
        let py = 120 + y * cell;

        let d = dist(px, py, 150, height / 2 + 20);
        let glitch = noise(x * 0.4, y * 0.4, t * 0.05) * 80;
        let threshold = 15 + glitch;

        if (abs(d - 70) < threshold) {
          fill(0, 255, 120);
        } else {
          fill(40);
        }

        let offsetX = floor(sin(t * 0.1 + x) * 2);
        let offsetY = floor(cos(t * 0.1 + y) * 2);

        noStroke();
        rect(px + offsetX, py + offsetY, cell - 2, cell - 2);
      }
    }
  }

  // -------------------------------------
  // ZITAT (Blütenblatt-Transition)
  // -------------------------------------
  if (hoverCenter) {
    quoteAlpha += 8;
    quoteSize = lerp(quoteSize, 34, 0.1);
    quoteY = lerp(quoteY, height / 2 - 60, 0.1);
  } else {
    quoteAlpha -= 8;
    quoteSize = lerp(quoteSize, 20, 0.1);
    quoteY = lerp(quoteY, height - 120, 0.1);
  }

  quoteAlpha = constrain(quoteAlpha, 0, 255);

  fill(255, quoteAlpha);
  textSize(quoteSize);

  for (let i = 0; i < quoteLines.length; i++) {
    text(
      quoteLines[i],
      width / 2,
      quoteY + i * (quoteSize + 4)
    );
  }

  t += 1;
}