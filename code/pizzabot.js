/* DOM element references */

const pizzaMessage = document.getElementById("pizza-message");

/* Variables */

const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

/********************************** function declarations *******************************/

const validatePizzaOrder = (order, pizzaPrice) => {
  let orderQuantity = undefined;
  let pizzaPhrase = undefined;
  let i = 0;

  do {
    if (i === 0) {
      orderQuantity = prompt(`How many of ${orderName} do you want?`);
    } else {
      orderQuantity = prompt(
        `You order zero pizzas. That doesn't work! How many of ${orderName} do you want?`
      );
    }
    i++;
  } while (orderQuantity < 1);

  if (orderQuantity > 1) {
    pizzaPhrase = "pizzas";
  } else {
    pizzaPhrase = "pizza";
  }

  pizzaMessage.innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(
    orderQuantity,
    pizzaPrice
  )}kr. The ${pizzaPhrase} will be ready in  ${cookingTime(
    orderQuantity
  )} minutes.`;

  console.log(pizzaMessage);

  // alert(
  //   `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(
  //     orderQuantity,
  //     pizzaPrice
  //   )}kr. The pizzas will take ${cookingTime(orderQuantity)} minutes.`
  // );
};

const checkOrderName = orderName => {
  switch (orderName) {
    case vegetarian:
      validatePizzaOrder(orderName, pizzaPrice);
      // console.log("vegetarian");
      break;
    case hawaiian:
      validatePizzaOrder(orderName, pizzaPrice);
      // console.log("hawaiian");
      break;
    case pepperoni:
      validatePizzaOrder(orderName, pizzaPrice);
      // console.log("pepperoni");
      break;
    default:
      alert(`Sorry, we don´t have that pizza on our menu.`);
  }
};

const cookingTime = orderQuantity => {
  let cookingTime = 0;

  if (orderQuantity < 3) {
    cookingTime = 10;
  } else if (orderQuantity < 6) {
    cookingTime = 15;
  } else {
    cookingTime = 20;
  }
  return cookingTime;
};

const totalCost = (pizzaPrice, orderQuantity) => {
  return pizzaPrice * orderQuantity;
};

/********************************** main program  *******************************/

console.log(vegetarian, hawaiian, pepperoni, pizzaPrice);

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`
);

let orderName = prompt(`Enter the name of the pizza you want to order today:`);
checkOrderName(orderName);
