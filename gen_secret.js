var str_de = require('./src/utils/str_de.js')

var argv = process.argv

if(argv.length < 3){
  console.log("node gen_secret.js your_secret")
  console.log("请输入密码")
}
else {
  console.log("原始密码: ",argv[2])
  console.log("加密后:   ",str_de(argv[2]))
}

