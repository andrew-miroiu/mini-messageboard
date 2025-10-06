const express = require('express');
const indexRouter = express.Router();

const messages = [
    {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
})

indexRouter.get("/new", (req, res) => {
    res.render("form", { title: "New Message" });
});

indexRouter.post("/new", (req, res) => {
    const text = req.body.messageText;
    const user = req.body.messageUser;
    messages.push({ 
        text: text, 
        user: user, 
        added: new Date() 
    });
    res.redirect("/");
});

indexRouter.get("/message/:id", (req, res) => {
  const id = req.params.id;
  const message = messages[id];
  if (!message) {
    return res.status(404).send("Mesajul nu a fost găsit");
  }
  res.render("message", { title: "Detalii mesaj", message });
});


module.exports = indexRouter;