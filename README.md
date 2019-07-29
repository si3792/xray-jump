
# XRay-Jump

Xray Jump is a hard fork of Find-Jump for vscode. This version adds a grayscale effect to
better indicate when the extension is active.


![](https://raw.githubusercontent.com/si3792/xray-jump/master/demoFiles/demo.gif)

## How to use Xray-Jump

First you need to bind the `xrayJump.activate` command to a keyboard shortcut.

When you activate Xray-Jump, you'll see the grayscale effect and a blinking red light in the status bar indicating that Xray-Jump is active and is receiving your input. Now you can start typing the characters to where you want to jump. Usually 3 to 5 characters should be enough to narrow down the location, but your own workflow may vary.

A few things to note:

* The jump character is always a single letter. Sometimes the jump character needs to be pressed with the SHIFT key, which would be indicated on the jump location like `⇧z`
* You cannot press ESC to exit Xray-Jump (due to VS Code limitation)
* Pressing the arrow keys, backspace, or the enter key will exit Xray-Jump
* You cannot edit what you've typed into the Xray-Jump prompt (due to VS Code limitation)
* While Xray-Jump is active, you can press the activation keybinding again to reset Xray-Jump and start over. This somewhat makes up for the inability to edit


## Xray-Jump settings

Xray-Jump adds these commands:

* `xrayJump.activate`: which activates Xray-Jump
* `xrayJump.activateWithSelection`: like `xrayJump.activate` but will make a selection from the current cursor position to the new cursor position

**Note** No keybinding is provided by this extension. You have to create one yourself.

