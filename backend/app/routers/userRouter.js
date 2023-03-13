const router = require('express').Router();

const Validation = require("../validations/usersValidations");
const UsersController = require("../controllers/usersController");
const Controller = new UsersController()

/**
 * GET all users
 */

router.route('/users').get(Controller.get)
/**
 * POST create user
 */

router.route('/users').post(Validation.data(), Controller.add)
/**
 * LOGIN user
 */

router.route('/login').post(Controller.login)
/**
 * GET users by id
 */

router.route('/users/:id').get(Controller.getId)
/**
 * PUT update user information by id
 */

router.route('/users/:id').put(Validation.put(), Controller.update);
/**
 * GET users by email
 */

router.route('/users/:email').get(Controller.getEmail)

module.exports = router