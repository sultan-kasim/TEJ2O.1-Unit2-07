/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sultan 
 * Created on: Sep 2025
 * This program is like cookie clicker
*/

basic.clearScreen()
basic.showIcon
// When A pressed cookie is added
let cookiesPressed = 0
input.onButtonPressed(Button.A, function () {
    cookiesPressed = cookiesPressed + 1
    basic.showNumber(cookiesPressed)
})
