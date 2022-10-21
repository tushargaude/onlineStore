const { createUser } = require('./createUser');
const { deleteUser } = require('./deleteUser');
const { updateUser } = require('./updateUser');
const { getUsers } = require('./getUsers');

module.exports.userAction = {
    createUser,
    updateUser,
    deleteUser,
    getUsers
}