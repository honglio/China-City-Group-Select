$('#dropDownChoice_Main').change(function(){
    
    //Determine what class the selected option is    
    var type = $('option:selected', this).attr('value');

    //enable the second select box
    $('#optionholder_sub').removeAttr('disabled');
    $('#dropDownChoice_Sub option').each(function(){
        //Go through each option and determine if it's the same type as the selected option. If yes, add it to a div that will hold options being used
        if( $(this).attr('class') === type )
        {
            $('#optionholder_sub').append( $(this) );
        }
    });

    //Also loop through the div holding the unused options and see if there are any in there that we need
    $('#optionholder_sub option').each(function(){
        if( $(this).attr('class') !== type )
        {
            $('#dropDownChoice_Sub').append( $(this) );
        }
    })

    // update 2nd sub options
    $('#optionholder_sub').trigger('change');

});

$('#optionholder_sub').change(function(){
    
    // Determine what class the selected option is    
    var type = $('option:selected', this).attr('value');

    //enable the third select box
    $('#optionholder_2ndSub').removeAttr('disabled');
    $('#dropDownChoice_2ndSub option').each(function(){
        //Go through each option and determine if it's the same type as the selected option. If yes, add it to a div that will hold options being used
        if( $(this).attr('class') === type )
        {
            $('#optionholder_2ndSub').append( $(this) );
        }
    });

    //Also loop through the div holding the unused options and see if there are any in there that we need
    $('#optionholder_2ndSub option').each(function(){
        if( $(this).attr('class') !== type )
        {
            $('#dropDownChoice_2ndSub').append( $(this) );
        }
    })

    // update current selected text
    $('#optionholder_2ndSub').trigger('change');
});

$('#optionholder_2ndSub').change(function () {
    $('#current').text($('#dropDownChoice_Main option:selected').val() + $('#optionholder_sub option:selected').val() + $('#optionholder_2ndSub option:selected').val());
})