<template>
  <v-data-table
    :custom-filter="filterOnlyCapsText"
    :headers="headers"
    :items="items"
    :search="search"
    item-value="name"
  >
    <template v-slot:top>
      <v-text-field
        v-model="search"
        class="pa-2"
        label="Search (UPPER CASE ONLY)"
      ></v-text-field>
    </template>
  </v-data-table>
</template>

