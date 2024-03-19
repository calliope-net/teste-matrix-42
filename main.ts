input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    matrix.clearMatrix()
    matrix.rasterCircle(64, 64, 32)
    matrix.rasterCircle(64, 64, 34)
    matrix.line(10, 60, 100, 99, true)
    matrix.writeDisplay()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    matrix.comment("1 Pixel an und zurück lesen")
    x = 2
    y = 0
    matrix.setPixel(0, 0, true)
    if (matrix.getPixel(x, y)) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    matrix.clearMatrix()
    i1 = matrix.matrix8x8(`
        # # . . . . # #
        # . . . . . . #
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        # . . . . . . #
        # # . . . . # #
        `)
    matrix.writeImage(i1, 0, 0, 16)
    matrix.writeDisplay()
})
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    matrix.comment("zeichnet Linie im Buffer")
    for (let Index = 0; Index <= 63; Index++) {
        matrix.setPixel(Index, Index, true)
    }
    matrix.comment("schreibt 1 mal am Ende auf Display")
    matrix.writeDisplay()
})
input.onButtonEvent(Button.B, ButtonEvent.Hold, function () {
    matrix.comment("löscht Linie im Buffer")
    for (let Index2 = 0; Index2 <= 63; Index2++) {
        matrix.setPixel(Index2, Index2, false)
        matrix.comment("schreibt nach jedem Pixel das ganze Display")
        matrix.writeDisplay()
    }
})
function Konfiguration () {
    matrix.comment("Calliope V2 (-62)")
    matrix.comment("elssner/matrix")
    matrix.comment("Code Datei: matrix.ts")
    matrix.comment("Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V")
}
let i1: Image = null
let y = 0
let x = 0
matrix.init(matrix.ePages.y64, true)
matrix.clearMatrix()
