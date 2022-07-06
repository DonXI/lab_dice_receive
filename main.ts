radio.onReceivedNumber(function (receivedNumber) {
    state = true
    receive_num = receivedNumber
})
let state = false
let receive_num = 0
radio.setGroup(1)
radio.setTransmitPower(7)
receive_num = 0
let my_number = 0
state = false
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        my_number += 1
        if (my_number == 7) {
            my_number = 0
        }
        basic.showNumber(my_number)
    } else if (input.buttonIsPressed(Button.B)) {
        serial.writeValue("my number is", my_number)
        basic.showIcon(IconNames.Yes)
    }
    if (state == true) {
        serial.writeValue("receive number is", receive_num)
        if (my_number == receive_num) {
            basic.showIcon(IconNames.Happy)
        } else {
            basic.showIcon(IconNames.Sad)
        }
    }
})
