// history entry objects for database
const entry1 = {
    "date":"3100 B.C.", 
    "title":"Founded",
    "content":"In the early 3000's Nostrum was born, just a stones throw from Wiltshire, England, 2 miles west of Amesbury and 8 miles north of Salisbury.",
    "image":"/images/history-entry1.jpg"
}
const entry2 = {
    "date":"1841", 
    "title":"First Storefront",
    "content":"In the mid 1800's Nostrum begain to provide it's products to local stores in and around the london area",
    "image":"/images/history-entry2.jpg"
}
const entry3 = {
    "date":"1974", 
    "title":"Nostrum goes Multinational",
    "content":"Securing a deal with Drug's R Us, Nostrum expanded it's reach to the rest of Europe",
    "image":"/images/history-entry3.jpg"
};
const entry4 = {
    "date":"1999", 
    "title":"Online Storefront",
    "content":"Riding the wave of the digital age, Nostrum created it's first online storefront, pushing the limits of Cyberspace and innerspace",
    "image":"/images/history-entry4.jpg"
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






