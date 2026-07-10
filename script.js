(function () {

    var website = document.getElementById('website');

    var CANVAS_WIDTH = 1440;
    var CANVAS_HEIGHT = 1024;

    function fitToScreen() {

        var scaleX = window.innerWidth / CANVAS_WIDTH;
        var scaleY = window.innerHeight / CANVAS_HEIGHT;

        // Берём меньший коэффициент, чтобы канвас целиком
        // вписался в экран по обеим осям (letterbox по краям,
        // если пропорции окна отличаются от 1440:1024)
        var scale = Math.min(scaleX, scaleY);

        website.style.transform = 'scale(' + scale + ')';

    }

    window.addEventListener('resize', fitToScreen);
    window.addEventListener('orientationchange', fitToScreen);

    fitToScreen();

})();
