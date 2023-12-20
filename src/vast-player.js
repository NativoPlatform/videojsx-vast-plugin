import '!style-loader!css-loader!video.js/dist/video-js.css';
import '!style-loader!css-loader!vast-player.css';

import videojs from 'video.js';
import 'videojs-contrib-ads';
import 'vast-plugin';

// eslint-disable-next-line no-undef
window.videojs = videojs;

window.ntv_videojs = videojs;

try {
  window.top.ntv_videojs = videojs;
} catch (e) {
  // We're sandboxed!
}