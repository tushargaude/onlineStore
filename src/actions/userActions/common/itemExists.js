
module.exports.itemExists = async (searchKey, models) => {
    if (Object.keys(searchKey).length > 0) {
      console.log(searchKey)
      const item = await models.items.findOne({
        where: searchKey
      });
      return item ? item : false;
    }
};
  