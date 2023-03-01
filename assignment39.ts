
function orderSandwich(...items: string[]) {
    console.log('You have ordered a sandwich with:');
    for (let i of items) {
      console.log(i);
    }
  }
  
  orderSandwich('lettuce', 'tomato', 'onion', 'mayo');
 
  orderSandwich('ham', 'cheese', 'mustard', 'pickle');

  
  orderSandwich('turkey', 'bacon', 'avocado');
