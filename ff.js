// $('.page-scroll a').bind('click', function(event) {
//     var $anchor = $(this);
//     $('html, body').stop().animate({
//         scrollTop: ($($anchor.attr('href')).offset().top - 50)
//     }, 1250, 'easeInOutExpo');
//     event.preventDefault();
// });

// $(document).ready(function(){
//     $('a[href^="#"]').on('click', function(e){
//         e.preventDefault();

//         var target = this.hash;
//         var $target = $(target);

//         $('html, body').animate({
//             'scrollTop':$target.offset().top
//         }, 1000, 'swing');
//     });
// });