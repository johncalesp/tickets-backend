const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  img: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  province: {
    type: String,
  },
});
/**
 id
firstName
lastName
img
email
password
isAdmin
phone
address
city
province
 */

module.exports = mongoose.model('Users', usersSchema);
