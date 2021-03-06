// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
})

//click on X to delete TODO
$("ul").on("click", "span", function(event){
	//to remove the parent element (li)
$(this).parent().fadeOut(500, function(){
	$(this).remove();
});
//to stop events from triggering
event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + " </li>")
	}
})
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
})