const tickets = require('./tickets.mongo');

async function getAllTicketsByUser(id, skip, limit) {
  const totalItems = await tickets.find({ userId: id }).count();
  const items = await tickets
    .find({ userId: id })
    .sort({ id: 1 })
    .skip(skip)
    .limit(limit);
  return { items, totalItems };
}

module.exports = {
  getAllTicketsByUser,
};
