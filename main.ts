input.onButtonPressed(Button.A, function () {
    aforo = aforo + 1
    if (aforo > 5) {
        basic.showString("AF")
    } else {
        basic.showNumber(aforo)
    }
})
input.onGesture(Gesture.Shake, function () {
    aforo = 0
})
input.onButtonPressed(Button.B, function () {
    aforo = Math.max(aforo - 1, 0)
})
let aforo = 0
basic.showNumber(aforo)
basic.forever(function () {
	
})
