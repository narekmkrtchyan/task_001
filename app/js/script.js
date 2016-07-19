
function myFunction(){
	var x = document.getElementById("messige").value;
	if(x!="null"){
	 $( "#area" ).append( "<p>"+x+"<p>" );
	 //$("#messige").val="";
	 document.getElementById("messige").value=" ";
	}
}