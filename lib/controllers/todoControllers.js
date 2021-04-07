const { getDate } = require("../modules/utilities.js");
const Item = require("../models/listModels");

// getTodos, paginateTodos, createTodos, deleteTodos

const getTodos = (req, res) => {
  let day = getDate();
  Item.paginate({}, { limit: 4, page: 1 }, (err, result) => {
    res.render("list", {
      listTitle: day,
      visibleItems: result.docs,
      currentPage: result.page,
      totalPages: result.totalPages,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
    });
  });
};

const paginateTodos = (req, res) => {
  let day = getDate();
  let pageNumber = req.params.page;
  Item.paginate({}, { limit: 4, page: pageNumber }, (err, result) => {
    res.render("list", {
      listTitle: day,
      visibleItems: result.docs,
      currentPage: result.page,
      totalPages: result.totalPages,
      hasPrevPage: result.hasPrevPage,
      hasNextPage: result.hasNextPage,
    });
  });
};

const createTodos = async (req, res) => {
  const itemName = req.body.newItem;
  const item = new Item({
    content: itemName,
  });

  if (itemName) {
    await item.save();
  }

  res.redirect("/");
};

const deleteTodos = (req, res) => {
  const id = req.params.id;
  Item.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getTodos,
  paginateTodos,
  createTodos,
  deleteTodos,
};
