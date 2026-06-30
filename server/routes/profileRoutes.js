const router=require('express').Router();
const c=require('../controllers/profileController');

router.get('/',c.getProfile);
router.put('/',c.updateProfile);

module.exports=router;
