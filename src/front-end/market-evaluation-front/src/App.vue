<template>
  <github-corner></github-corner>
  <main>
    <v-container style="max-width: 920px">
      <v-row class="mt-5">
        <v-col md="8" cols="12">
          <h1 class="text-h2 font-weight-black mb-5">Market Evaluator</h1>
          <p class="text-subtitle-1 mb-2">
            Quick way to evaluate a market on scale from 0 - 100 %.
          </p>

          <p class="text-body-2 mt-2">
            Adapted from
            <a href="https://personalmba.com/10-ways-to-evaluate-a-market/"
              >Personal MBA</a
            >
            by Josh Kaufman
          </p>
        </v-col>
        <v-col md="4" cols="12">
          <settings @sliders-toggled="onSlidersToggled"></settings>
        </v-col>
        <v-divider class="mt-3 mb-5"></v-divider>
      </v-row>

      <v-row v-if="!processing && result === null">
        <v-col cols="12">
          <v-banner
            style="max-width: 680px; margin: 0 auto"
            icon="mdi-information"
            text="Rate 10 factors below on a scale from 0 to 10. Zero means extremely
            unattractive, while 10 means extremely attractive. Remaining
            conservative is advised when in doubt."
            color="info"
          >
          </v-banner>
          <v-banner
            v-if="sliders"
            style="max-width: 680px; margin: 0 auto"
            color="error"
            icon="mdi-alert-circle-outline"
            text="Currently knobs of the sliders do not move. The values are registered correctly. This is a known bug that is an issue in Vuetify library."
          ></v-banner>
        </v-col>
        <v-scale-transition v-for="el in criteria" :key="el.name">
          <v-col cols="12" md="6">
            <v-text-field
              v-if="!sliders"
              v-model="el.input"
              clearable
              type="number"
              :prepend-inner-icon="el.icon"
              :label="el.name"
              :rules="[rules.required, rules.restricted]"
              :color="
                !rules.required && !rules.restricted ? 'error' : 'success'
              "
              hint="Provide number from 0 to 10"
            >
              <template v-slot:append>
                <v-tooltip location="bottom">
                  <template v-slot:activator="{ props }">
                    <v-icon
                      v-bind="props"
                      icon="mdi-help-circle-outline"
                    ></v-icon>
                  </template>
                  {{ el.description }}
                </v-tooltip>
              </template>
            </v-text-field>
            <div v-if="sliders">
              <div class="text-caption">
                {{ el.name }}
                <strong>{{
                  el.input !== undefined ? `: ${el.input.toFixed(2)}` : ""
                }}</strong>
              </div>
              <v-slider
                v-model="el.input"
                color="blue"
                track-color="grey"
                :prepend-icon="el.icon"
                :max="10"
                :min="0"
              >
                <template v-slot:append>
                  <v-tooltip location="bottom">
                    <template v-slot:activator="{ props }">
                      <v-icon
                        v-bind="props"
                        icon="mdi-help-circle-outline"
                      ></v-icon>
                    </template>
                    {{ el.description }}
                  </v-tooltip>
                </template>
              </v-slider>
            </div>
          </v-col>
        </v-scale-transition>
      </v-row>

      <v-row v-if="!processing && result === null" class="justify-center">
        <v-btn
          :disabled="!allFilled"
          color="primary"
          size="x-large"
          prepend-icon="mdi-send-circle"
          @click="handleSubmit"
        >
          Evaluate
          <template v-slot:loader>
            <span class="custom-loader">
              <v-icon light>mdi-cached</v-icon>
            </span>
          </template>
        </v-btn>
      </v-row>

      <v-row v-if="processing" class="justify-center">
        <v-progress-circular
          indeterminate
          color="primary"
          size="64"
        ></v-progress-circular>
      </v-row>

      <v-row v-if="!processing && result !== null" class="justify-center">
        <v-col cols="12">
          <h2>Market Evaluation Result : {{ result }}%</h2>
        </v-col>
        <v-col cols="12">
          <v-btn
            prepend-icon="mdi-restart"
            color="primary"
            @click="handleCleanUp"
            >New Evaluation</v-btn
          ></v-col
        >
      </v-row>
    </v-container>
  </main>
</template>

<script lang="ts">
import GithubCorner from "./components/GithubCorner.vue";
import Settings from "./components/Settings.vue";
import { criteriaValues } from "./criteria.ts";

export default {
  components: { GithubCorner, Settings },
  data: () => {
    return {
      rules: {
        required: (value) => !!value || "This field is required",
        restricted: (v) =>
          (Number(v) <= 10 && Number(v) >= 0) || "Provide number from 0 to 10",
      },
      processing: false,
      sliders: false,
      result: null,
      verdict: null,
      criteria: criteriaValues,
    };
  },
  methods: {
    handleProcess() {
      this.processing = true;
      let sum: number = 0;
      this.criteria.forEach((el) => {
        sum += Number(el.input);
      });
      this.result = (sum / this.criteria.length) * 10;
      this.processing = false;

      // setTimeout(() => {
      //   this.processing = false;
      // }, 2000);
    },
    onSlidersToggled(sliders) {
      this.sliders = sliders;
    },
    handleSubmit() {
      const data = this.criteria.map((el) => {
        return {
          name: el.name,
          value: el.input,
        };
      });
      console.log(JSON.stringify(data));
      this.handleProcess();
    },
    handleCleanUp() {
      this.result = null;
      this.criteria.forEach((el) => {
        el.input = null;
      });
    },
  },
  computed: {
    allFilled(): boolean {
      return this.criteria.every(
        (el) => el.input !== undefined && el.input !== null
      );
    },
  },
};
</script>

<style>
main {
  min-height: calc(100vh - 250px);
}
</style>

