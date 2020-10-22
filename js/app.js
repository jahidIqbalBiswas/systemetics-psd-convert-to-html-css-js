// slider code
$(document).ready(function() {
    $('.slider').bxSlider();
});
$(document).ready(function() {
    $('.mainMenu').meanmenu({
        meanMenuOpen: "<span></span><span></span><span></span>",
        meanMenuClose: "X",
        meanMenuContainer: '#mblMenu',
        meanScreenWidth: 693,
        meanExpand: "^",
        meanRevealPosition: "left",
        meanMenuCloseSize: "22px"
    });
});