
(function( $ ) {



$.fn.validationGeneral = function() {

    
    var generalTextType = $('[data-type="name"]').val();
    var generalTextEmail = $('[data-type="email"]').val();
     

    if(generalTextType == 0){

    	function errorMessage(){
          
        message.insertAfter($('[data-type="name"]')).css({
		display: 'block',
		color: 'red'
		}); 

      }; 
      
    } 

  //     if(generalTextType == 0 ){
          
  //    $("<span>" + "dfsfs" + "</span>").insertAfter($('[data-type="name"]')).css({
		// display: 'block',
		// color: 'red'

		// }); 
      
  //   } 


};
 
}( jQuery ));