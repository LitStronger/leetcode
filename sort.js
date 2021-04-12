var arr = [1,1,'1','1',0,0,'0','0',undefined,undefined,null,null,NaN,NaN,{},{},{"a":1},{"a":1},[1,2],[1,2],/a/,/a/,function(){console.log(1)},function(){console.log(1)}]

let m = new Map()
m.set(1, true)
m.set('1', false)

function dedump()