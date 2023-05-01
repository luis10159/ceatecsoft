<template>
  <a-layout-header style="padding: 0" class="barra">
    <!-- buscador -->

    <a-row class="buscador" align="middle">
      <a-input-search v-model:value="value" placeholder="Buscar" />
    </a-row>
    <a-row class="avatar" :span="10" align="middle" justify="end">
      <a-switch checked-children="Oscuro" un-checked-children="Claro" class="color" />
      <a-dropdown-button class="space">
        <template #overlay>
          <a-menu @click="handleMenuClick" theme="dark">
            <a-menu-item key="1">
              <EditOutlined />
              Editar perfil
            </a-menu-item>
            <a-menu-item key="2">
              <SettingOutlined />
              Ajustes
            </a-menu-item>
            <a-menu-item key="3">
              <LogoutOutlined />
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
  EditOutlined,
  SettingOutlined,
  LogoutOutlined

} from "@ant-design/icons-vue";
import { ref } from "vue";
const value = ref('');

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

.color {
  background: rgb(76, 84, 129);
}
.space {
  margin-right: 20px;
}

.avatar {
  flex-grow: 6;
}

.barra {
  display: flex;
}
</style>