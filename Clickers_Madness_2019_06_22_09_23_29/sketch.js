let coins = 0;

let cpc = 1;

let points = 0;

let bp = 25;

let pfbp = 50;

let pfu = 75;

let sell;

let upgrade;

let upgradeBag;

function setup() {

  createCanvas(400, 400);

  sell = createButton("Sell")
  sell.mousePressed(cointime);

  upgrade = createButton("Upgrade")
  upgrade.mousePressed(upgradeTime);

  upgradeBag = createButton("Upgrade Bag")
  upgradeBag.mousePressed(upgradeBagTime);

}

function draw() {

  background(220);

  textSize(50);

  text(points, 35, 75);

  text(bp, 265, 75);

  text("$", 35, 150);

  text(coins, 70, 150);

  textSize(25)

  text("Upgrade", 35, 225)

  text(pfu, 175, 225)

  text("Upgrade Bag", 35, 300)

  text(pfbp, 225, 300)

}

function mousePressed() {

  if (points < bp)
    points = points + cpc;
}

function cointime() {

  coins = coins + points;

  points = -cpc;

}

function upgradeBagTime() {

  points = points - cpc;

  if (coins >= pfbp)
    bp = bp * 2;

  if (coins >= pfbp)
    pfbp = pfbp * 2.5;

  if (coins >= pfbp)
    coins = coins - pfbp;

}

function upgradeTime() {

  points = points - cpc;

  if (coins >= pfu)
    cpc = cpc + 1;

  if (coins >= pfu)
    pfu = pfu * 2.5;
  
  if (coins >= pfu)
    coins = coins - pfu;

}