const test1 = {
  "Customer":"Kolden",
  "Product":"Invisibility Elixir",
  "Testimonial":"I used to be visible, and now I'm not. Works great when arguments are coming to a head. Thanks to this magical cure all.  I just take a sip of <strong><em>Nostrum's invisibility elixir.</em></strong> Now you see me, and now.. You dont! Do the dishes? pffft, not today sir.",
  "Img1":`<img src='../images/Kolden_before.jpg' onMouseover="src='../images/Kolden_after.jpg'" onMouseout="src='../images/Kolden_before.jpg'">`
}

const test2 = {
  "Customer":"Ray",
  "Product":"Zac Elixir",
  "Testimonial":"Ever since I watched High School Musical, I wished I could dance like Zac. Then Baywatch came out this year and that settled it, I had to be him. 17 again, here I come. Truly amazed by the effectiveness of this product . I don't understand the negative reviews, I've used this product 3 times and never came out looking like any other Zach! ",
  "Img1":`<img src='../images/Ray - Before Zach-1.jpg' onMouseover="src='../images/Zac.jpg'" onMouseout="src='../images/Ray - Before Zach-1.jpg'">`
}

const test3 = {
  "Customer":"Greg",
  "Product":"Wizard Elixir",
  "Testimonial":"I've always wanted to be able to do whatever I wanted to do . To have endless power to manipulate the world and people in it. It's been my biggest wish for years that my neighbor Mark would mow his side of the lawn for once in his life. Now, he mows both our lawns. And does my laundry on Sundays. Thanks <strong><em>Nostrum</em></strong>! Now that I have this<strong><em> Wizard Elixir</em></strong>, Mark will always do my bidding.  ",
  "Img1":`<img src='../images/Greg_Before_Wizard.jpg' onMouseover="src='../images/Greg_After_Wizard.jpg'" onMouseout="src='../images/Greg_Before_Wizard.jpg'">`
}

const test4 = {
  "Customer":"Jenna",
  "Product":"Transfiguration Elixir",
  "Testimonial":"I love my cats. When I'm at work, I think about my cats. When I'm out with friends I think about my cats. Hell, when I'm with my cats I think about what other cats I could have. Now thanks to this excellent product, I don't have to work, go out with friends, or do anything else. Because I'm a cat. Thanks Nostrum, 5 stars to this incredible <strong><em>Transfiguration Elixir</em></strong>. It has changed my life",
  "Img1":`<img src='https://img.thedailybeast.com/image/upload/d_placeholder_euli9k/dpr_2.0/c_limit,w_585/fl_lossy,q_auto/v1/articles/2013/01/04/kansas-s-new-cat-law-and-the-craziest-crazy-cat-lady-stories/cat-ladies-fallon-tease_s0gkcp' onMouseover="src='../images/Nostrum-logo.png'" onMouseout="src='https://img.thedailybeast.com/image/upload/d_placeholder_euli9k/dpr_2.0/c_limit,w_585/fl_lossy,q_auto/v1/articles/2013/01/04/kansas-s-new-cat-law-and-the-craziest-crazy-cat-lady-stories/cat-ladies-fallon-tease_s0gkcp'">`
}

const testHolder = []

testHolder.push(test1)
testHolder.push(test2)
testHolder.push(test3)
testHolder.push(test4)

const testHolderString = JSON.stringify(testHolder)
localStorage.setItem("TestimonialData", testHolderString)
