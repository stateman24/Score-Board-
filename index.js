let score = document.getElementsByClassName('scores')
let count = 0
let count2 = 0
function IncrementBy1home() {
    count += 1
    let score1 = score.item(0)
    score1.textContent = count
}

function IncrementBy2home() {
    count += 2
    let score1 = score.item(0)
    score1.textContent = count
}

function IncrementBy3home() {
    count += 3
    let score1 = score.item(0)
    score1.textContent = count
}
// Guest Increment Functions
function IncrementBy1guest() {
    count2 += 1
    let score1 = score.item(1)
    score1.textContent = count2
}

function IncrementBy2guest() {
    count2 += 2
    let score1 = score.item(1)
    score1.textContent = count2
}

function IncrementBy3guest() {
    count2 += 3
    let score1 = score.item(1)
    score1.textContent = count2
}
