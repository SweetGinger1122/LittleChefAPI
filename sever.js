const http = require('http')
const api_companion = require('./api/companion')
const api_item = require('./api/item')
const api_rarity = require('./api/rarity')
// ---------------------------------------------------------------
const PORT = process.env.PORT || 9888
// ---------------------------------------------------------------
function onClientRequest(req,resp)
{
    const pathname = req.url.split('?')[0]

    resp.writeHead(200, { 'Content-Type' : 'application/json' })

    if(req.method === 'GET' && pathname === '/api/item/list')
    {
        api_item.onRequestItem(resp)
    }

    else if(req.method === 'GET' && pathname === '/api/companion/list')
    {
        api_companion.onRequestCompanion(resp)
    }
    else if(req.method === 'GET' && pathname === '/api/rarity/list')
    {
        api_rarity.onRequestRarity(resp)
    }
    
    else
    {
        resp.write(JSON.stringify( { message: 'Hello!' } ))
    }

    resp.end()
}
// ---------------------------------------------------------------
const server = http.createServer( onClientRequest )
server.listen(PORT)
console.log('running on '+PORT)