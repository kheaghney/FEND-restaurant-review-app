let staticCacheName = 'restaurant-static-v1';

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(staticCacheName).then(function (cache) {
			return cache.addAll([
				'./',
				'./index.html',
				'./restaurant.html',
				'./css/styles.css',
				'./data/restaurants.json',
				'./js/dbhelper.js',
				'./js/main.js',
				'./js/restaurant_info.js',
				'./js/serviceWorker.js',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg',
				'./img/10.jpg'
				]);
			/* body... */
		})

		);
	/* body... */
});
self.addEventListener('activate',function (event) {
	/* body... */
	event.waitUntil(
		caches.keys()
		.then(function (cacheNames) {
			/* body... */
			return Promise.all(
				cacheNames.filter(function (cacheName) {
					/* body... */
					return cacheName.startsWith('restaurant-') &&
						cacheName != staticCacheName;
				}).map(function (cacheName) {
					/* body... */
					return caches.delete(cacheName);
				})
				);
		})
		);
})
self.addEventListener('fetch',function (event) {
	event.respondWith(
		caches.match(event.request)
		.then(function (response) {
			/* body... */
			return response || fetch(event.request); 
		})
		);
	/* body... */
});


if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service_worker.js', {scope: './'})
    .then (function(registration) {
      //Registration worked
      console.log('Service worker registration succeeded:', registration);
    })
    .catch (function(error) {
          //Registration failed
          console.log('Registration failed with ' + error);
    });
  }
  


