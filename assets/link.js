function is_url(str) {
  regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return false;
  }
  else {
    return true;
  }
}
function visit(link) {
  document.getElementById('error').innerHTML = "Enter complete URL";
  document.getElementById("myframe").src = link;
  document.getElementById('linkpage').style.display = 'none';
  document.getElementById('framepage').style.display = 'initial';
  $('[data-toggle="tooltip"]').tooltip('show');
  new_tab = link;
}
var new_tab = "";
document.addEventListener('DOMContentLoaded', function () {
  var link = document.getElementById('link');
  link.addEventListener('click', function () {
    if (is_url(String(document.getElementById('linkinput').value))) {
      document.getElementById('error').innerHTML = "Invalid Link !";
    } else {
      visit(String(document.getElementById('linkinput').value));
    }
  })
  var lgoogle = document.getElementById('lgoogle');
  lgoogle.addEventListener('click', function () {
    visit("https://www.google.com/");
  })
  var lyt = document.getElementById('lyt');
  lyt.addEventListener('click', function () {
    visit("https://www.youtube.com/");
  })
  var lgm = document.getElementById('lli');
  lgm.addEventListener('click', function () {
    visit("https://www.linkedin.com/");
  })
  var lws = document.getElementById('lws');
  lws.addEventListener('click', function () {
    visit("https://web.whatsapp.com/");
  })
  var lgt = document.getElementById('lsf');
  lgt.addEventListener('click', function () {
    visit("https://stackoverflow.com/");
  })
  var lam = document.getElementById('lam');
  lam.addEventListener('click', function () {
    visit("https://www.amazon.in/");
  })

  var tab = document.getElementById('newtab');
  tab.addEventListener('click', function () {
    chrome.tabs.create({ url: new_tab });
  })

  var back = document.getElementById('back');
  back.addEventListener('click', function () {
    document.getElementById('linkpage').style.display = 'block';
    document.getElementById('framepage').style.display = 'none';
    document.getElementById('linkinput').value = "";
    $('[data-toggle="tooltip"]').tooltip('hide');
  })
})