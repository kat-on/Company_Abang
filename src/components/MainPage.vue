<template>
  <v-card class="d-inline-block mx-auto">
    <v-container>
      <v-row justify="space-between">
        <v-col cols="auto">
          <v-img
            height="250"
            width="300"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5n7aZgbqT4cCtgMxQqDk3nw5Nht5fR4BbzGsIrP8k877smse&s"
          ></v-img>
        </v-col>
        <v-col class="mb-3">
          <h1>FNDSajufasdf</h1>
          <v-btn class="primary" @click="edit()">Edit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    edit() {
      this.$router.push("/Login");
    }
  }
};
</script>
<style scoped>
.container {
  border: #1976d2 3px solid;
  margin-top: 20px;
  width: 450%;
  margin-left: 10px;
}
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  border-radius: 4px;
  width: 146%;
  margin-top: 50px;
}
.row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    margin-right: -12px;
    margin-left: -12px;
    margin-top: 50px;
}

</style>