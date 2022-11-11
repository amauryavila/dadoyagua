input.onButtonPressed(Button.A, function () {
    if (Clientes < 2) {
        basic.showIcon(IconNames.No)
    } else if (Clientes >= 2) {
        Clientes = Clientes - 1
        basic.showNumber(Clientes)
    }
})
input.onButtonPressed(Button.AB, function () {
    Clientes = 0
    basic.showNumber(Clientes)
})
input.onButtonPressed(Button.B, function () {
    Clientes = Clientes + 1
    basic.showNumber(Clientes)
})
let Clientes = 0
Clientes = 0
