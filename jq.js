$(document).ready(function() {
    $.ajax({
	type: "GET",
	url: "doc.txt",
	cache: false
    }).done(function( text ) {
	$("#text").html(text);
    });
});
