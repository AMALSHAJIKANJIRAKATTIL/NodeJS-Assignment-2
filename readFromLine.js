const readline=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Type your name? : ", (name)=>{
    console.log(`Hello ${name}`);
    readline.close();
})

