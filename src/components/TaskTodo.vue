<template>
    <v-flex xs3>
        <v-card dark color="secondary" class="mb-3">
          <v-card-text class="px-0"> TODO</v-card-text>
        </v-card>
        <v-card>
          <v-container fluid grid-list-lg>
            <v-layout row wrap v-for="(onetask, i) in task" :key="`${i}`">
              <v-flex v-if="onetask.status === 1" xs12>
                <v-card color="light-blue lighten-3" class="white--text">
                  <v-card-title primary-title>
                    <div class="headline">{{ onetask.title }}</div>
                  </v-card-title>
                  <v-layout justify-center class="py-3">
                      <v-btn small color="blue-grey lighten-3" v-on:click="updateTask(onetask.taskId, 0)">
                          Backlog
                      </v-btn>
                      <v-btn small color="orange lighten-2" v-on:click="updateTask(onetask.taskId, 2)">
                          Doing
                      </v-btn>
                    </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'updateTaskStatus'
    ]),
    updateTask: function(taskId, status) {
        let payload = {
          taskId: taskId,
          statusChange: status
        }

        this.updateTaskStatus(payload)
    }
  },
  computed: {
    ...mapState([
      'task'
    ])
  }
}
</script>