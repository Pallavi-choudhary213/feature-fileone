<template>
  <v-app>
    <!-- Top Navbar -->
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>HR Management Portal</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Sidebar -->
    <v-navigation-drawer v-model="drawer" app class="sidebar">
      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon @click="drawer = !drawer">mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title> Add Employees</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>All Employees</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-clipboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Create Post</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-pencil</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Status</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>My Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>HR Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content Area -->
    <v-main class="dashboardpage">
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {
      drawer: true,
    };
  },
};
</script>

<style>
/* Optional: make content scrollable if needed */
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.dashboardpage {
  background-image: url('@/assets/dashbordpage.png');
  background-size: cover;
  background-position: center;
  height: 90vh;
  widows: 90vh;
  justify-content: center;
  align-items: center;
}

.sidebar {
  background-color: blueviolet;
  width: 250vh;
}
</style>
