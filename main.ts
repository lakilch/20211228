input.onPinPressed(TouchPin.P0, function () {
    radio.sendValue("clear", 0)
    basic.pause(200)
    radio.sendValue("arrowR", 0)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue("clear", 0)
    basic.pause(1)
    temp = 0
    show = 1
    radio.sendValue("count", 0)
})
input.onPinPressed(TouchPin.P2, function () {
    radio.sendValue("clear", 0)
    basic.pause(200)
    radio.sendValue("arrowL", countBits - 1)
})
input.onButtonPressed(Button.AB, function () {
    temp = 1
    bitsTemp = []
    countBits = 0
    basic.showNumber(countBits)
    show = 0
    bitsTemp = myBits
    myBits = []
    radio.sendValue("reset", -1)
    basic.pause(1)
    radio.sendValue("show", show)
    basic.pause(1)
    for (let index = 0; index <= bitsTemp.length - 1; index++) {
        radio.sendValue("response", parseInt(bitsTemp[index]))
        basic.pause(1)
    }
    basic.showNumber(countBits)
    show = 1
    radio.sendValue("show", show)
    basic.pause(1)
    temp = 0
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("clear", 0)
    basic.pause(1)
    temp = 0
    show = 1
    radio.sendValue("countDown", countBits - 1)
})
let myBits: number[] = []
let bitsTemp: number[] = []
let temp = 0
let countBits = 0
let show = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
radio.setGroup(1)
show = 0
countBits = 0
temp = 0
