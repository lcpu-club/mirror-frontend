const isIOS = () =>
  typeof window !== 'undefined' &&
  !!window?.navigator?.userAgent &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent)
let _iOSWorkaround = false

const _unrefEl = (maybeRef: Ref<Element | null> | Element | null) =>
  maybeRef instanceof Element ? maybeRef : (maybeRef?.value ?? null)

export interface OnClickOutsideOptions {
  /**
   * List of elements that should not trigger the event.
   */

  /**
   * Use capturing phase for internal event listener.
   * @default true
   */
  capture?: boolean
  /**
   * Run handler function if focus moves to an iframe.
   * @default false
   */
  detectIframe?: boolean
}

export type OnClickOutsideHandler = (evt: MouseEvent) => void

export function onClickOutside(
  target: Ref<Element | null> | Element | null,
  handler: OnClickOutsideHandler,
  ignore: (Ref<Element | null> | Element | null | string)[] = []
) {
  if (!window) return

  // Fixes: https://github.com/vueuse/vueuse/issues/1520
  // How it works: https://stackoverflow.com/a/39712411
  if (isIOS() && !_iOSWorkaround) {
    _iOSWorkaround = true
    Array.from(window.document.body.children).forEach((el) =>
      el.addEventListener('click', () => {})
    )
  }

  let shouldListen = true

  const shouldIgnore = (event: MouseEvent) => {
    return ignore.some((target) => {
      if (typeof target === 'string') {
        return Array.from(window.document.querySelectorAll(target)).some(
          (el) => el === event.target || event.composedPath().includes(el)
        )
      } else {
        const el = _unrefEl(target)
        return el && (event.target === el || event.composedPath().includes(el))
      }
    })
  }

  const listener = (event: MouseEvent) => {
    const el = _unrefEl(target)

    if (!el || el === event.target || event.composedPath().includes(el)) return

    if (event.detail === 0) shouldListen = !shouldIgnore(event)

    if (!shouldListen) {
      shouldListen = true
      return
    }

    handler(event)
  }

  const pointerdownListener = (e: MouseEvent) => {
    const el = _unrefEl(target)
    if (el) shouldListen = !e.composedPath().includes(el) && !shouldIgnore(e)
  }

  window.addEventListener('click', listener, { passive: true, capture: true })
  window.addEventListener('pointerdown', pointerdownListener, { passive: true })

  const stop = () => {
    window.removeEventListener('click', listener)
    window.removeEventListener('pointerdown', pointerdownListener)
  }

  return stop
}
