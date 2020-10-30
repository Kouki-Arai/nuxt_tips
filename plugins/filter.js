import Vue from 'vue'

// アロー関数じゃないVer
// Vue.filter('toLocaleString', function (value) {
//   if (!isNaN(value)) {
//     return Number(value).toLocaleString()
//   } else {
//     return value
//   }
// })

Vue.filter('toLocaleString', value => {
  if (!isNaN(value)) {
    return Number(value).toLocaleString()
  } else {
    return value
  }
})

Vue.filter('comma', value => {
  var s = String(value).split('.');
  var ret = String(s[0]).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
  if (s.length > 1) {
      ret += '.' + s[1];
  }
  return ret;
})
