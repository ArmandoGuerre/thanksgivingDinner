const thanksgivingMeal = {
    starter: {
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },

    entree: {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables: {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
        },
        sides: {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
        },
        calories: 450
    },

    dessert: {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },

    total_cost: 25.0,
    senior_discount: .10,
    prettyPrint: function () {
        let menuList = `Start your meal with ${this.starter.fruit}, a glass of ${this.starter.wine}. Help yourself to ${this.entree.meat} or ${this.entree.alt}, with ${this.entree.vegetables.potatoes}, ${this.entree.vegetables.greens} and ${this.entree.vegetables.salad}. Have a side! Pleanty of ${this.entree.sides.bread} and ${this.entree.sides.pasta}. Finish your meal with a sweet- ${this.dessert.ice_cream} ice-cream, ${this.dessert.cake}.
       `;

       return menuList;
    },
    totalPrice(isSenior) {
        // display the total price, given indicator isSenior = true or false

        if (isSenior) {
            // if isSenior is true, show total price after discount of 0.10
            return (this.total_cost - this.total_cost * this.senior_discount).toFixed(2);
        } else {
            return this.total_cost;
        }
    },
    totalCalories: function () {
        // Add the total calories 
        // get total calories by adding the calories of starter, entree and dessert objects
        return (this.starter.calories + this.entree.calories + this.dessert.calories);
    },
    caloriesFrom: function (indicator) {
        // get the total calories for the indicator
        // 1 is starter, 2 is entree, 3 is dessert
        return (indicator = 1 ? this.starter.calories : indicator = 2 ? this.entree.calories : indicator = 3 ? this.dessert.calories : "");
    }
};

// Get elements from HTML/DOM
let greetingTxt = document.querySelector(".greeting");
let fullMealTxt = document.querySelector(".fullMeal");
let priceTxt = document.querySelector(".priceInfo");
let calorieTxt = document.querySelector(".calorieInfo");

// Show greetings element content
greetingTxt.innerText = "Enjoy Your Thanksgiving This Year !";
// Show content on webpage of fullMeal element by calling methods of object and passing arguments
fullMealTxt.innerText = thanksgivingMeal.prettyPrint();
// Show priceEl element content
priceTxt.innerText = `Seniors get a ${thanksgivingMeal.senior_discount * 100}% discount, the total cost for your Thanksgiving meal? Adults: $${thanksgivingMeal.totalPrice(false)}, Seniors: $${thanksgivingMeal.totalPrice(true)}`;
// Show calorieEl element content
calorieTxt.innerText = `Worried about calories? Total damage is ${thanksgivingMeal.totalCalories()} (starter: ${thanksgivingMeal.caloriesFrom(1)}, entree: ${thanksgivingMeal.caloriesFrom(2)}, dessert: ${thanksgivingMeal.caloriesFrom(3)})`;