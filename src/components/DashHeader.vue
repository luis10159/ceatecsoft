<template>
  <a-layout-header style="background: #fff; padding: 0" class="barra">
    <!-- buscador -->

    <a-row class="buscador" align="middle">
      <a-input-search v-model:value="value" placeholder="Buscar"/>
    </a-row>
    <a-row class="avatar" :span="10" align="middle" justify="end">
      <a-switch v-model:checked="checked2" checked-children="Oscuro" un-checked-children="Claro" />
      <a-dropdown-button>
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="1">
              <UserOutlined />
              Editar perfil
            </a-menu-item>
            <a-menu-item key="2">
              <UserOutlined />
              Ajustes
            </a-menu-item>
            <a-menu-item key="3">
              <UserOutlined />
              Salir
            </a-menu-item>
          </a-menu>
        </template>
        <template #icon>
          <UserOutlined />
        </template>
      </a-dropdown-button>
    </a-row>
  </a-layout-header>
</template>
<script setup>
import {
  UserOutlined,

} from "@ant-design/icons-vue";
import { ref } from "vue";
const value = ref('');
const checked2 = ref('');

const handleMenuClick = e => {
  console.log('click', e);
};

</script>


<style lang="scss" scoped>
.buscador {
  height: 100%;
  margin-left: 20px;
  flex-grow: 1;
}



.avatar {
  flex-grow: 6;
}

.barra {
  display: flex;
  
}
</style>