export interface IVariableSelectConfig {
  type: 'select'
  name: string
  options: {
    name: string
    value: string
  }[]
  default: string
}

export type IVariableConfig = IVariableSelectConfig
