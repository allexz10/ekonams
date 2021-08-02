$(function () {

    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: '90px',
        speed: 1000,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1115,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    centerPadding: '0',
                }
            },
            {
                breakpoint: 775,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    centerPadding: '0',
                    dots: true,
                    centerMode: false,
                }
            },
        ]
    });


    $('.menu-btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu-btn').toggleClass('_active');
    });

    $('.menu__list-link').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu-btn').toggleClass('_active');
    });

    

        $(window).scroll(function () {
            if ($(this).scrollTop() > 4500) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });



    $(document).on('click', '.user-nav__link-in, .menu__list-link', function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body, html').animate({ scrollTop: top }, 1500);
    });      
    
    
    $('.contact__form').on('click', '#btn', function () {
       $('#textarea, .contact__form  input:not([type=button])').removeClass('req');    
           let hasErrors = false;
        $('#textarea, .contact__form input:not([type=button])').each(function () {
            if ($(this).val().trim() == '') {
                hasErrors = true;
                $(this).addClass('req');
                swal("Please fill out the form completely");
            }           
        });

        return hasErrors ? false : true; 
    });
    
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            swal("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });   
    


       wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,
            live: true        // default
        }
    )
    wow.init();

})



