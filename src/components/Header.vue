<template>
  <div>
    <v-simple-table fixed-header>
      <thead>
        <tr>
          <th class="text-right">
            <v-btn rounded color="white">Logout</v-btn>
          </th>
        </tr>
      </thead>
    </v-simple-table>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  data: () => ({

  }),
  methods: {
    dashboard() {
      this.$router.push('/');
    }
  }
};
</script>