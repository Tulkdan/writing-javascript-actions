const core = require('@actions/core')

const firstGreeting = core.getInput('first-greetin')
const secondGreeting = core.getInput('second-greetin')
const thirdGreeting = core.getInput('third-greetin')

console.log(`Hello ${firstGreeting}`)
console.log(`Hello ${secondGreeting}`)
if (thirdGreeting) {
  console.log(`Hello ${firstGreeting}`)
}
