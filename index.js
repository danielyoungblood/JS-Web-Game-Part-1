//define a function called new image with three parameters called:
//imageFile-name of actual file containing image
//left-number of pixels to the left where image is placed in the browser appearing on the screen
//bottom-number of pixels to the bottom where image is placed in the browser appearing on the screen
//
//parameters contain values passed to the function when called
//example: newImage("assets/green-character.gif","100px","100px")

function newImage(imageFile, leftPOS, bottomPOS) {
  let image = document.createElement("img");
  image.src = imageFile;
  image.style.position = "fixed";
  image.style.left = leftPOS;
  image.style.bottom = bottomPOS;
  document.body.append(image);
}

//invoke newImage / call newImage function, passing the appropriate arguments.
//arguments being passed are:
//"assets/green-character.gif"(imageFile parameter)
//"100px"(leftPOS parameter)
//"100px"(bottomPOS parameter)
newImage("assets/green-character.gif", "100px", "100px");

//invoke newImage / call newImage function, passing the appropriate arguments.
//arguments being passed are:
//"assets/pine-tree.png"(imageFile parameter)
//"450px"(leftPOS parameter)
//"200px"(bottomPOS parameter)
newImage("assets/pine-tree.png", "450px", "200px");
