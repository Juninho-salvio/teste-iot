input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showString("LIGADO")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showString("DESLIGADO")
})
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    basic.showString("" + (value))
    basic.showString("GRAUS C")
})
