$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        anchors: ['firstPage','secondPage','thirdPage','4thPage','5thPage','6thPage','7thPage','8thPage','9thPage','10thPage',
        '11thPage','12thPage',],
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 700,
        css3: true,
        autoScrolling: true,
        scrollOverflow: false,
        sectionsColor : ['#cbce89','#cbce89','#cbce89','#a6bf6c','#a6bf6c','#a6bf6c','#04151F','#04151F','#04151F','#04151F'],
        navigationTooltips : ['Chile water scarcity','Production growth'],
    });

    //methods

});
