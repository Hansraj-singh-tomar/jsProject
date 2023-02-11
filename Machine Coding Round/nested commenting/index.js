let commentContainer = document.getElementById("comment-container");

function createInputBox() {
  let div = document.createElement("div");
  div.setAttribute("class", "comment-details");

  div.innerHTML += `
    <input type="text" placeholder="add text here" class="input" />
    <button class="btn submit">Submit</button>`;
    
  return div;
}

function addReply(text) {
  let div = document.createElement("div");
  div.setAttribute("class", "all-comment");

  div.innerHTML += `
    <div class="card">
      <span class="text">${text}</span>
      <span id="reply" class="reply">
        Add Reply
      </span>
    </div>`;

  return div;
}

let inputBoxOpen = false;

commentContainer.addEventListener("click", function (e) {
  let replyClicked = e.target.classList.contains("reply");
  let submitClicked = e.target.classList.contains("submit");
  let closestCard = e.target.closest(".all-comment");
  // console.log(closestCard); // <div class="all-comment"> </div>
   
  if (replyClicked && !inputBoxOpen) {  // inputBoxOpen ki value false hone par hi ham condition ke andar inter kar sakte hai 
    inputBoxOpen = true;
    closestCard.appendChild(createInputBox());
    
  }

  if (submitClicked) {
    const commentDetails = e.target.closest(".comment-details");
    // console.log(commentDetails); // <div class="comment-details"> </div>
    // console.log(commentDetails.children[0]); // <input type="text" placeholder="add text here" class="input" /> 
    // console.log(commentDetails.children[0].value); // jo bhi type kar rha hu input box ke andar vo mujhe yha milega 
    if (commentDetails.children[0].value) {
      closestCard.appendChild(addReply(commentDetails.children[0].value));
      commentDetails.remove();
      inputBoxOpen = false;
    }
  }
});


{/* <div class="container">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</div> */}
// In this example, when any of the <p> elements is clicked, the event.target.closest('.container') method will return the closest ancestor element that matches the '.container' class, which is the <div> element.