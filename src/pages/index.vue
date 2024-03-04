<script setup lang="ts" generic="T extends any, O extends any">
import { storeToRefs } from 'pinia'
import type { DynamicComponent } from '~/types'
import { defaultTextTemplates } from '~/defaultTemplate'
import { useEditorStore } from '~/store'
import Text from '~/components/Text.vue'

const components: DynamicComponent = { Text }

const editorStore = useEditorStore()
const { formComponents, currentElement } = storeToRefs(editorStore)
const { addEditor, removeEditor, selectEditor, modifyEditor } = editorStore
</script>

<template>
  <div h-full>
    <el-container h-full>
      <el-aside w="1/4!" bg-green>
        <left-template :list="defaultTextTemplates" @on-template-click="addEditor" />
      </el-aside>
      <el-main bg-yellow>
        <edit-wrapper
          v-for="component of formComponents"
          :id="component.id"
          :key="component.id"
          :is-active="currentElement?.id === component.id"
          @on-edit-click="selectEditor"
          @on-edit-del="removeEditor"
        >
          <component :is="components[component.name]" v-bind="component.props" />
        </edit-wrapper>
      </el-main>
      <el-aside w="1/4!" bg-white>
        <props-form v-if="currentElement" :form-value="currentElement?.props" @on-change="modifyEditor" />
      </el-aside>
    </el-container>
  </div>
</template>
