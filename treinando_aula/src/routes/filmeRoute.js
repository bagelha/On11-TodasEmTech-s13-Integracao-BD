const express = require("express")
const router = express.Router()

const controller = require("../controllers/filmeController")

// post
router.post("/", controller.create)

// get
router.get("/", controller.getAll)
router.get("/:id", controller.getById)

// patch
router.patch("/:id", controller.update)

// delete
router.delete("/:id", controller.deleteFilme)




module.exports = router 