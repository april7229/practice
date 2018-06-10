const express = require( 'express' );
const cors = require( 'cors' );
const actions = require( './data/helpers/actionModel' );
const project = require( './data/helpers/projectModel' );
const port = 5000;
const server = express();
server.use( express.json() );
server.use( cors() );
// server.get( '/', ( req, res ) =>
// {
//     res.send( 'hello from server' );

// } )
const getOurActions = ( req, res ) =>
{
    res.json( req.body.actions );
    //     actions
    //         .get()
    //         .then( actions =>
    //         {
    //             if ( actions.length === 0 )
    //             {
    //                 sendUserError( 404, "post could not be found", res );

    //             } else
    //             {
    //                 res.status( 200 ).json(  actions  )
    //             }
    //         } )
    //         .catch( err =>
    //         {
    //             sendUserError( 500, "action information could not be retrieved", res );
    //             return;
    //         } );

}
const upperCaseActions = ( req, res, next ) =>
{
    actions
        .get()
        .then( actions =>
        {
            actions.forEach( description =>
            {
                let upperCased = description.description.toUpperCase();
                description.description = upperCased;
                // console.log( description.description );
            } );
            console.log( 'action body', actions );
            req.body.actions = actions;
            next();
        } )
        .catch( error =>
        {
            req.body.actions = error;
            next();
        } )
}


server.get( '/api/actions', upperCaseActions, getOurActions );


// const logger = ( req, res, next ) =>
// {
//     console.log( 'Request Route Path:', req.route.path, '\n --------------------------' );
//     next();
// }


// server.route( '/' )
//     .get( logger, ( req, res ) =>
//     {
//         res.send( { hello: 'Hello World' } )
//     } )
//     .post( logger, uppercase, ( req, res ) =>
//     {
//         res.send( req.body )
//     } )
//     .delete( logger, ( req, res ) =>
//     {
//         res.send( { hello: 'Delete Happened' } )
//     } )
//     .put( logger, uppercase, ( req, res ) =>
//     {
//         res.send( req.body )
//     } )
server.listen( port, () =>
{
    ( `server running...${ port }` )
} )
