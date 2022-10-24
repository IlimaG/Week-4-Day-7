
for (let i = 0; i <= 50; i++) {
    
    if (i % 5 === 0 || i % 15 === 0) {
        console.log("Donkey");
        continue
    }
    if (!i % 10 ===0 && !i % 2===0) {
        console.log ("Monkey")
        continue
    }

    if (i % 10===0) {
       continue
    }


    console.log(i);


}