const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");
}
// schema
const fruitSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,"Name is mandatory"]
  },
  rating: {
    type:Number,
    min:[1,"Rating can't be 0"],
    max:[10,"Rating can't be more than 10"]
  },
  review: String,
});
async function getfruits() {
  const Items = await fruit.find({});
  return Items;
}
// model
const fruit = mongoose.model("fruit", fruitSchema);
// single document
// const Peach = new fruit({
//   name: "Peach",
//   rating: 5,
// });

// const Banana = new fruit({
//   name: "Banana",
//   rating: 10,
//   review: "Rich source for Vitamin D",
// });
// const Orange = new fruit({
//   name: "Orange",
//   rating: 7,
//   review: "Sour, good for juice",
// });
// const Papaya = new fruit({
//   name: "Papaya",
//   rating: 8,
//   review: "Increases blood cells",
// });
// saving items
// fruit.insertMany([Banana,Orange,Papaya])
// Peach.save();
// fruit.updateOne({name:"Peach"},{review:"OK i guess"});
fruit.deleteOne({name:"Peach"});
getfruits().then(function (founditems) {
   mongoose.connection.close()
  for (var i = 0; i < founditems.length; i++) {
    console.log(founditems[i].name);
  }
  
});
// people schema,model,document
const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});
const people = mongoose.model("people", peopleSchema);
const john = new people({ name: "John", age: 37 });
// john.save();
