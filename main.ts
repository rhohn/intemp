radio.onReceivedNumber(function (receivedNumber) {
    outTemp = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("IN:" + convertTemp(input.temperature()))
    basic.showIcon(IconNames.Umbrella)
})
function convertTemp (num: number) {
    return 9 / 5 * num + 32
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("OUT:" + convertTemp(outTemp))
    basic.showIcon(IconNames.Umbrella)
})
let outTemp = 0
radio.setGroup(1)
basic.showIcon(IconNames.Umbrella)
