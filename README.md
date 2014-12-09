# Throttle Scroll
Replacement for the javascript scroll event listener that prevents the scroll callback function from stacking and causing poor performance. Features an option to debounce the scroll, or trigger the callback function a specified time after the last scroll event.

## Inspiration
[Leaner, Meaner, Faster Animations with requestAnimationFrame](http://www.html5rocks.com/en/tutorials/speed/animations/)

## Default Throttle Usage
Throttle the scroll event and prevent the callback from triggering if it is currently running.

Old:

```javascript
window.addEventListener('scroll', customFunc, false);
```

New:

```javascript
throttle.scroll( customFunc );
```

## Debounce Usage
Debounce the scroll event and only trigger the callback 250ms after the last scroll event.

```javascript
throttle.scroll( customFunc, 250 );
```

The `throttle` object also contains a property for the number of pixels the document has scrolled vertically.

```javascript
function customFunc() {
	if ( throttle.scrollY > 400) {
		// do stuff
	}
}
```
## Beyond
Underscore.js has awesome [throttle](http://underscorejs.org/#throttle) and [debounce](http://underscorejs.org/#debounce) functions.