/// <reference types="vue/macros-global" />
/// <reference types="vite/client" />

// Recognize all CSS files as module imports.
declare module '*.css' {}

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<{}, {}, any>
  export default component
}
