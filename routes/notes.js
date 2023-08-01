const express = require("express");
const notesRouter = require('express').Router();
const fs = require("fs");
const path = require('path');
const uniqid = require('uniqid');
let bodyParser = require('body-parser');

let jsonParser = bodyParser.json();

const saveNotes = (data) => {
    const stringData = JSON.stringify(data);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), stringData);
};

const getNotes = () => {
    const jsonData = fs.readFileSync(path.join(__dirname, "../db/db.json"));
    return JSON.parse(jsonData);
};

notesRouter.get = ('/api/notes', (req, res) => {
    const notes = getNotes();
    res.send(notes);
});

notesRouter.post = ('/api/notes', jsonParser, (req, res) => {
    let savedNotes = getNotes();
    req.body.id = uniqid();
    savedNotes.push(req.body);
    saveNotes(savedNotes);
    res.send("Note has been added!");
});

module.exports = notesRouter;