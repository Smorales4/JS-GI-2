
let massTom = 8;
let heightTom = 9;

let massJerry = 45;
let heightJerry = 10;


let bmiTom = massTom / (heightTom * heightTom) ;
let bmiJerry = massJerry / (heightJerry * heightJerry) ;

let tomBmiHigher = true;

if(bmiTom <=  bmiJerry)
{ tomBmiHigher = false;
}

console.log("Is Tom’s BMI higher than Jerry’s? " + tomBmiHigher);