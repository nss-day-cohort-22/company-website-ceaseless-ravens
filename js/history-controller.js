// Grab history database from local stoage and place into object called historyEntries
const historyEntries = JSON.parse(localStorage.getItem("historyDatabase"))

// create placeholder for selected dom element
const historyElement = document.getElementsByClassName("history")[0]

//iterate over every key in the history database and push into the DOM
for (let i = 0; i < historyEntries.length; i++) {
    var element = historyEntries[i];
    
    historyElement.innerHTML += `
    <article class="history-entry">
        <section class="content">
        <h2>${element.date}</h2>
        <p>${element.title}</p>
        <p>${element.content}</p>
        </section>
        <section class="image">
        <img src="${element.image}" width="100px" alt="Nostrum Logo">
        </section>
    </article>`
}
    
