const express = require("express");
const fs = require("fs");
const notesRouter = require('express').Router();
const path = require('path');
const uniqid = require('uniqid');
let bodyParser = require('body-parser');

const dataPath = path.join(__dirname, "../db/db.json");

let jsonParser = bodyParser.json();

const saveNotes = (data) => {
    const stringData = JSON.stringify(data);
    fs.writeFileSync(dataPath, stringData);
};

const getNotes = () => {
    const jsonData = fs.readFileSync(dataPath);
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
    res.send("Note has not been added!");
});

notesRouter.delete = () => {};

module.exports = notesRouter;