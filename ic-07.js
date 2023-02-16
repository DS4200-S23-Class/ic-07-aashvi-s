const FRAME_HEIGHT = 500;
const FRAME_WIDTH = 1000; 
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const FRAME1 = //store svg element as a variable   
d3.select("#vis1") //analogous to document.selectElementByXX()
                    // the "#" indicates an id, similar to .css
  .append("svg") //adds a child svg to selected element
    .attr("height", FRAME_HEIGHT) //set attributes of the added 
                        // element. Note how methods are strung 
                        // together with the . notation, and how
                        // indenting is used to to organize code  
    .attr("width", FRAME_WIDTH)
    .attr("class", "frame"); // Note how we still end with a ; 



    FRAME1.append("circle") //append a circle svg to FRAME
        .attr("cx", 550 ) //need to set the same attributes that             // would if we defined the circle in html
        .attr("cy", 0)
        .attr("r", 30)
        .attr("class", "firstCircle");


        const data = [55000, 48000, 27000, 66000, 90000]

