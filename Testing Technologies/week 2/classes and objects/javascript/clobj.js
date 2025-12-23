
//Function to reverse a string
    const str = "John";
    const str1 = "James";

function back(str){
    
    return str.split('').reverse().join('');

  };
    console.log(back(str));
    console.log(back(str1));

 

//Function to reverse an array

function reverse(){
    
    return [arr0.reverse(), arr1.reverse()];
};

    const arr0 = [1, 2, 3, 4, 5];
    const arr1 = ["I", "like", "JavaScript"];

    console.log(arr0.reverse());
    console.log(arr1.reverse());


//Function to get most expensive

    let items = [
      {item: "irn bru", price: 3.25, stock: 50 },
      {item: "fanta", price: 3.98, stock: 45 },
      {item: "diet coke", price: 4.40, stock: 38 }, 
      {item: "7up", price: 3.99, stock: 42 }
     ];
        
    function mostExpensiveItem(arr) {
      let totalCost = 0;
      let expensiveProduct = [];
      arr.forEach((product) => {
        let cost = product.price * product.stock;
        if (cost > totalCost) {
          totalCost = cost;
          expensiveProduct = product;
        }
      });
      return expensiveProduct;
    }

    console.log(mostExpensiveItem(items));
