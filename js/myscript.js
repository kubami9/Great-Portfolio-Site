function main() {
$('#backToTopBtn').click(function(){
	$('html,body').animate({scrollTop:0}, 'slow');return false;
});
}
$(document).ready(main);
    

