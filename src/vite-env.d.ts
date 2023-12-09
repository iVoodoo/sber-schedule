/// <reference types="vite/client" />
declare module '*.csv' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export default <{ [key: string]: any }>[]
}
