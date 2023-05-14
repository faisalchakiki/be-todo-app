const { nanoid } = require("nanoid")
const dataTodos = require('../data/index.js');

const getTodos = (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Success Get Todo",
      results: dataTodos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

const getDetailTodos = (req, res) => {
  try {
    const id = req.param('id');
    const index = dataTodos.findIndex((n) => n.id === id)

    return res.status(200).json({
      success: true,
      message: "Success Get Todo",
      results: dataTodos[index],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

const createTodo = async (req, res) => {
  try {
    const { category, description } = req.body;

    const id = nanoid()
    const newTodo = {
      "id": id,
      "category": category,
      "description": description,
      "createdAt": new Date().toISOString().slice(0, 10),
      "isCompleted": false
    };
    dataTodos.push(newTodo)

    const isSuccess = dataTodos.filter((todo) => todo.id === id).length > 0;
    if (isSuccess) {
      return res.status(200).json({
        success: true,
        message: "Success Create Todo",
        results: newTodo,
      });
    } else {
      throw new Error('Failed Create Todo');
    }

  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateTodo = (req, res) => {
  try {
    const id = req.param('id');
    const { category, description, isCompleted } = req.body;
    const index = dataTodos.findIndex((n) => n.id === id)
    if (index !== -1) {
      dataTodos[index] = {
        ...dataTodos[index],
        description,
        category,
        isCompleted: Boolean(isCompleted)
      };
      return res.status(200).json({
        success: true,
        message: "Success Update Todo",
        results: dataTodos[index],
      });
    } else {
      throw new Error('Failed Update Todo');
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

const deleteTodo = (req, res) => {
  try {
    const id = req.param('id');
    const index = dataTodos.findIndex((n) => n.id === id)
    if (index !== -1) {
      dataTodos.splice(index, 1)
      return res.status(200).json({
        success: true,
        message: "Success Delete Todo",
      });
    } else {
      throw new Error('Failed Delete Todo');
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}


module.exports = { createTodo, getTodos, updateTodo, deleteTodo, getDetailTodos }