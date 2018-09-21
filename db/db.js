const mongoose = require('mongoose');
const URI = 'mongodb://localhost/climbinglife';
var db = mongoose.connection;

//===== DBSchema =======
// var Schema = mongoose.Schema;

const cardSchema = mongoose.Schema({
  listId: { type: Number , unique: true },
  listTitle: String,
  createdAt: { type: Date , default: Date.now },
  items: { type : Array , "default" : [] },
})

const submitURL = (url) => {
  console.log('submitted' + url)

}

//======================

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
