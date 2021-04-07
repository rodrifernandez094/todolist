const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const itemsSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

itemsSchema.plugin(mongoosePaginate);

const Item = new mongoose.model("Item", itemsSchema);

module.exports = Item;
