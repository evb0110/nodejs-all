const addNote = (title, body) => {
  console.log(`Adding note with title` +
              ` "${title}" and body "${body}"`);
};

const listNotes = () => {
  console.log(`Listing all the notes`);
};

const delNote = (title) => {
  console.log(`Deleting note with title "${title}"`);
}

const showNote = (title) => {
  console.log(`Showing note with title "${title}"`)
}

module.exports = {
  addNote,
  listNotes,
  delNote,
  showNote,
};
