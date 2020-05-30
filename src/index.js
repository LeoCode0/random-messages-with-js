const messages = [
    "Leo",
    "Fernando",
    "Laura",
    "Oscar",
    "Jonathan",
    "Brandon",
    "Juan",
    "pedro",
    "Ricardo"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)]
    console.log(message)
}

module.exports = { randomMsg }