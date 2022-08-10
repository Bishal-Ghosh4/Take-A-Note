console.log("hello world");
showNotes();
// If any user click the addnote button then the text will add to the local storage as key is "notes"
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function () {
    //console.log("event is fired");
    let addtext = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");
    console.log(notes);
    if (notes == null) {
        notesArr = [];

    }
    else {
        notesArr = JSON.parse(notes);
    }
    //console.log(notesArr);
    notesArr.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    addtext.value = "";
    showNotes();
})


function showNotes() {
    let notes = localStorage.getItem("notes");
    // console.log(notes);
    if (notes == null) {
        notesArr = [];

    }
    else {
        notesArr = JSON.parse(notes);
    }
    let html = "";
    notesArr.forEach(function (element, index) {
        html += `
        <div class="content">
        <h3 style="font-weight: 900;"><i>NOTE- ${index + 1}</i> </h3>
        <svg class="bi bi-star " id="${index}" onclick="likeStar(this.id)" ondblclick="dislikeStar(this.id) " viewBox="0 0 16 16" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg" style="
            color: red;
            background-color: rebeccapurple;
            border-start-end-radius: 50px;
            border-start-start-radius: 50px;
            border-end-start-radius: 36px;
            border-end-end-radius: 44px;
        ">
            <path fill-rule="evenodd"
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 00-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 00-.163-.505L1.71 6.745l4.052-.576a.525.525 0 00.393-.288l1.847-3.658 1.846 3.658a.525.525 0 00.393.288l4.052.575-2.906 2.77a.564.564 0 00-.163.506l.694 3.957-3.686-1.894a.503.503 0 00-.461 0z"
                clip-rule="evenodd" />
        </svg>
        <div  class="boundDiv" id="${index}" style="border: 3px solid #cccc10; margin: 15px; border-radius: 25px;">
        <p id="para">${element}</p>
        </div>
        <br>
        <button class="btn" id="${index}" onclick="deleteNotes(this.id)" >Delete Note</button>
        
        <br>
        <br>
    </div> `
    });
    let notesElement = document.getElementById('notesSection');
    //console.log(notesElement);
    if (notesArr.length != 0) {
        notesElement.innerHTML = html;
    }
    else {
        notesElement.style.textAlign = "center";
        notesElement.innerHTML = `<b>There is no Notes in the database </b>`;

    }
}



// Function of delete Button

function deleteNotes(index) {
    console.log(index);
    let notes = localStorage.getItem("notes");
    console.log(notes);
    // if (notes == null) {
    //     notesArr = [];

    // }
    // else {
    //     notesArr = JSON.parse(notes);
    // }
    notesArr.splice(index, 1);
    //console.log(notesArr)
    localStorage.setItem("notes", JSON.stringify(notesArr));
    showNotes();
}



// Search any Notes from a search box

let searchtext = document.getElementById("searchtext");
searchtext.addEventListener("input", function () {

    let boxtext = searchtext.value;
    console.log('input event fired', boxtext);
    let content = document.getElementsByClassName("content");

    Array.from(content).forEach(function (element) {
        let contentText = element.getElementsByTagName("p")[0].innerHTML;
        console.log(contentText);
        if (boxtext.includes(contentText)) {
            element.style.display = "inline-block";
        }
        else {
            element.style.display = "none";
        }
    })

})




// Star Mark As A Important

function likeStar(index) {
    console.log(index);

    let star = document.getElementsByClassName('bi bi-star');
    console.log(star);
    let arrValue = notesArr[index];
    console.log(arrValue);
    console.log(notesArr.indexOf(arrValue));

    console.log(index == notesArr.indexOf(arrValue));

    let boundDiv = document.getElementsByClassName('boundDiv');
    console.log(boundDiv);

    Array.from(star).forEach(function (element, index) {
        //console.log(element);

        if (index == notesArr.indexOf(arrValue)) {

            element.style.color = "red";
        }

    });

    Array.from(boundDiv).forEach(function (element, index) {
        if (index == notesArr.indexOf(arrValue)) {

            element.style.border = "3px solid red";
        }
    })
    console.log(notesArr);
}



// Star Mark As A unImportant


function dislikeStar(index) {
    // console.log(index);

    let star = document.getElementsByClassName('bi bi-star');
    console.log(star);
    let arrValue = notesArr[index];
    console.log(arrValue);
    console.log(notesArr.indexOf(arrValue));

    console.log(index == notesArr.indexOf(arrValue));

    let boundDiv = document.getElementsByClassName('boundDiv');
    console.log(boundDiv);

    Array.from(star).forEach(function (element, index) {
        //console.log(element);


        if (index == notesArr.indexOf(arrValue)) {

            element.style.color = "black";


        }

    });

    Array.from(boundDiv).forEach(function (element, index) {
        if (index == notesArr.indexOf(arrValue)) {

            element.style.border = "3px solid #cccc10";
        }
    })
}







// function important(index){
//     console.log("you just clicked the star");
//     console.log(index);
// }