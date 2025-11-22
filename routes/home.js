const express = require('express');
const { home, game1,game2,game3,game4} = require('../controllers/home');

 const router = express.Router();

     router
       .route('/')
       .get(home)

        router
           .route('/whackamole')
           .get(game1)
         
             router
           .route('/tictactoe')
           .get(game2)
       
             router
           .route('/rock')
           .get(game3)
       
             router
           .route('/subway')
           .get(game4)

 module.exports = router;