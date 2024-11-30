const express = require("express");
const router = express.Router();

const passanger = require("../models/passanger");


router.get("/", (req, res) => {
    res.render("passanger-details.pug")
});

router.post("/", async (req, res) => {
    try {
        const newPassanger = passanger(req.body)
        await newPassanger.save()
        res.redirect("/")
    } catch (error) {
        res.status(400).send("unable to get a passanger details", error)
    }
})

module.exports = router;