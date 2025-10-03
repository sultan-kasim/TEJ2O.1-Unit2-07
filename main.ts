/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sultan 
 * Created on: Sep 2025
 * This program is like cookie clicker
*/


basic.showIcon(IconNames.Happy)
basic.clearScreen()
basic.showIcon

// when A pressed cookie is added
let cookiesPressed = 0
input.onButtonPressed(Button.A, function () {
    cookiesPressed = cookiesPressed + 1
    basic.showNumber(cookiesPressed)
    basic.pause(1000)
    basic.clearScreen()
})