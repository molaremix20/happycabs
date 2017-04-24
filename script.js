
$(document).ready(function(e) {

    $('form.foi-form-notify').submit(function(e) {

        e.preventDefault();

        $this = $(this);

        $.ajax({

            url: 'subscribe.php',
            type: "POST",
            data: $this.serialize(),
            dataType: 'json',
            success: function(data) {

                if(data['status']=='true')
                    $('.modal .content p').html('Great! you will be notified as soon as this site is launched. Thank you.');
                else
                    $('.modal .content p').html('Oops! Something went wrong. Please try again. Sorry.');

                $('.modal').css('display', 'flex');

            },
            error: function(error) {

                $('.modal .content p').html('Oops! Something went wrong. Please try again. Sorry.');
                $('.modal').css('display', 'flex').hide().fadeIn();

            }


        });

    });


    $('.modal').not('.modal .content').click(function(e) {

        $(this).fadeOut();

    });

});
