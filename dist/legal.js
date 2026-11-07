// Legal pages share the app's offline assets and update lifecycle.
if ('serviceWorker' in navigator) {
  const wasControlled = Boolean(navigator.serviceWorker.controller);
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (wasControlled) location.reload();
  }, { once: true });
  navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).catch(() => {});
}
