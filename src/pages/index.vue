<script setup lang="ts" generic="T extends any, O extends any">
import { v4 as uuidv4 } from 'uuid'
import type { ComponentData, DynamicComponent, textDefaultType } from '~/types'
import Text from '~/components/Text.vue'
import { defaultTextTemplates } from '~/defaultTemplate'

const components: DynamicComponent = { Text }

const formComponents: ComponentData<textDefaultType>[] = reactive([
  { id: uuidv4(), name: 'Text', props: { fontSize: '32px', tag: 'h1', text: '123', color: 'red' } },
  { id: uuidv4(), name: 'Text', props: { fontSize: '16px', tag: 'h3', text: '456', color: 'black' } },
])

function handleTemplateClick(data: textDefaultType) {
  const newData = {
    id: uuidv4(),
    name: 'Text',
    props: data,
  }
  formComponents.push(newData)
}

const currentElement = ref<ComponentData<textDefaultType>>()

function handleEditClick(id: string) {
  currentElement.value = formComponents.find(item => item.id === id)
}
</script>

<template>
  <div h-full>
    <el-container h-full>
      <el-aside w="1/4!" bg-green>
        Aside
        <left-template :list="defaultTextTemplates" @on-template-click="handleTemplateClick" />
      </el-aside>
      <el-main bg-yellow>
        Main
        <edit-wrapper
          v-for="component of formComponents"
          :id="component.id"
          :key="component.id"
          :is-active="currentElement?.id === component.id"
          @on-edit-click="handleEditClick"
        >
          <pre>{{ component.id }}</pre>
          <component :is="components[component.name]" v-bind="component.props" />
        </edit-wrapper>
      </el-main>
      <el-aside w="1/4!" bg-red>
        Aside
        <pre>{{ currentElement?.props }}</pre>
      </el-aside>
    </el-container>
  </div>
</template>
