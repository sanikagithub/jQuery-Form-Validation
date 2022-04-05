$(document).ready(function() {
    $('#submit').click(function(event){
        console.log('button clicked!');
        let formname = $("#name");        //accept form input name into variable
        let formemail = $("#email");      //accept form input email into variable 
        let formphone = $("#phone");      //accept form input phone into variable

        $('#message').html('') //Message is initialized
        $('#message').removeClass('warning'); //remove warning class

        let required_fields = new Array(formname, formemail, formphone);
        let error_flag = false;
        for(let i=0; i<required_fields.length; i++)
        {
            required_fields[i].prev().removeClass('warning');
            if(required_fields[i].val() == "") //if any of the required fields is blank 
            {                
                let message = $('#message');  //show message
                message.html('Please Fill Out Required Fields')
                message.addClass('warning'); 
                required_fields[i].prev().addClass('warning');      
                error_flag = true;           
            }            
        }
        if(!error_flag)
        {
            $('#form').fadeOut();
            let h2Tag = $( "#pre-form" ).find( "h2" );
            h2Tag.html('Thanks for your feedback!');
        }
    });
})