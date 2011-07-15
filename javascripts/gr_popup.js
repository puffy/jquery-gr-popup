$.fn.togglePopup = function() {
    if ($('#popup').hasClass('hidden')) {
        if ($.browser.msie) {
            $('#opaco').height($(document).height()).toggleClass('hidden')
            .click(function(){ $(this).togglePopup(); });
        }
        else {
            $('#opaco').height($(document).height()).toggleClass('hidden').fadeTo(500, 0.7)
            .click(function(){ $(this).togglePopup(); });
        }

        $('#popup').html($(this).html()).toggleClass('hidden').alignCenter();
    }
    else {
        $('#opaco').html('');
        $('#opaco').toggleClass('hidden').removeAttr('style').unbind('click');
        $('#popup').toggleClass('hidden');
    }
};

$.fn.alignCenter = function() {
    var marginLeft = - $(this).width()/2 + 'px';
    var marginTop = - $(this).height()/2 + 'px';
    return $(this).css({'margin-left':marginLeft, 'margin-top':marginTop});
};