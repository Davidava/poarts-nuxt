import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/david/Desktop/work/poarts-nuxt3/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}