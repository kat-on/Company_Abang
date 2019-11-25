<template>
  <div>
    <v-simple-table fixed-header>
      <thead>
        <tr>
          <th class="text-left">
            <v-icon @click.stop="drawer = !drawer">fas fa-bars</v-icon>
          </th>
          <th class="text-right">
            <v-btn rounded color="white">Logout</v-btn>
          </th>
        </tr>
      </thead>
    </v-simple-table>
    <v-navigation-drawer height="910" class="overflow-hidden" v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEYUEwHoe6jCtja8EvyKoVmICZj84fN2q5zQpzwddQuyjmU75o&s"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Catalina Car Rentals</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link @click="dashboard()">
          <v-list-item-action>
            <v-icon>fas fa-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>fas fa-user</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="notify()">
          <v-list-item-action>
            <v-icon>fas fa-bell</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Notifications</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>fab fa-product-hunt</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Items</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>fas fa-sticky-note</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Reservation</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="flexall">
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon color="blue">fab fa-facebook</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.theme--light.v-data-table.v-data-table--fixed-header thead th {
  background: #1976d2;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.12);
  height: 88px;
}
.v-list-item--dense,
.v-list--dense .v-list-item {
  min-height: 59px;
}
</style>
<script>
export default {
  data: () => ({
    drawer: true,
    flexall: 6,
    cards: [
      {
        title: "Catalina Car Tours",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdOV2tPnIsNviEpIz9vSh-KQ83GsKVUJBabyB6xwQe-9OAZqMA&s",
       
      },
      {
        title: "Natalie Tours",
        src:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT83qZMNcpMQjrDKTTm0EG9JureWn9qYmwoGn9pPwicqrD5yCIZ&s",
       
      },
      {
        title: "Dream of Cebu",
        src:
          "https://apollo-singapore.akamaized.net/v1/files/zi70nd8jv8lp3-PH/image;s=1000x700;olx-st/_2_.jpg",
      
      },
      {
        title: "MotorCycleCity",
        src:
          "https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/softail/breakout/overview/dom/19-softail-breakout-hero.jpg",
        
      }
    ]
  }),
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    dashboard() {
      this.$router.push("/");
    },
    notify() {
      this.$router.push("/notifications");
    },
    handleResize(){
      if (window.innerWidth < 1200){
        this.flexall = 12
      }else{
        this.flexall = 6
      }
    }
  }
};
</script>