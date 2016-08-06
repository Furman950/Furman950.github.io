var input, width;
$(document).ready(function() {
    $("form").keypress(function(e) {
        if(e.which == 13) {
            e.preventDefault();
            width = $(".movingName").width();
            input = $(".name").val();
            $(this).addClass("hidden");
            $(".movingName").append("<p>" + input + "</p>");
            
            setInterval (function () {
                $(".movingName").animate({"marginLeft": "" + (width+50)}, 3500, function(){
                    $(this).css('font-size', '200px');
                });
                $(".movingName").animate({"marginLeft": "-700px"}, 1);
                $(".movingName").animate({"marginLeft": "" + (width/2)-100}, 3500);
            }, 1000);
        }
    });
});
