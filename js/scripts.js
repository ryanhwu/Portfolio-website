$(document).on('click'), 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body') .animate({
        scrolltop: $($.attr(this, 'href')).offset().top
      }, 1000);

    });

      });
