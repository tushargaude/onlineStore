module.exports.cartExists = async (searchKey, models) => {
    if (Object.keys(searchKey).length > 0) {
      console.log(searchKey)
      const cart = await models.cart.findOne({
        where: searchKey
      });
      return cart ? cart : false;
    }
  };