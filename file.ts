export interface Module {
  actions: Actions
}
type MetadataObj = { [key: string]: Actions }
interface Actions {
  [key: string]: Function,
}
const actionsTest = {
  actA: () => ({}),
  actB: () => ({}),
  actC: () => ({})
}

type Act = {
  actA: Function,
  actB: Function,
  actC: Function
}
export const testObj: Module = {
  actions: {
    actA: () => ({}),
    actB: () => ({}),
    actC: () => ({})
  }
}

const test: Actions = {
  actA: () => ({}),
  actB: () => ({}),
  actC: () => ({})
}