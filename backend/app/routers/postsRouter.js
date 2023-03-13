const router = require('express').Router();

const Validation = require('../validations/postValidations')
const PostsController = require("../controllers/postController");
const Controller = new PostsController()


/**
 * GET all post of users
 */

router.route('/posts').get(Controller.get)

/**
 * GET post by userId
 */

router.route('/posts/users/:userId').get(Validation.get(), Controller.getId)

/**
 * POST create post
 */

router.route('/posts').post(Validation.data(), Controller.add)
/**
 * DESTROY post
 */

router.route('/posts/:id').delete(Controller.delete)

/**
 * PUT post
 */

router.route('/posts/:id').put(Controller.update)

module.exports = router