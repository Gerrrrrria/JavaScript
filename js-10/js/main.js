function f1(){
    let s1 = 'abc'
    let s2 = new String('abc')
    console.log(s1.charAt(2)); //获取字符串中指定位置的字符
}

function f2(){
    let div = document.getElementById('my_div')
    let s = '台湾地区发生7.2级大地震，大陆汶川大地震'  // 10,18
    let i = s.indexOf('大地震')  //从左向右第一次出现的位置
    div.innerHTML = i
    i = s.lastIndexOf('大地震')
    div.innerHTML += '<p>' + i  
    
}
// xx@yy.zz
/*
   .的索引 - @的索引 >= 2
*/
function f3(){
  let div = document.getElementById('my_div')
//获取用户输入的email，然后进行合法性检验
  let email = document.getElementById('email').value
  let i = email.indexOf('.') - email.indexOf('@')
  //let cha = email.length -  email.indexOf('.')  //判断.是否为最后一个字符
  let ok = email.endsWith('.') //是否以.结尾
  
//   if(i>=2 && cha != 1 ){
//     div.innerHTML = '邮箱格式合法'
//     div.style.color = 'green'
//   }
//   else{
//     div.innerHTML = '邮箱格式非法'
//     div.style.color = 'red'
//   }
    if(i>=2 && ok==false ){
    div.innerHTML = '邮箱格式合法'
    div.style.color = 'green'
  }
  else{
    div.innerHTML = '邮箱格式非法'
    div.style.color = 'red'
  }
}
function f4(){
//   实现中华民族伟大复兴的中国梦  china dream
   let s = '实现中华民族伟大复兴的中国梦'
   s = s.replace('中国梦','chinese dream')

   let div = document.getElementById('my_div')
   div.innerHTML = s

}