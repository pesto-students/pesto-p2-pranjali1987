function createStack(){
  let items = []
  return {
      push(item) {
          items.push(item);
      },
      pop() {
          return items.pop();
      }
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());// => 5
console.log(stack.items);// => undefined


//Encapsulation means makeing the property of object private.
//It will only access when method is used to get or modify the properties of object.
//So when 'items' is move from return function to inside the createStack function
// it means return function remember items from lexical scope.