let rootPath = "https://mysite.itvarsity.org/api/contactBook/";
let apikey = checkApikey();
function checkApikey() {
  if (localStorage.getItem("apiKey")) {
    window.open("enter-api-key.html", _self);
  }
  return localStorage.getItem("apikey");
}
