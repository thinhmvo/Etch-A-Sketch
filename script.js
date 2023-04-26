// This function create a grid template serve as a canvas for the sketch.
function createGrid(x) {
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            // '$' refer to jQuery library. $('.container') refer to the element with class '.container' 
            $('.container').append("<div class = 'grid'> </class>");
        };
    };
    $(".grid").height = 960/x;
    $(".grid").width = 960/x;
};