// final draft
$(document).ready(function() {
  function run(interval, frames) {
    var int = 1;
    
    function func() {
        document.body.id = "b"+int;
        int++;
        if(int === frames) { int = 1; }
    }
    
    var swap = window.setInterval(func, interval);
}

run(1, 2); //milliseconds, frames

}); // end doc ready function