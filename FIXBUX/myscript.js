/////////////////////////////////////////////////////////////////////////////

//THIS WEB EXTENSION IS TAILORED TOWARDS REMOVING HTML ELEMENTS THAT COERCE
//USERS INTO GIVING UP MORE DATA ABOUT THEMSELVES THAN NECESSARY. CURRENTLY
//THIS EXTENSION REMOVES PROGRESS BARS FROM JOB SITES LIKE LINKEDIN AND 
//HANDSHAKE. IT CAN BE MODIFIED TO INCLUDE ADDITIONAL ELEMENTS, WHETHER TEXTUAL,
//GRAPHICAL, OR OTHER.

////////////////////////////////////////////////////////////////////////////


//Remove LinkedIn Progress Bar
$(document).ready(function(){
    $('div').remove('.pv-pcm-progress');
});

//Remove Handshake Progress Bar
$(document).ready(function() {
    $("[class^='style__progress']").remove()
});



//$("document").xpathEvaluate('/html/body/div[2]/div[2]/div/div/div[2]/div[2]/div[1]/div[3]/div').remove()