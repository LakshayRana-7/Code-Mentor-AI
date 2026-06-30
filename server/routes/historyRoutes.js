const router=require("express").Router();
const c=require("../controllers/historyController");

router.get("/",c.getReviews);
router.delete("/:id",c.deleteReview);

module.exports=router;
