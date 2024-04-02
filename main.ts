input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    matrix.comment("1. Display: Text in verschiedene Richtungen")
    matrix.clearMatrix()
    matrix.writeTextImageArray("XYZ=098", 0, 32, 18, 0, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3), matrix.oled_eFaktor(matrix.eFaktor.f1))
    matrix.writeTextImageArray("ABC-123", 0, 0, 12, 2, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f2))
    matrix.writeTextImageArray("ABC-123", 64, 64)
    matrix.writeDisplay()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    matrix.comment("2. Display: Zeichen 8x8 vergrößern, drehen und spiegeln")
    matrix.clearMatrix()
    bild = matrix.hexImage8x8("427F406251494946")
    matrix.writeImage(bild, 0, 0, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3))
    matrix.writeImage(matrix.imageDrehen(bild, matrix.eZeichenDrehen.links), 32, 0, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3), matrix.oled_eFaktor(matrix.eFaktor.f3))
    matrix.writeImage(matrix.imageDrehen(bild, matrix.eZeichenDrehen.rechts), 64, 0, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3))
    matrix.writeImage(matrix.imageDrehen(bild, matrix.eZeichenDrehen.halb), 96, 0, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3))
    matrix.writeImage(matrix.imageDrehen(bild, matrix.eZeichenDrehen.yspiegeln), 0, 32, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3))
    matrix.writeImage(matrix.imageDrehen(bild, matrix.eZeichenDrehen.xspiegeln), 32, 32, matrix.eTransparent.u, matrix.oled_eFaktor(matrix.eFaktor.f3))
    matrix.writeDisplay(0, 7, matrix.eI2C.I2C_x3D)
})
input.onButtonEvent(Button.A, ButtonEvent.Hold, function () {
    matrix.comment("1. Display: Kreis mit Minuten")
    if (!(input.buttonIsPressed(Button.B))) {
        matrix.clearMatrix()
        matrix.rasterCircle(64, 64, 60)
        matrix.writeDisplay()
        for (let Index = 0; Index <= 55; Index++) {
            matrix.minute_mark(Index, 64, 64, 50, 60)
            matrix.writeDisplay()
        }
    }
})
input.onButtonEvent(Button.B, ButtonEvent.Hold, function () {
    matrix.comment("2. Display: Animation")
    if (!(input.buttonIsPressed(Button.A))) {
        matrix.writeDisplayAnimation(matrix.beispielRegen16x8(), 0, 0, matrix.oled_eFaktor(matrix.eFaktor.f1), matrix.oled_eFaktor(matrix.eFaktor.f4), 500, 0, 15, matrix.eI2C.I2C_x3D)
    }
})
function Konfiguration () {
    matrix.comment("Calliope V2 erforderlich (32 KB RAM)")
    matrix.comment("Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V")
    matrix.comment("calliope-net/teste-matrix-42")
    matrix.comment("1 Erweiterung:")
    matrix.comment("calliope-net/matrix")
}
input.onButtonEvent(Button.AB, ButtonEvent.Hold, function () {
    matrix.comment("2. Display: Kreis mit Stunden")
    matrix.rasterCircle(30, 23, 24)
    matrix.writeDisplay(0, 15, matrix.eI2C.I2C_x3D)
    for (let Index = 0; Index <= 10; Index++) {
        matrix.hour_mark(Index + 1, 30, 23, 2, 16)
        matrix.writeDisplay(0, 7, matrix.eI2C.I2C_x3D)
    }
})
let bild: Image = null
matrix.comment("1. OLED Display 128x128 Pixel")
matrix.init(matrix.ePages.y128)
matrix.comment("2. OLED Display 128x64 mit anderer I²C Adresse")
matrix.init(matrix.ePages.y64, false, false, matrix.eI2C.I2C_x3D)
matrix.comment("beide nutzen Matrix gemeinsam, leere Matrix löscht Displays")
matrix.writeDisplay()
matrix.writeDisplay(0, 7, matrix.eI2C.I2C_x3D)
basic.showNumber(matrix.getArray().length)
basic.showNumber(matrix.getImages().length)
