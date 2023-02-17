const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({ ok: true, msg: "Esto esta funcionando bien" });
});

module.exports = router;