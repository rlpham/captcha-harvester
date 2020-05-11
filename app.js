var count = 0;
$("#bankCount").html(`<p class="center-align">Captcha Tokens Harvested: ${count}</p>`)
$("#currentBankCount").html(`<p class="center-align">Current Active Tokens: 0</p>`)
function captchaCallback() {
    var token = grecaptcha.getResponse();
    $("#bank").append(function() {
        return generateColumn(token);
    })
    count++
    $("#bankCount").html(`<p class="center-align"">Captcha Tokens Harvested: ${count}</p>`)
    grecaptcha.reset();
}

function generateColumn(token) {
  return `<tr><td class="token-col">${token}</td><td class="time-col text-center">120</td></tr>`
}

setInterval(function() {
  var arr = $(".time-col").toArray();
  arr.forEach(updateTimestamp);
  $("#currentBankCount").html(`<p class="center-align">Current Active Tokens: ${arr.length}</p>`)
}, 1000)

function updateTimestamp(item, index, object) {
  var old = parseInt(item.innerHTML) - 1;
  if(old == -1) {
    console.log("Token Expired");
    object.splice(index, 1);
    item.parentElement.remove();
  }
  item.innerHTML = old
  
}