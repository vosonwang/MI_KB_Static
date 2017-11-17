<style scoped>
    @import 'styles/common.css';
</style>
<template>
    <div class="layout">
        <Menu mode="horizontal"  active-name="1">
            <div class="layout-assistant">
                <router-link :to="{ name: 'organizer'}">
                    <MenuItem name="1" style="height: 60px">{{ $t("index.organizer") }}</MenuItem>
                </router-link>
                <router-link :to="{ name: 'exhibitor'}">
                    <MenuItem name="2" style="height: 60px">{{ $t("index.exhibitor") }}</MenuItem>
                </router-link>
                <router-link :to="{ name: 'visitor'}">
                    <MenuItem name="3" style="height: 60px">{{ $t("index.visitor") }}</MenuItem>
                </router-link>
            </div>
        </Menu>
        <router-view></router-view>
        <div class="layout-copy">
            2017-2022 &copy; MesseInfor
        </div>
    </div>
</template>
<script>
    export default {}
</script>
