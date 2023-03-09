let promise = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);

// вывод 1, так как последующие вызовы игнорируются 