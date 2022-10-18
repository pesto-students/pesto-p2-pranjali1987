const mobile = {
  brandName: "Apple",
  modelName: "Iphone13",
  completeDetail: function (city, State) {
    return (
      this.brandName + " " + this.modelName + "  brought from " + city + ", " + State );
  },
};
const cellPhone = {
  brandName: "Samsung",
  modelName: "Galaxy A6",
};
var completeDetail = mobile.completeDetail.bind(cellPhone);
console.log(completeDetail( "Mumbai","Maharastra")); //Using Bind : Samsung Galaxy A6  brought from Mumbai, Maharastra


console.log(mobile.completeDetail.apply(cellPhone, ["Bengaluru", "Karnataka"])); //Using apply:Samsung Galaxy A6  brought from Bengaluru, Karnataka

console.log(mobile.completeDetail.call(cellPhone, "Bengaluru", "Karnataka")); //Using call:Samsung Galaxy A6  brought from Bengaluru, Karnataka