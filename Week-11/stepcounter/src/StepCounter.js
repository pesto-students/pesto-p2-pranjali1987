import './App.css';
function StepCounter(props){
const { counter, dispatch } = props;

  const handleIncrement = () => {
      dispatch(increase(counter));
  }
  function increase(){
      return {
          type: "INCREMENT",
          counter: counter
      };
  }
  const handleDecrement = () => {
      dispatch(decrease(counter));
  }
  function decrease(){
      return {
          type: "RESET",
          counter: counter
      };
  }

  return (
      <>
          <div className="display"><h2>you have walked {counter} steps today!</h2></div>
          <button className="INC" onClick={handleIncrement}>Increment</button>
          <button className="RES" onClick={handleDecrement}>Reset</button>
      </>
  )
}

export default StepCounter;