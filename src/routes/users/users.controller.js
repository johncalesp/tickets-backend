const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const {
  findUser,
  updateUser,
  findAllUsers,
} = require('../../models/users.model');

require('dotenv').config();

async function httpLogin(req, res) {
  const { email, password } = req.body;
  user = await findUser({ email });
  if (!user) {
    return res.status(401).json({
      error: 'Invalid username',
    });
  }
  const bytes = CryptoJS.AES.decrypt(password, process.env.SECRET_KEY);
  const decipherPassword = bytes.toString(CryptoJS.enc.Utf8);

  if (user.password !== decipherPassword) {
    return res.status(401).json({
      error: 'Invalid password',
    });
  }
  const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY, {
    expiresIn: '24h',
  });

  return res.status(200).json({
    data: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      img: user.img,
      email: user.email,
      isAdmin: user.isAdmin,
      phone: user.phone,
      address: user.address,
      city: user.city,
      province: user.province,
      accessToken: token,
    },
  });
}

async function httpUpdateUser(req, res) {
  const user = req.body;
  const existUser = await findUser({ id: user.id });
  if (!existUser) {
    return res.status(404).json({ error: 'User not found' });
  }
  const updated = await updateUser(user);
  if (!updated) {
    return res.status(404).json({ error: 'Could not update the user' });
  }
  res.status(200).json({ message: 'ok' });
}

async function httpGetAllUsers(req, res) {
  const allUsers = await findAllUsers();
  return res.status(200).json({ data: allUsers });
}

module.exports = {
  httpLogin,
  httpUpdateUser,
  httpGetAllUsers,
};
