const express = require('express');
const cors = require( 'cors' );
const actions = require( './data/helpers/actionModel' );
const project = require( './data/helpers/projectModel' );
const port = 5000;
const server = express();
server.use( express.json() );
server.use( cors() );
server.get( '/', ( req, res ) =>
{
    res.send( 'hello from server' );

})
server.listen( port, () =>
{
    (`server running...${port}`)
})
