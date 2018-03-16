
function parseResponse (response) {
  return Promise.all([response.status,response.statusText, response.text()])
}

function checkStatus ([status,statusText,data]) {
  if (status >= 200 && status < 800){
    return data
  } else {
    let error = new Error(statusText)
    error.status = status
    error.error_message = data
    return Promise.reject(error)
  }
}


function _get(url){
  console.log("service 模块,得到地址为:",url)
  return fetch(url).then(parseResponse).then(checkStatus)
}


module.exports =_get
