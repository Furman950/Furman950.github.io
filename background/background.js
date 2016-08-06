var width, length, colorPicker, input;
$(document).ready(function() {
    $("#button").on("click", function() {
        width = $(window).width() - 50;
        length = $(window).height() - 50;
        $(this).css({
            left: (Math.random() * width) + "px",
            top: (Math.random() * length) + "px",
        });
        colorPicker = Math.floor((Math.random() * 5) + 1);

        if (colorPicker == 1) {
            $("body").css("background-color", "#0033FF");
        }
        else if (colorPicker == 2) {
            $("body").css("background-color", "#FFFF00");
        }
        else if (colorPicker == 3) {
            $("body").css("background-color", "#FF0033");
        }
        else if (colorPicker == 4) {
            $("body").css("background-color", "#99FF00")
        }
        else if (colorPicker == 5) {
            $("body").css("background-color", "#CC00FF");
        }
    });
});
