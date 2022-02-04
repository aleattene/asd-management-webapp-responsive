

const express = require('express');
const router = express.Router();


// HOMEPAGE ===================================================================================================
router.get('/', (req, res) => {
    res.status(200)
        .render('home.ejs');
});
//=============================================================================================================


module.exports = router