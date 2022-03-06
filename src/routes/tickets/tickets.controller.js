const { getPagination } = require('../../services/query');
const { getAllTicketsByUser } = require('../../models/tickets.model');

async function httpGetTicketsByUser(req, res) {
  const id = Number(req.params.id);
  const { skip, limit } = getPagination(req.params);
  const { items, totalItems } = await getAllTicketsByUser(id, skip, limit);

  if (limit != 0) {
    numPages = Math.ceil(totalItems / limit);
  } else {
    numPages = 0;
  }

  return res.status(200).json({
    data: items,
    totalItems,
    numPages,
  });
}

module.exports = {
  httpGetTicketsByUser,
};
