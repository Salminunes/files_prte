const timeOut = 1000
const checking = () => console.log('Checado!')

let interval  = setInterval(checking, timeOut)

setTimeout(() => clearInterval(interval), 8000)