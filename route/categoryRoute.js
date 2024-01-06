const categoryRoute = require('express').Router()
const { readAll, readSingle, create, update, deleteCategory } = require('../controller/categoryController')
const auth = require('../middleware/auth')
const adminAuth = require('../middleware/adminMiddleware')

// read 
categoryRoute.get(`/all`, auth, readAll) // to read all category
categoryRoute.get(`/single/:id`, auth, readSingle) // to read single category

categoryRoute.post(`/add`, auth, adminAuth, create) // create new category

categoryRoute.patch(`/update/:id`,auth, adminAuth,  update) // update existing category

categoryRoute.delete(`/delete/:id`,auth, adminAuth,  deleteCategory) // remove existing category

module.exports = categoryRoute