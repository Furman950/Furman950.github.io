var input, width;
$(document).ready(function() {
    $("form").keypress(function(e) {
        if(e.which == 13) {
            e.preventDefault();
            width = $(".movingName").width();
            input = $(".name").val();
            $(this).addClass('hidden');
            $(".movingName").append("<p>" + input + "</p>");
            $(".movingName").animate({'marginLeft': "" + (width+50)}, 3500);
            $(".movingName").animate({'marginLeft': '-500px'}, 1);
            
            
            $(".movingName").animate({"marginLeft" : "" + width/2}, 3500);
            
        }
    });
    
    

});
