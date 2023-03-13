const router = require('express').Router();


const FriendsController = require("../controllers/friendsController");
const Controller = new FriendsController()
/**
 * GET all friends
 */

router.route('/my-friends/:userId').get(Controller.get)

/**
 * GET friend by id
 */

router.route('/friends/:id/').get(Controller.getId)

/**
 * POST create user
 */

router.route('/friends').post(Controller.add)

/**
 * DELETE friend by id
 */

router.route('/friends/:id').delete(Controller.delete)
/**
 * DELETE friend by id
 */

router.route('/delete/friends').post(Controller.deleteFriend)
module.exports = router