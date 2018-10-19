import router from './router'
//import {bus} from './components/bus.js'
var slideMenu_defaults = {
  speed: 300,
  showDelay: 0,
  hideDelay: 0,
  singleOpen: true,
  clickEffect: true
};

var slideMenu = {}


slideMenu.init = function(element,options){
  this.element = $(element).find(".vertical-nav-content").children("ul").children("li")
  this.settings = $.extend({}, slideMenu_defaults, options);
  this._defaults = slideMenu_defaults;
  this._name = "jqueryAccordionMenu";
  this.hideAll()
  this.addIndicator()

  $(element).find("span.category").click(function(e){
    let vb = $(element).children("div.vertical-body");
    let disp = vb.css("display")
    if( disp !== 'none')
      vb.slideUp(500)
    else
      vb.slideDown(500)
  })

  this.element.find("span.submenu-indicator").bind("click",function(e){
    e.stopPropagation()//阻止事件冒泡
    let cul = $(this).parent().parent().children("ul")
    let len = cul.length
    if( len == 0){
      console.log("没有子菜单!")
    }
    else{
      let disp = cul.css("display")
      if(disp !== 'none'){
        cul.hide(300)
        $(this).parent().toggleClass("submenu-indicator-minus")
      }
      else{
        cul.show(300)
        $(this).parent().toggleClass("submenu-indicator-minus")
      }
    }
  })
  //hook a 跳转
  let allA = this.element.find("a").each(function(){
    let ele = $(this)
    let href= ele.attr("href")
    ele.attr("id",href)
    ele.removeAttr("href")
  })
  this.element.find("a").bind("click",function(e){
    let id = $(this).attr("id")

    $(this).removeClass("highlight")

    console.log('点击,开始跳转:',id)
    router.push({path:id})
  })
}

slideMenu.openSubMenu = function(){
}

slideMenu.hideAll = function(){
  this.element.find("ul").hide()
}

slideMenu.goTop = function(dom){
  $(dom).animate({scrollTop:0},'slow');
}

slideMenu.goDown = function(dom){
  let height = $(dom).height()
  $(dom).parent().parent().animate({scrollTop:height},'slow');
}

slideMenu.addIndicator = function(){
  this.element.find("ul").parent().children("a:first-child").append('<span class="submenu-indicator">+</span>')
}

slideMenu.slideLeft = function(){
  // todo add slide left code
  // this hide animate ,not right
  $("div.vertical-nav").toggle(500)
}

slideMenu.find = function(str){
  let ele = this.element.find("a")
  let arr = []
  ele.each(function(e){
    let txt = $(this).text()
    if(txt.indexOf(str)>=0){
      //console.log(txt)
      arr.push($(this))
    }
  })

  if(arr.length !==0){
    for(let i =0;i<arr.length;i++){
      arr[i].addClass("highlight")
      arr[i].parents("ul").each(function(e){
        let disp = $(this).css("display")
        if( disp === 'none')
          $(this).css("display","")
      })
    }
  }
  else
    alert("没有找到")
}


//module.exports = slideMenu
export default slideMenu = slideMenu
