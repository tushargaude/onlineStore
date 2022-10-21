module.exports.orderExists = async (searchKey, models) => {
    if (Object.keys(searchKey).length > 0) {
      console.log(searchKey)
      const order = await models.order.findOne({
        where: searchKey
      });
      return order ? order : false;
    }
  };