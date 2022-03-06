const users = require('./users.mongo');

async function findUser(filter) {
  return await users.findOne(filter);
}

async function updateUser(user) {
  const { id, firstName, lastName, phone, address, city, province } = user;
  const modifyUser = await users.updateOne(
    { id },
    {
      firstName,
      lastName,
      phone,
      address,
      city,
      province,
    }
  );
  return modifyUser.modifiedCount === 1;
}

async function findAllUsers() {
  return await users.find({}, { _id: 0, password: 0 }).sort({ id: 1 });
}

module.exports = {
  findUser,
  updateUser,
  findAllUsers,
};
