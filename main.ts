controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Draw.change(LedSpriteProperty.Y, -1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    control.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Draw = game.createSprite(2, 2)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Draw.change(LedSpriteProperty.X, -1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Draw.change(LedSpriteProperty.X, 1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Draw.change(LedSpriteProperty.Y, 1)
})
let Paint: game.LedSprite = null
let Ink: game.LedSprite = null
let Scribbles: game.LedSprite = null
let Draw: game.LedSprite = null
Draw = game.createSprite(2, 2)
basic.forever(function () {
    Scribbles = game.createSprite(0, 2)
    Scribbles = game.createSprite(0, 3)
    Scribbles = game.createSprite(0, 4)
    Ink = game.createSprite(4, 4)
    Paint = game.createSprite(2, 4)
})
