const express = require("express"),
      router  = express.Router();


router.get("/", (req, res) => {
  res.render("root.hbs");
});


// EXPORT ==========
module.exports = router;
