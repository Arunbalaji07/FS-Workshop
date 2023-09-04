import prisma from '../db'

// Get all todos
export const getAllTodos = async (req,res) => {
    const todo = await prisma.todos.findMany({
        where: {
            item: req.params.item
        }
    })
    res.json({data: todo})
}

// Get one todos
export const getOneTodo = async (req,res) => {
    const todo = await prisma.todos.findFirst({
        where: {
            id : req.params.id
        }
    })

    res.json({data: todo})
}
// Post a todos
export const postTodo = async (req,res) => {
    const todo = await prisma.todos.create({
        data: {
            item : req.body.item
        }
    })

    res.json({data: todo})
}

// Update a todos
export const updateTodo = async (req,res) => {
    const updated = await prisma.todos.update({
        where: {
            id: req.params.id
        },
        data: {
            id : req.body.id,
            status: req.body.status
        }
    })
    res.json({data: updated})
}

// Delete a todos

export const deleteTodo = async (req,res) => {
    const deleted = await prisma.todos.delete({
        where: {
            id : req.params.id
        }
    })

    res.json({data: deleted})
}
