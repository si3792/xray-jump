import {
  StatusBarItem,
  StatusBarAlignment,
  commands,
  Disposable,
  window,
  TextEditor,
} from 'vscode'

const cancellationChars = new Set('\n')
export const subscriptions: Disposable[] = []

export class InlineInput {
  statusBarItem: StatusBarItem
  input = ''

  constructor(private props: {
    textEditor: TextEditor,
    onInput(input: string, char: string): any,
    onCancel(...args: any[]): any,
  }) {
    subscriptions.push(
      commands.registerCommand('type', this.onInput),
      window.onDidChangeTextEditorSelection(this.onCancel),
    )

    this.statusBarItem = window.createStatusBarItem(
      StatusBarAlignment.Right,
      1000,
    )
  }

  public updateStatusBar = (text: string) => {
    this.statusBarItem.text = text
    this.statusBarItem.show()
  }

  public destroy = () => {
    this.statusBarItem.dispose()
    subscriptions.forEach((subscription) => subscription.dispose())
  }

  private onInput = ({text}: {text: string}) => {
    const char = text

    this.input += char

    if (cancellationChars.has(char)) {
      this.onCancel()
    } else {
      return this.props.onInput(this.input, char)
    }
  }

  private onCancel = (...args: any[]) => {
    this.destroy()
    return this.props.onCancel(args)
  }
}
