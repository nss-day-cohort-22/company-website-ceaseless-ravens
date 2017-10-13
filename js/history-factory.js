// history entry objects for database
const entry1 = {
    "date":"test date 1", 
    "title":"test title 1",
    "content":"test content 1",
    "image":"/images/history-placeholder.png"
}
const entry2 = {
    "date":"test date 2", 
    "title":"test title 2",
    "content":"test content 2",
    "image":"/images/history-placeholder.png"
}
const entry3 = {
    "date":"test date 3", 
    "title":"test title 3",
    "content":"test content 3",
    "image":"/images/history-placeholder.png"
};
const entry4 = {
    "date":"test date 4", 
    "title":"test title 4",
    "content":"test content 4",
    "image":"/images/history-placeholder.png"
}

const historyDatabase = [] // Create history object database
// push all entries into history database
historyDatabase.push(entry1) 
historyDatabase.push(entry2)
historyDatabase.push(entry3)
historyDatabase.push(entry4)

// place historyDatabase insto local storage
// place homeInventory into local storage
const historyDatabaseString = JSON.stringify(historyDatabase)
localStorage.setItem("historyDatabase", historyDatabaseString);






