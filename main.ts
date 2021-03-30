input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Hello!")
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    basic.pause(500)
})
