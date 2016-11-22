//
//
// Australia theme for ATutor
// Mike, 2015

// DEPENDENCIES
// jquery.cookie

// side menu on mobile devices
// ----------------------------------------------------------
$('#menutoggle-on-mobile').click(function(){
	$('.page-container-sidemenu').css('right', '0px');


    // set min-height to .page-container
    var new_height = parseInt($('.page-container-sidemenu').height()) + 50;
    $('.page-container').css('min-height', new_height + 'px');

});
$('#menutoggle-off-mobile').click(function(){
	$('.page-container-sidemenu').css('right', '-400px');

    // remove min-height
    $('.page-container').css('min-height', '0');
});

// side menu on desktop devices
// ----------------------------------------------------------
$('#menutoggle-desktop').click(function(){
	
	// hide
	if ($('.page-container-sidemenu').css('display') != 'none') {
		$('.page-container-sidemenu').css('display', 'none');
		$('.page-container-page-when-sidemenu').css('width', '100%');
		$('#menutoggle-desktop-btn').removeClass('menutoggle-desktop-btn-off').addClass('menutoggle-desktop-btn-on');

		// set cookie to remember
		$.cookie('side-menu', 'none', { path: '/' });

	// show
	} else {
		// remove width: 100%
		$('.page-container-page-when-sidemenu').removeAttr('style');

		// wait width transition complete  and  show side menu
		window.setTimeout(function(){ $('.page-container-sidemenu').removeAttr('style'); }, 800);
		$('#menutoggle-desktop-btn').removeClass('menutoggle-desktop-btn-on').addClass('menutoggle-desktop-btn-off');

		// set cookie to remember
		$.cookie('side-menu', '1', { path: '/' });
	}
});

// bind all tooltips
// -------------------------------------------------------------

$(document).ready(function() {
    $('.show_tooltip').tipr();
});