jQuery.fn.hasScrollBar = function() {
	return this.get(0).scrollHeight > this.height();
};

$('body').append('<div id="errorWrapper"></div>');

function AddAlert(title, text) {
    $('body').append('<div class="alertWrapper"><div class="alert"><div class="alertTop">' + title + '</div><div class="alertMain">' + text + '</div><div class="alertBottom"><button>OK</button></div></div></div>');
}

function AddError(text) {
    
    $('#errorWrapper').append('<div class="error"><div class="errorMain"><img src="error.png">' + text + '</div><div class="errorClose"><img src="close.png"></div></div>');
    let x = $('.error:last-child');
    setTimeout(function(){
        x.remove();
    }, 3000);
    
}

$(document).on('click', '.alertBottom button', function() {
    $(this).parent().parent().parent().remove();
});

$(document).on('click', '.errorClose', function() {
    $(this).parent().remove();
});