type MasalaChai = {
  type: "masala";
  spiceLevel: number;
};

type GingerChai = {
  type: "ginger";
  amount: number;
};

type RegularChai = {
  type: "regular";
  aroma: number;
};

type Chai = MasalaChai | GingerChai | RegularChai;

function makingChai(obj?: Chai) {
  if (!obj) {
    console.log("No chai selected");
    return;
  }

  console.log(obj);

  switch (obj.type) {
    case "ginger":
      console.log("Ginger chai, amount:", obj.amount);
      break;

    case "masala":
      console.log("Masala chai, spice level:", obj.spiceLevel);
      break;

    case "regular":
      console.log("Regular chai, aroma:", obj.aroma);
      break;
  }
}

makingChai({
  type: "regular",
  aroma: 10,
});
