<template>
    <v-container fluid>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">Contato</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-xs>
                <v-layout wrap>
                  <v-flex xs12>
                    <v-text-field v-model="contato.name" label="Nome"></v-text-field>
                    <v-text-field v-model="contato.email" label="Email"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click.native="dialog=false">Fechar</v-btn>
              <v-btn color="blue darken-1" flat @click.native="save">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-btn color="primary" dark class="mb-2" @click="dialog = true" >Novo Contato</v-btn>
        <v-slide-y-transition mode="out-in">
            <v-data-table :headers="headers" :items="contatos" hide-actions>
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.email }}</td>
                    <td>
                      <v-btn icon class="mx-0" @click="edit(props.item)">
                        <v-icon color="teal">edit</v-icon>
                      </v-btn>
                      <v-btn icon class="mx-0" @click="remove(props.item)">
                        <v-icon color="pink">delete</v-icon>
                      </v-btn>
                    </td>
                </template>
            </v-data-table>
        </v-slide-y-transition>
    </v-container>
</template>
<script>
export default {
  computed: {
    contatos () {
      return this.$store.getters.contatos
    }
  },
  data: () => ({
    dialog: false,
    contato: {
      name: null,
      email: null
    },
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'E-mail', value: 'email' },
      { text: 'Ação', sortable: false }
    ]
  }),

  methods: {
    initialize () {
      this.$store.dispatch('findAllContatos', {})
    },
    edit (item) {
      this.contato = item
      this.dialog = true
    },
    remove (item) {
      console.log(item)
      confirm('Deseja realmante excluir o contato?') && this.$store.dispatch('deleteContato', item)
    },
    save () {
      this.$store.dispatch('saveContato', this.contato)
        .then((response) => {
          this.dialog = false
        })
    }
  },

  created () {
    this.initialize()
  }
}
</script>
