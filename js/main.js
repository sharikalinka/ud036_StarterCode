$(document).ready(function(){

    // Page loader
    $('.movie-tile').hide().first().show("fast", function showNext() {
        $(this).next("div").show("fast", showNext);
    });

    // Fade-in footer with delay
    $('footer').delay(1800).fadeIn(600);

});

// Initiate movie when modal selected
$(document).on('click', '.movie-img', function (event) {
    var trailerYouTubeId = $(this).attr('data-trailer-youtube-id')
    var sourceUrl = 'http://www.youtube.com/embed/' + trailerYouTubeId + '?autoplay=1&html5=1';
    $("#trailer-video-container").empty().append($("<iframe></iframe>", {
        'id': 'trailer-video',
        'type': 'text-html',
        'src': sourceUrl,
        'frameborder': 0
    }));
});

// Pause movie when modal closed
$(document).on('click', '.hanging-close, .modal-backdrop, .modal', function (event) {
    // Remove the src so the player gets removed, as this is the only
    // dependable way to ensure video stops playing in IE
    $("#trailer-video-container").empty();
});