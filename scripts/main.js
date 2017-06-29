var $root = $('html, body');

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(document).ready(function(){
	$('#downArrow').click(function(){
		$root.animate({
 			scrollTop: findPos(document.getElementById("projectsWrapper"))
		}, 300);
	});
});

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}
