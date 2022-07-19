function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();

increment();

increment();

increment();
log(); // Count is 0

//Message become same and count is 0 
//because increment only update the value of count thats why message remain 
//with its original value and count change to 0