<template>
  <div>
      <v-dialog v-model="dialog_add_student">
    <v-container>
      <!-- <v-row>
        <v-col cols="4" class="mt-6 ml-10">
          <span style="font-size: 30px" class="color-font">Operators</span>
        </v-col>
      </v-row> -->
      <v-row>
        <v-col class="ml-14">
          <v-card>
            <v-card-title>
                <v-col cols="11">
              <v-text-field
                v-model="search"
                prepend-inner-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field></v-col>
              <v-col cols="1">
              <v-btn color="yellow" class="white--text" small @click="dialog_add_student = false">Done</v-btn>
              </v-col>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="items"
              :search="search"
              class="elevation-1"
            >
              <!-- <template v-slot:header.add_operator="{ header }">
                {{ header.text }}
                <v-btn color="yellow" class="white--text" small>Add Operator</v-btn>
              </template> -->
              <template v-slot:item.add_operator>
                <v-btn
                  x-small
                  color="blue"
                  @click="openDialog_add_new_operator()"
                  ><v-icon color="white" small>mdi-plus</v-icon></v-btn
                >
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <deleteOperator ref="delete_operator"></deleteOperator>
    <addNewOperator ref="add_operator"></addNewOperator>
      </v-dialog>
  </div>
</template>

<script>
import deleteOperator from '../components/DialogDelete.vue';
import addNewOperator from '../components/DialogAddOperator.vue'
import axios from "axios";

export default {
  data() {
    return {
        search: "",
        dialog_add_student: false,
     items:[]
    };
  },
  components: {
    deleteOperator,
    addNewOperator
  },
  computed: {
    headers() {
      return [
        {
          text: "Name",
          value: "name",
          align: "center",
          sortable: false,
          width: "350"
        },
        {
          text: "One Email",
          value: "one_email",
          align: "center",
          sortable: false,
          width: "400"
        },
        {
          text: "",
          value: "add_operator",
          align: "center",
          sortable: false,
        },
      ];
    },
  },
  mounted(){
    this.get_student()
  },
  methods: {
    openDialog_add_new_operator(){
      this.$refs.add_operator.openDialog_add_new_operator()
    },
    openDialog_add_student(){
        this.dialog_add_student = true
    },
    get_student(){
      axios.get(this.$store.state.url_get_API_axios + "/api/v1/admin/users/student_information",{
        headers: {
              Authorization: this.$store.state.user_token,
            },
      }).then((response) => {
        console.log(response);
        this.items = response.data.data
      })

    }
  }
};
</script>