const fib=(n)=>({
  [Symbol.iterator]:()=>{
  let i=0,oldvalue=1;
  let newvalue=0;
  return{
      next:()=>{
  if(i++<=n)
  {
      [oldvalue,newvalue]=[newvalue,(oldvalue+newvalue)];
      //oldvalue=newvalue;
      //newvalue=oldvalue+newvalue;
  return{value:oldvalue ,done:false}
  }
  else
  return{done:true}
      }}}});
      console.log([...fib(6)])