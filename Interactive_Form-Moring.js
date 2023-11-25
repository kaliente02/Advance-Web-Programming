function submit(){
    $('#tabOneSubmit').click(function(){
        $('.required').each(function(){
            var element=$(this);
            var elementVal=$(this).val();
            var errorMsgId=element.attr('data-errorMsg');
            if(elementVal==''){
                $('.'+errorMsgId).show();
                element.addClass('errorField');
            }
            else{
                $('.'+errorMsgId).hide();
                element.removeClass('errorField');
                }
        });

    });
}

<script type="text/javascript" >
    window.alert("Form submitted successfully");

    alert("Form submitted successfully");
</script>