<script setup lang="ts" generic="T extends any, O extends any">
import { v4 as uuidv4 } from 'uuid'
import type { ComponentData, DynamicComponent, textDefaultType } from '~/types'
import Text from '~/components/Text.vue'
import { defaultTextTemplates } from '~/defaultTemplate'

const components: DynamicComponent = { Text }

const formComponents = ref<ComponentData<textDefaultType>[]>([
  { id: uuidv4(), name: 'Text', props: { fontSize: '32px', tag: 'h1', text: '123', color: '#1E90FF', textAlign: 'left', fontFamily: '"SimSun","STSong"', width: '100px', height: '50px', backgroundColor: '' } },
  { id: uuidv4(), name: 'Text', props: { fontSize: '16px', tag: 'h3', text: '456', color: '#49118D', lineHeight: 2, textAlign: 'center', fontFamily: '', backgroundColor: '#28C913', fontWeight: 'bold', fontStyle: 'italic', textDecoration: '' } },
])

function handleTemplateClick(data: textDefaultType) {
  const newData = {
    id: uuidv4(),
    name: 'Text',
    props: data,
  }
  formComponents.value.push(newData)
}

const currentElement = ref<ComponentData<textDefaultType>>()

function handleEditClick(id: string) {
  currentElement.value = formComponents.value.find(item => item.id === id)
}

function handleEditDel(id: string) {
  formComponents.value = formComponents.value.filter(item => item.id !== id)
  if (currentElement?.value)
    currentElement.value = undefined
}

function handleChange({ key, value }: { key: string, value: any }) {
  if (currentElement?.value)
    currentElement.value.props[key as keyof textDefaultType] = value
}
</script>

<template>
  <div h-full>
    <el-container h-full>
      <el-aside w="1/4!" bg-green>
        <left-template :list="defaultTextTemplates" @on-template-click="handleTemplateClick" />
      </el-aside>
      <el-main bg-yellow>
        <edit-wrapper
          v-for="component of formComponents"
          :id="component.id"
          :key="component.id"
          :is-active="currentElement?.id === component.id"
          @on-edit-click="handleEditClick"
          @on-edit-del="handleEditDel"
        >
          <component :is="components[component.name]" v-bind="component.props" />
        </edit-wrapper>
      </el-main>
      <el-aside w="1/4!" bg-red>
        <props-form v-if="currentElement" :form-value="currentElement?.props" @on-change="handleChange" />
      </el-aside>
    </el-container>
  </div>
</template>
