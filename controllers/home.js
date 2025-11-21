exports.home = (req, res) => {
   return res.render('home');
}

exports.game1 = (req, res) => {
   return res.render('games/whackamole'); 
}

exports.game2 = (req, res) => {
   return res.render('games/tictactoe'); 
}

exports.game3 = (req, res) => {
   return res.render('games/rock'); 
}

exports.game4 = (req, res) => {
   return res.render('games/subwey'); 
}

