const KC = function(key, state){
  if( key.includes('ArrowUp') ||
      key.includes('ArrowDown') ||
      key.includes('ArrowLeft') ||
      key.includes('ArrowRight') ||
      key.includes('a') ||
      key.includes('A') ||
      key.includes('b') ||
      key.includes('B')){

    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
    let code = state
    if (code.length <= 0 && konamiCode[0] === key){
      state['code'] = [key]
    }
    else{
      if(code[code.length-1] === konamiCode[code.length-1] && key === konamiCode[code.length]){
        code.push(key)
        state['code'] = code
        if(code.length == konamiCode.length){
          console.log('KONAMI CODE ACHIEVED!')
        }
      }
      else{
        state['code'] = []
      }
    }
  }
  return state
}

module.exports = {
  KC
}
