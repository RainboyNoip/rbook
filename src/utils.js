
//每一个li中的<a>点击,都会把 li下的直接孩子 ul 变成display:none /或者去除
//初始化时 每个li >ul 都会display:none


function __display_toggle(self){
    let element =$(self).parent().children('ul')
    let val = element.css("display")
    if( val !== 'none')
      element.css('display',"none")
    else
      element.css('display',"")
}

function __menu_init(selector){
  $(selector).click(function(){
    __display_toggle(this)
  })
}

exports.menu_init = __menu_init

exports.yaml = require('js-yaml').load
