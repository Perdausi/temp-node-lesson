
const { readFile, writeFile } = require('fs')
console.log("Start")

readFile('./subfolder/content/first-text.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    } 
    const first = result

readFile('./subfolder/content/second-text.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    const second = result

writeFile('./subfolder/content/result-text.txt', `Here is the result : ${first}, ${second}`,
 (err, result) =>{
    if(err){
        console.log(err)
        return
    }
    result = (`${first}, ${second}`)
    console.log(result)
 })   
})    
})
console.log("Done with this task!")



