basic.showString("Samuel")
basic.forever(function () {
    led.plot(0, 0)
    basic.pause(500)
    led.unplot(0, 0)
    led.plot(1, 1)
    basic.pause(500)
    led.unplot(1, 1)
    led.plot(2, 2)
    basic.pause(500)
    led.unplot(2, 2)
    led.plot(3, 3)
    basic.pause(500)
    led.unplot(3, 3)
    led.plot(4, 4)
    basic.pause(500)
    led.unplot(4, 4)
})
