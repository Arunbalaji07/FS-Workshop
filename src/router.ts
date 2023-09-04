import { Router } from 'express'
import {getAllTodos, getOneTodo, postTodo, deleteTodo, updateTodo} from "./handlers/todo";
// import {handleInputError} from "./modules/middleware";
import { body } from "express-validator";

const router = Router()

router.get('/todos', getAllTodos)
router.get('/todos/:id', getOneTodo)
router.post('/todos', body('item').isString(), postTodo)
router.put('/todos/:id',
    body('item').isString(),
    body('status').isString().optional(),
    updateTodo)
router.delete('/todos/:id', deleteTodo)
export default router
