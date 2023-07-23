// Explain what a callback function is and provide a simple example? 

const sum = (x, y, z, callback) => {
    const result = x + y + z;
    callback(result);
}

const printRes = (res) => {
    console.log(res);
}

sum(5, 10, 6, printRes);

