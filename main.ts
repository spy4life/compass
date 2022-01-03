let degrees = 0
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showString("n")
    } else if (degrees < 135) {
        basic.showString("e")
    } else if (degrees == 225) {
        basic.showString("s")
    } else if (degrees < 315) {
        basic.showString("w")
    } else {
        basic.showString("n")
    }
})
