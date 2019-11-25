<template>
  <v-app>
    <Header style="margin-top:5%:" v-if="$route.name !== 'login'"></Header>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
