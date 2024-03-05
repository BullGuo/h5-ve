function useClickOutside(elementRef: Ref<null | HTMLElement>) {
  const isClickOutside = ref(false)
  const listener = (e: MouseEvent) => {
    if (elementRef?.value?.contains(e.target as Node))
      isClickOutside.value = false
    else
      isClickOutside.value = true
  }
  onMounted(() => {
    document.addEventListener('click', listener)
  })
  onUnmounted(() => {
    document.removeEventListener('click', listener)
  })
  return isClickOutside
}

export default useClickOutside
