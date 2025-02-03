const fs = require("fs");
const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log('1 cryptoPKBF2 done');
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log('2 cryptoPKBF2 done');
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log('3 cryptoPKBF2 done');
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log('4 cryptoPKBF2 done');
});

//top 4 load in equal time, bcoz default 4 threads of pool get involved equally

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log('5 cryptoPKBF2 done');
});

// loads later thn above 4 bcoz it waits for either 
// of 4 threads engaged in above 4 to get done
// and free the thread