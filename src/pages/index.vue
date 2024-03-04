<script setup lang="ts" generic="T extends any, O extends any">
import { storeToRefs } from 'pinia'
import type { DynamicComponent } from '~/types'
import { defaultTextTemplates } from '~/defaultTemplate'
import { useEditorStore } from '~/store'
import Text from '~/components/Text.vue'

const components: DynamicComponent = { Text }
const activeName = ref<'attribute' | 'layer'>('attribute')

const editorStore = useEditorStore()
const { formComponents, currentElement } = storeToRefs(editorStore)
const { addEditor, removeEditor, selectEditor, unSelectEditor, modifyEditor } = editorStore

function handleLayerChange(data: { id: string, value: boolean, key: string, isRoot: boolean }) {
  modifyEditor(data)
  if (data.key === 'isHidden' && data.value)
    unSelectEditor()
}
</script>

<template>
  <div h-full>
    <el-container h-full>
      <el-aside w="1/4!" bg-green>
        <left-template :list="defaultTextTemplates" @on-template-click="addEditor" />
      </el-aside>
      <el-main bg-yellow>
        <template v-for="component of formComponents" :key="component.id">
          <edit-wrapper
            v-show="!component.isHidden"
            :id="component.id"
            :is-active="currentElement?.id === component.id"
            @on-edit-click="selectEditor"
            @on-edit-del="removeEditor"
          >
            <component :is="components[component.name]" v-bind="component.props" />
          </edit-wrapper>
        </template>
      </el-main>
      <el-aside w="1/4!" bg-white text-black>
        <el-tabs v-model="activeName" type="border-card">
          <el-tab-pane label="属性设置" name="attribute">
            <template v-if="currentElement">
              <props-form v-if="!currentElement.isLocked" :form-value="currentElement.props" @on-change="modifyEditor" />
              <el-empty v-else description="该元素被锁定，无法编辑" />
            </template>
            <el-empty v-else description="暂未选中任何画布元素" />
          </el-tab-pane>
          <el-tab-pane label="图层设置" name="layer">
            <layer-list :list="formComponents" :select-id="currentElement?.id" @change="handleLayerChange" @select="selectEditor" />
          </el-tab-pane>
        </el-tabs>
      </el-aside>
    </el-container>
  </div>
</template>

<style scoped>
:deep .el-tabs__content {
  padding: 0;
}
</style>
