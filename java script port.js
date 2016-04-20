function chooseNouns(nounEvent){
    var imgClicked = nounEvent.target;

    var tableClicked = $(imgClicked).parents('table');

    var clonedImg= document.createElement("img");

    clonedImg.setAttribute("src", imgClicked.getAttribute("src"));

    clonedImg.setAttribute("data-translation",

    imgClicked.getAttribute("data-translation"))

    clonedImg.setAttribute("class", "emoji storyEmoji");

    clickedNounEl.textContent = "";

    clickedNounEl.appendChild(clonedImg);

    clearTable(tableClicked);
  };
