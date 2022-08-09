$(window).on("load", () => {
    $(".count").html("We served " + Math.floor(Math.random() * 100000) + " customers already!");    // Example number
});

$(window).scroll(() => { 
    document.documentElement.scrollTop ?
        $(".navbar").css({
            "background-color": "var(--bac)",
            "box-shadow": "0 -25px 20px 50px var(--bac)"
        })
    :
        $(".navbar").css({
            "background-color": "#0000",
            "box-shadow": "none"
        });
});

$(window).click((e) => {
    if (!e.target.matches(".navmenu *") || e.target.matches(".navmenu a")) {
        $(".navbutton, .navmenu").removeClass("active");
    }
});

$('a[href*="#"]').click(function (e) {
    e.preventDefault();
    $('html').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 0);
});

function toggleMenu() {
    $(".navbutton, .navmenu").toggleClass("active");
}