class ProgressiveLoader {
  constructor(urls, callback) {
    // Assert that urls are arrays with at least one url
    if (!Array.isArray(urls) || urls.length === 0) {
      throw new Error('ProgressiveLoader: urls must be an array with at least one url');
    }

    // Assert that callback is a function
    if (typeof callback !== 'function') {
      // If null throw null error
      if (callback === null) {
        throw new Error('ProgressiveLoader: callback must not be null');
      }
      throw new Error('ProgressiveLoader: callback must be a function');
    }

    this.urls = urls;
    this.callback = callback;
  }

  async load() {
    for (let i = 0; i < this.urls.length; i++) {
      const response = await fetch(this.urls[i]);
      const blob = await response.blob();
      this.callback(URL.createObjectURL(blob), i);
    }
  }
};