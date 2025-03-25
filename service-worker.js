const CACHE_NAME = "bike-service-cache-v2"; // Update cache name
const urlsToCache = [
  "/",
  "/index.html",
  "/GetStarted.html",
  "/signup_login.html",
  "/SignUp.html",
  "/SignIn.html",
  "/BikeInfo.html",
  "/Home.html",
  "/Bookings.html",
  "/activities.html",
  "/Images/logo.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        await cache.addAll(urlsToCache);
        console.log("Files cached successfully!");
      } catch (error) {
        console.error("Failed to cache files:", error);
      }
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
