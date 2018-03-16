
function imagePath(str,path){
  let cur_path = path || "/"

  if(cur_path.substring(0,5) !="/book")
    cur_path = "/book" + cur_path
  if(cur_path.charAt(cur_path.length-1) !== '/') //最后一个字符
      cur_path += '/'
  let image_reg = /<img src="([\S\s]+?)"/g
  
  return str.replace(image_reg,function($1,$2){
    let rep_str = ""

    if($2.substring(0,7) == "http://" || $2.substring(0,8) == "https://")
      rep_str =$2
    else if($2.substring(0,2)=='./')
      rep_str = cur_path + $2.slice(2)
    else
      rep_str = cur_path + $2
    return "<img src=\"" + rep_str +"\""
  })
}

export default imagePath
//module.exports = imagePath
