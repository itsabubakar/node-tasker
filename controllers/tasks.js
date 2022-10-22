const getAllTasks = (req, res) => {
    res.send('Sending all items from the file')
}

const createTask = (req, res) => {
    res.json(req.body)
    console.log(req.body);
}

const getTask = (req, res) => {
    res.send({ id: req.params.id })
}

const updateTask = (req, res) => {
    res.send('update Task')
}

const deleteTask = (req, res) => {
    res.send('delete Task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}