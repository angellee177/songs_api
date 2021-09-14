const express       = require('express')
    , routes        = express.Router()
    , albumRoutes   = require('./albums/album.route')
    , genreRoutes   = require('./genres/genre.route')
    , songRoutes    = require('./songs/songs.route')
    , artistRoutes  = require('./artists/artist.route')
    , userRoutes    = require('./users/users.route');

routes.use('/albums' ,  albumRoutes);
routes.use('/genres' ,  genreRoutes);
routes.use('/songs'  ,   songRoutes);
routes.use('/artists', artistRoutes);
routes.use('/users'  ,   userRoutes);

module.exports = routes;
