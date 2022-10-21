const { createItems } = require('./createItems');
const { getItems } = require('./getItems')
const { getItemsById } = require('./getItemsById')
const { deleteItems } = require('./deleteItems')

module.exports.userAction = {
    createItems,
    getItems,
    getItemsById,
    deleteItems
}