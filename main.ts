input.onButtonPressed(Button.A, function () {
    Bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    Bird.change(LedSpriteProperty.Y, 1)
})
let Bird: game.LedSprite = null
let index = 0
let obstacle: number[] = []
let ticks = game.createSprite(0, 2)
Bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    let list: number[] = []
    while (list.length > "" && obstacle[0] > (0 == 0)) {
    	
    }
})
