let staticCacheName = 'restaurant-static-v1';
var CACHE_NAME = 'my-site-cache-v1';
let urlsToCache = [
  

'./',
				'./index.html',
				'./restaurant.html',
				'./css/styles.css',
				'./data/restaurants.json',
				'./js/dbhelper.js',
				'./js/main.js',
				'./js/restaurant_info.js',
				'./js/swreg.js',
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
];

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(staticCacheName).then(function (cache) {
				return cache.addAll(urlsToCache);
		})
		/* body... */
	);

	
/* body... */
});
				
		

  

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
					console.log ('Found ', event.request, ' in cache');
          return response;
				}
				else {
					console.log('Could not find ' , event.request, 'in cache, FETCHING!');
					return fetch(event.request);
				}
			})
	 );
});




self.addEventListener('activate',function (event) {
	/* body... */
	var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];
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
					if (cacheWhitelist.indexOf(cacheName) === -1) {
					return caches.delete(cacheName);
				}
			})
		);
	})
);
});