const pullTestData = JSON.parse(localStorage.getItem("TestimonialData"))
const selectID = document.getElementById("inject")
    
for (let i = 0; i < pullTestData.length; i++){
  const currentObj = pullTestData[i]
  if(i === 0 || i === 2) {
    selectID.innerHTML += `
    <article class="productIMG first">  
      <p>${currentObj.Img1}</p>
    </article>  
    <article class="product uno">
      <h3>${currentObj.Customer}</h3>
      <h5>${currentObj.Product}</h5>
      <p>${currentObj.Testimonial}</p>
    </article>
    `
  }else {
    selectID.innerHTML +=`
    <article class="product second">
    <h3>${currentObj.Customer}</h3>
    <h5>${currentObj.Product}</h5>
    <p>${currentObj.Testimonial}</p>
    </article>
    <article class="productIMG set">  
      <p>${currentObj.Img1}</p>
    </article>  
    `
  }
}    


 












