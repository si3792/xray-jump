'use strict'
import {commands, ExtensionContext} from 'vscode'
import {XrayJump as XrayJump} from './xrayJump'
import {subscriptions as inlineInputSubscriptions} from './inlineInput'

const xrayJump = new XrayJump()

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerTextEditorCommand(
      'xrayJump.activate',
      xrayJump.activate,
    ),
    commands.registerTextEditorCommand(
      'xrayJump.activateWithSelection',
      xrayJump.activateWithSelection,
    ),
  )
}

export function deactivate() {
  const subscriptions = [...inlineInputSubscriptions]

  subscriptions.forEach(
    (subscription) => subscription.dispose(),
  )
}
