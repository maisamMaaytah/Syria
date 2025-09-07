
$(function() {


    $('.nav-item').hover(function() {
        $(this).find('.dropdown-menu').toggle();
    });
    

});


    




function toggleVideo() {
    var video = document.querySelector('.video-player');
    video.classList.add('show');

    video.addEventListener('click', toggleVideo);
}
    
    


        $(document).ready(function() {
            $('.fa-magnifying-glass').click(function() {
                $('.search-input').toggle(); // Toggle the visibility of the input field
            });
        });
        