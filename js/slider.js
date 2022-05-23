$(document).ready(function(){
	$('.slider').slick({
		loop: true,
        arrows: true,
		dots: false,
		slidesToShow:3,
		autoplay: true,
		speed: 2000,
		autoplaySpeed:800,
        pauseOnFocus: true,
        pauseOnHover: true,
        centerMode:true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    centerMode:false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode:false
                }
            }
        ]
	});
});
