function rot13(str) {
    let arr = str.slice().split('')
    let str1 = ''
    arr.map(function(item) {
      let num = item.charCodeAt()
      if (90 >=num && num >= 65) {
        if (num >= 78) {
          str1 += String.fromCharCode(num-13)
        } else {
          str1 += String.fromCharCode(num+13)
        }
      } else {
        str1 += item
      }
    })
    return str1
  }
  
  rot13("SERR PBQR PNZC");