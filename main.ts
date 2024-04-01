input.onButtonEvent(Button.AB, ButtonEvent.Click, function () {
    matrix.rasterCircle(30, 23, 24)
    matrix.writeDisplay()
    for (let Index = 0; Index <= 10; Index++) {
        matrix.hour_mark(Index + 1, 30, 23, 2, 16)
        matrix.writeDisplay(0, 7, matrix.eI2C.I2C_x3D)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    matrix.clearMatrix()
    i1 = matrix.hexImage8x8("91080402FF010183")
    matrix.writeImage(i1, 0, 0, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3))
    matrix.writeImage(matrix.imageDrehen(i1, matrix.eZeichenDrehen.links), 32, 0, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3), matrix.oled_eFaktor(matrix.eFaktor.f3))
    matrix.writeImage(matrix.imageDrehen(i1, matrix.eZeichenDrehen.rechts), 64, 0, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3))
    matrix.writeImage(matrix.imageDrehen(i1, matrix.eZeichenDrehen.halb), 96, 0, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3))
    matrix.writeImage(matrix.imageDrehen(i1, matrix.eZeichenDrehen.yspiegeln), 0, 32, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3))
    matrix.writeImage(matrix.imageDrehen(i1, matrix.eZeichenDrehen.xspiegeln), 32, 32, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3))
    matrix.writeDisplay(0, 7, matrix.eI2C.I2C_x3D)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    matrix.clearMatrix()
    matrix.rasterCircle(64, 64, 60)
    matrix.writeDisplay()
    for (let Index = 0; Index <= 55; Index++) {
        matrix.minute_mark(Index, 64, 64, 50, 60)
        matrix.writeDisplay()
    }
})
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    matrix.writeDisplayAnimation(matrix.beispielRegen16x8(), 0, 0, matrix.oled_eFaktor(matrix.eFaktor.f1), matrix.oled_eFaktor(matrix.eFaktor.f4), 500, 0, 15, matrix.eI2C.I2C_x3D)
})
input.onButtonEvent(Button.B, ButtonEvent.Hold, function () {
    matrix.clearMatrix()
    matrix.writeTextImageArray("XYZ=098", 0, 32, 18, 0, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3), matrix.oled_eFaktor(matrix.eFaktor.f1))
    matrix.writeTextImageArray("ABC-123", 0, 0, 12, 2, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f2))
    matrix.writeTextImageArray("ABC-123", 64, 64)
    matrix.writeDisplay()
})
function Konfiguration () {
    matrix.comment("Calliope V2 erforderlich (32 KB RAM)")
    matrix.comment("Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V")
    matrix.comment("calliope-net/teste-matrix-42")
    matrix.comment("1 Erweiterung:")
    matrix.comment("calliope-net/matrix")
}
let i1: Image = null
matrix.init(matrix.ePages.y128)
matrix.init(matrix.ePages.y64, false, false, matrix.eI2C.I2C_x3D)
matrix.writeDisplay()
matrix.writeDisplay(0, 7, matrix.eI2C.I2C_x3D)
basic.showNumber(matrix.getArray().length)
