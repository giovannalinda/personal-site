import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    textColor: string
    footer: string
    textFooter: string
    button: string
    list: string
    icon: string
  }
}
