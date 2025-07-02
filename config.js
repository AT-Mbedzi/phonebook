<<<<<<< Updated upstream
<<<<<<< Updated upstream
let rootPath = "https://mysite.itvarsity.org/api/contactBook/";
let apikey = checkApikey();
function checkApikey() {
  if (localStorage.getItem("apiKey")) {
    window.open("enter-api-key.html", _self);
  }
  return localStorage.getItem("apikey");
}
=======


let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey  = checkApiKey();

function checkApiKey() {
    if (!localStorage.getItem("apiKey")){
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}
>>>>>>> Stashed changes
=======
let rootPath = "https://mysite.itvarsity.org/api/contactBook/";
let apikey = checkApikey();
function checkApikey() {
  if (localStorage.getItem("apiKey")) {
    window.open("enter-api-key.html", _self);
  }
  return localStorage.getItem("apikey");
}
>>>>>>> Stashed changes
