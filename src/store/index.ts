import { defineStore } from 'pinia'
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import type { ComponentData, textDefaultType } from '~/types'

export const useEditorStore = defineStore('editor', () => {
  const formComponents = ref<ComponentData<textDefaultType>[]>([
    { id: uuidv4(), name: 'Text', layerName: '图层1', props: { fontSize: '32px', tag: 'h1', text: '123', color: '#1E90FF', textAlign: 'left', fontFamily: '"SimSun","STSong"', width: '100px', height: '50px', backgroundColor: '' } },
    { id: uuidv4(), name: 'Text', layerName: '图层2', props: { fontSize: '16px', tag: 'h3', text: '456', color: '#49118D', lineHeight: 2, textAlign: 'center', fontFamily: '', backgroundColor: '#28C913', fontWeight: 'bold', fontStyle: 'italic', textDecoration: '' } },
  ])
  const currentElement = ref<ComponentData<textDefaultType>>()

  function addEditor(data: textDefaultType) {
    const newData = {
      id: uuidv4(),
      name: 'Text',
      props: data,
    }
    formComponents.value.push(newData)
  }

  function removeEditor(id: string) {
    formComponents.value = formComponents.value.filter(item => item.id !== id)
    unSelectEditor()
  }

  function selectEditor(id: string) {
    currentElement.value = formComponents.value.find(item => item.id === id)
  }

  function unSelectEditor() {
    if (currentElement.value)
      currentElement.value = undefined
  }

  function modifyEditor({ key, value, id, isRoot }: { key: string, value: any, id?: string, isRoot?: boolean }) {
    if (isRoot) {
      const currentLayer = formComponents.value.find(item => item.id === id)
      currentLayer && ((currentLayer as any)[key] = value)
    }
    else if (currentElement?.value) {
      currentElement.value.props[key as keyof textDefaultType] = value
    }
  }

  return { formComponents, currentElement, addEditor, removeEditor, selectEditor, unSelectEditor, modifyEditor }
})
