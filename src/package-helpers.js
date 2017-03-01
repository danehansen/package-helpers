export function putClassOnWindow(constructor, className, namespace = 'danehansen') {
  if (typeof window !== undefined) {
    window[namespace] = window[namespace] || {}
    window[namespace][className] = constructor
  }
}

export function putContentsOnWindow(contents, className, namespace = 'danehansen') {
  if (typeof window !== undefined) {
    window[namespace] = window[namespace] || {}
    window[namespace][className] = {...contents}
  }
}
