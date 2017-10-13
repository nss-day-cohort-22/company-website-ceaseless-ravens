const ob1 = {
    "Type": "animal",
    "Question":"Have you ever wanted to be the king of the jungle?",
    "Answer":"Try our Transfiguration Elixir!",
    "IMG":`<img src="http://pngimg.com/uploads/lion/lion_PNG23268.png" alt="Lion">`,
    
  }
  
  const ob2 = {
    "Type":"Wizard",
    "Question":"Have you ever wanted to be powerful like Albus Dumbledore?",
    "Answer":"Try our Wizard Elixir!",
    "IMG":`<img src="https://vignette4.wikia.nocookie.net/leonhartimvu/images/c/cb/Albus_Dumbledore_Gambon.png/revision/latest?cb=20141113011834" alt="Albus Dumbledore">`,
    
  }
  
  const ob3 = {
    "Type": "Invisible",
    "Question":"Have you ever just wanted to disappear?",
    "Answer":"Try our Invisibility Elixir!",
    "IMG":`<img src="http://www.federalobserver.com/wp-content/uploads/2009/12/invisible-man-sculpture.jpg" alt="invisibile">`,
    
  }
  
  
  const ob4 = {
    "Type": "Zac",
    "Question":"Is your husband's metabolism slowing down?",
    "Answer":"Try our Zac Elixir!",
    "IMG":`<img src="/images/zac.png" alt="Zac Efron">`,
    
  }
  
  const objHold = []
  
  objHold.push(ob1)
  objHold.push(ob2)
  objHold.push(ob3)
  objHold.push(ob4)
  
  const homeDataPage = JSON.stringify(objHold)
   localStorage.setItem("HomeData",homeDataPage)
  
  
  
  
  
  
  
  
  const pullData = JSON.parse(localStorage.getItem("HomeData"))  
  
  
  const selectID = document.getElementById("inject")
  
  for (let i = 0; i < pullData.length; i++){
    let currentType = pullData[i]
    selectID.innerHTML += `
    <div class="gallery">
      <h2>${currentType.Question}</h2>
      <p>${currentType.Answer}</p>
      ${currentType.IMG}
    </div>
    
   `
  }