function lockerRan(locker){
let openLocker = []
for(let i=0; i*i<=locker;i++){
    openLocker.push(i*i)
}
return openLocker
}
console.log((lockerRan(1),[1]))
