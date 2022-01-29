var purchases = [
  {
    name: "banana",
    count: 1,
    isBought: false,
    price: 1.1,
    sum: 1.1,
  },
  {
    name: "berry",
    count: 3,
    isBought: true,
    price: 3.0,
    sum: 9.0,
  },
  {
    name: "apple",
    count: 5,
    isBought: false,
    price: 2.7,
    sum: 13.5,
  },
];

function purchasePrefix(purchase) {
  if (purchase.isBought) {
    return " (куплено) ";
  }
  return " (некуплено) ";
}

function printArray(array, to) {
  var list = document.getElementById(to);
  array.forEach((element) => {
    list.innerHTML += "<li>" + element.name + purchasePrefix(element) + "</li>";
  });
}

function orderedPrint(array) {
  array.sort(function (a, b) {
    if (a.isBought == true && b.isBought == false) {
      return 1;
    }

    if (a.isBought == false && b.isBought == true) {
      return -1;
    }
    return 0;
  });
  printArray(array, "list");
}

orderedPrint(purchases);

// 2-я часть ---------------------------------

function byProduct(array, name) {
  var index = array.findIndex(function (element) {
    return element.name == name;
  });
  console.log(index);
  if (index == -1) {
    console.log("продукт с именем " + name + " не найден");
    return;
  }
  if (array[index].isBought) {
    console.log("продукт с именем " + name + " уже куплен");
  } else {
    array[index].isBought = true;
    console.log("продукт с именем " + name + " успешно куплен");
  }
}
byProduct(purchases, "banana");

printArray(purchases, "list2");

// 3-я часть------------------

const filteredProducts = purchases.filter((element) => !element.isBought);
printArray(filteredProducts, "list3");
