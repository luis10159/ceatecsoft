<template>

    <a-layout style="min-height: 100vh">
        <dashsidebar></dashsidebar>
        <a-layout>
            <dashheader></dashheader>
            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>Inicio</a-breadcrumb-item>
                    <a-breadcrumb-item>tabla</a-breadcrumb-item>
                </a-breadcrumb>
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">

                    <router-view></router-view>
                </div>
            </a-layout-content>
            <dashfooter></dashfooter>
        </a-layout>
    </a-layout>
</template>
  
<script setup>
import {
    UserOutlined,

} from "@ant-design/icons-vue";
import { defineAsyncComponent } from "vue";
const dashsidebar = defineAsyncComponent(() => import('@/components/DashSideBar.vue'));
const dashheader = defineAsyncComponent(() => import('@/components/DashHeader.vue'));
const dashfooter = defineAsyncComponent(() => import('@/components/DashFooter.vue'));
</script>
  
  