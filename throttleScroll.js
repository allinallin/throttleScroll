var throttle = throttle || {};

throttle.scroll = function( callback, debounceDelay ) {
    if (!callback || typeof( callback ) != 'function') {
        return;
    }

    var isTicking;
    var scrollTimer;

    throttle.scrollY = window.scrollY;

    function onScroll() {
        throttle.scrollY = window.scrollY;
        getTick();
    }

    function getTick() {
        if (debounceDelay > 0) {

            if (scrollTimer != null)
                clearTimeout( scrollTimer );

            scrollTimer = setTimeout( function() {
                isTicking = true;
                window.requestAnimationFrame( update );

                scrollTimer = null;
            }, debounceDelay);

        } else if (!isTicking) {

            isTicking = true;
            window.requestAnimationFrame( update );

        }
    }

    function update() {
        if (callback && typeof(callback) == 'function')
            callback.apply( this );

        isTicking = false;
    }

    window.addEventListener('scroll', onScroll, false);
};