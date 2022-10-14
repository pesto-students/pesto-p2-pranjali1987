function Room(props) {
    const { isLightON, dispatch } = props;

    function switchON(lightstatus) {
        return {
            type: "TOGGLE",
            isLightON: lightstatus,

        }
    };

    const flipLight = () => {
        dispatch(switchON(isLightON));
    };

    const lighted = isLightON ? "lite" : "dark";

return (
      <>
        <div className={`room ${lighted}`}>the room is {lighted}</div>
        <div><button className="ON" onClick={flipLight}>flip</button></div>
        

        </>       
         )
}

        export default Room