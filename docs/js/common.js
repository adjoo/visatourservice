$(document).ready(function () {

    $(function () {
        $("input[name=phone]").mask("+7 (999) 999-99-99");
    });


    let popupLinkClassSelector = '.popup'
    let popupWindowClass = 'mfp_popup_window'

    $(popupLinkClassSelector).magnificPopup({
        type: 'inline',

        fixedContentPos: true,
        fixedBgPos: true,
        mainClass: popupWindowClass,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 600,
        zoom: {
            enabled: true,
            duration: 600
        },
    });


    /*  $.magnificPopup.open({
          items:  {src: "#popup_callback"},
          type: "inline",
          mainClass: popupWindowClass,
          closeBtnInside: true,
          midClick: true,
          removalDelay: 600,
          zoom: {
              enabled: true,
              duration: 600
          },
          callbacks:{
              afterClose: function() {
                  $.magnificPopup.open({
                      items:  {src: "#popup_message"},
                      type: "inline",
                      mainClass: popupWindowClass,
                      closeBtnInside: true,
                      midClick: true,
                      removalDelay: 600,
                      zoom: {
                          enabled: true,
                          duration: 600
                      },
                  })
              },
          },

      });*/

    //jcarousel инициализация*************************************
    const CAROUSELITEM = "#carousel_n1 .carousel_list_wrapper";
    const CAROUSELBUTTONPREV = "#carousel_n1 .carousel__button.prev";
    const CAROUSELBUTTONNEXT= "#carousel_n1 .carousel__button.next";


    $(CAROUSELITEM).jcarousel({
        wrap: 'circular'
    });
    $(CAROUSELBUTTONPREV).click(function () {
        $(CAROUSELITEM).jcarousel('scroll', '-=1');
    });
    $(CAROUSELBUTTONNEXT).click(function () {
        $(CAROUSELITEM).jcarousel('scroll', '+=1');
    });
    $(CAROUSELITEM).swipe(
        function(direction) {
            switch (direction) {
                case 'left':
                    $(CAROUSELITEM).jcarousel('scroll', '+=1');
                    break;
                case 'right':
                    $(CAROUSELITEM).jcarousel('scroll', '-=1');
                    break;
            }
        },
        {
            preventDefault: false,
            mouse: false,
            pen: true,
            distance: 50
        }
    );


    $('body').on('click','#show_more_spec', function() {
        $("#hidden_spec_section").slideToggle(300);
    })
})

