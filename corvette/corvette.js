$(document).ready(function() {
    var red = $('#redCorvette');
    var blue = $('#blueCorvette');
    var grey = $('#greyCorvette');
    var width = $(window).width();
    grey.on('click', function() {
        grey.animate({
            "marginLeft": '' + (width + 50)
        }, 1500, function(){this.remove()});
        
        red.animate({
            'marginLeft': '' + (width - width - width - width)
        }, 1500, function() {
            blue.animate({
                'marginTop': '' + 1000
            }, 1500, function() {
                this.remove()
                blue.animate({
                    'marginTop': '500px'
                }, 1);
            });
        });

    })
});