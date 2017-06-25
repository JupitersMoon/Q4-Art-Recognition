
//CAMERA//
// 
// let video = document.querySelector('video');
// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');
// let localMediaStream = null;
// let errorCallback = function(e) {
//   console.log('Reeeejected!', e);
// };
//
// function snapshot() {
//   if (localMediaStream) {
//     ctx.drawImage(video, 0, 0);
//     // "image/webp" works in Chrome.
//     // Other browsers will fall back to image/png.
//     document.querySelector('img').src = canvas.toDataURL('image/webp');
//   }
// }
//
// video.addEventListener('click', snapshot, false);
//
// // Not showing vendor prefixes or code that works cross-browser.
// navigator.getUserMedia({
//   video: true
// }, function(stream) {
//   video.src = window.URL.createObjectURL(stream);
//   localMediaStream = stream;
// }, errorCallback);


$(document).ready(() => {

//AJAX//

$.ajax({
  method: 'GET',
  url:'https://www.ncdc.noaa.gov/cdo-web/api/v2/datasets',
  datatype: 'json',
  headers:{ token: 'UmpKojYLhlmRvMCWdlTdgeSVWWFxKFGu' },

  success: function(data) {
    let noaaData = data
    console.log(noaaData);
  },
  error: function() {
  }
})

})
