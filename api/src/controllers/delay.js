
function delay(n) {
    return new Promise(function (resolve) {
        setTimeout(resolve, n)
    })
}

module.exports = delay