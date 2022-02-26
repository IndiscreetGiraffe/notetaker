const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes } = require('./Develop/db/db.json');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.static(path.join('public')));

app.get('/api/notes', (req, res) => {
    res.json(notes);
})

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note)
    
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify({notes: notesArray }, null, 2)
    );

    return body;

}




