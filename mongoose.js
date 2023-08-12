const mongoose = reqiore('mongoose');
mongoose.connet("mongodb://localhost:21302/{ur db name}" , {useNewUrlParse:true});

const fruitSchema = new mongoose.Schema({
    name: string,
    rating:{
        //these are called Validators (limiting rating b/w 1-10)
        type: Number,
        min: 1,
        max: 10,
    }, 
    review: String,

});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Best food"
});
fruit.save();

//for adding another fruit

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 8,
    review: "good"
});

