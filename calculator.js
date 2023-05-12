// fyi I would not normally comment something in this manner at all. 
// just for classmates. maybe useful; maybe not. 


//when the page is finished loading in the DOM, fire off this  
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM is ready");
    // make a variable called "resultCell" so we can put something there later 
    var resultCell = document.getElementById("result");
  
    // get all the "button" cells (aka the td elements) 
    // store them all in a variable called "cells"
    // (umm.. just realized that would include the calculator's "screen" sooo...
    // umm don't click the "screen" 
    var cells = document.getElementsByTagName("td");
  
    // Q: how many "button" cells are in the table? A: cells.length
    // add an event listener to to each "button" to fire off when clicked 
    for (var i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", updateResult);
    }

    
    // create a function to update the table's "result" cell
    // also print to console whatever was inside of the cell
    function updateResult(event) {
      var clickedCell = event.target;
      var cellValue = clickedCell.textContent;
  
      // actually change the content of the result cell 
      resultCell.textContent = cellValue;
  
      // print to the console 
      console.log("Clicked button: " + cellValue);
    }
  });
