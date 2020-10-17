<template>
  <div>
    <v-container>
      <v-row justify="space-around">
        <v-card width="400" @click="navigate()">
          <v-img
            height="200px"
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          >
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <v-menu offset-y class="ml-3">
                <template v-slot:activator="{ on, attrs }">
                  <v-app-bar-nav-icon
                    color="white"
                    v-bind="attrs"
                    v-ripple="false"
                    v-on="on"
                  ></v-app-bar-nav-icon>
                </template>
                <v-list>
                  <v-list-item>
                    <v-icon color="primary" size="44">
                      mdi-car-pickup
                    </v-icon>
                  </v-list-item>
                  <v-list-item>
                    <v-icon color="primary" size="44">
                      mdi-dump-truck
                    </v-icon>
                  </v-list-item>
                  <v-list-item>
                    <v-icon color="red lighten-1" size="44">
                      mdi-trash-can
                    </v-icon>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-toolbar-title class="title white--text pl-0">
                Project
              </v-toolbar-title>

              <v-spacer></v-spacer>
            </v-app-bar>

            <v-card-title class="white--text mt-8">
              <v-avatar size="56">
                <img
                  alt="user"
                  src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
                />
              </v-avatar>
              <p class="ml-3">
                {{ username }}
              </p>
            </v-card-title>
          </v-img>

          <v-card-text>
            <div style="text-align: center;">
              <h1>{{ title }}</h1>
            </div>
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class ProjectBox extends Vue {
  @Prop({ required: true }) title!: string;
  @Prop() username!: string;
  navigate(): void {
    this.$router.push({
      name: 'ProjectHome',
      params: {
        id: '122jkdjd8i1',
      },
    });
  }
}
</script>
