<template>
  <v-app>
    <v-navigation-drawer app absolute :mini-variant="mini" v-model="drawer" :fixed="fixed">
      <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Agenda
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile :to="{name: 'Contato'}">
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contato</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'Atividade'}">
          <v-list-tile-action>
            <v-icon>date_range</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Atividades</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile :to="{name: 'Config'}">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Configuração</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="hidden-md-and-up"
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon  @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title hidden-sm-and-down v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      mini: false,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: false,
      rightDrawer: false,
      title: 'Agenda de Contatos'
    }
  },
  name: 'App'
}
</script>
