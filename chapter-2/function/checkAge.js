function checkAge(age) {
    return (age > 18) ? true : alert('Родители разрешили?');
}
console.log(checkAge(19))

function checkAge2(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

console.log(checkAge2(19))