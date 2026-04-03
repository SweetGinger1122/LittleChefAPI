const shop_item = require('../json/shop_item.json')

// --------------------------------------------------------------------
function onRequestShopItem(resp)
{
    resp.write( JSON.stringify(shop_item) )
}
// --------------------------------------------------------------------

module.exports = {
    onRequestShopItem
}