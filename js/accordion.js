$(function() {

    // アコーディオン
    $('.qaa-list-item').click(function() {
      var $answer = $(this).find('.answer');
      if($answer.hasClass('open')) { 
        $answer.removeClass('open');
        $answer.slideUp();
        $(this).children('span').text('+');
        
      } else {
        $answer.addClass('open'); 
        $answer.slideDown();
        $(this).children('span').text('-');
        
      }
    });
});