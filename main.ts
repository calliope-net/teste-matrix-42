input.onButtonEvent(Button.AB, ButtonEvent.Click, function () {
    matrix.rasterCircle(30, 23, 24)
    matrix.writeDisplay()
    for (let Index = 0; Index <= 10; Index++) {
        matrix.hour_mark(Index + 1, 30, 23, 2, 16)
        matrix.writeDisplay()
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    matrix.clearMatrix()
    matrix.rasterCircle(32, 32, 32)
    matrix.rasterCircle(32, 32, 30)
    matrix.line(10, 60, 100, 9, true)
    matrix.writeDisplay()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    matrix.clearMatrix()
    matrix.rasterCircle(64, 64, 60)
    matrix.writeDisplay()
    for (let Index = 0; Index <= 55; Index++) {
        matrix.minute_line(Index, 64, 64, 50, 60)
        matrix.writeDisplay()
    }
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
    matrix.comment("Calliope V2 erforderlich (32 KB RAM)")
    matrix.comment("Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V")
    matrix.comment("calliope-net/teste-matrix-42")
    matrix.comment("1 Erweiterung:")
    matrix.comment("calliope-net/matrix")
}
matrix.init(matrix.ePages.y64, false)
matrix.clearMatrix()
