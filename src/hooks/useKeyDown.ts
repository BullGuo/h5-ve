function useClickOutside(key: string, callback: () => any) {
  const listener = (e: KeyboardEvent) => {
    if (e.key === key)
      callback()
  }
  onMounted(() => {
    document.addEventListener('keydown', listener)
  })
  onUnmounted(() => {
    document.removeEventListener('keydown', listener)
  })
}

export default useClickOutside
