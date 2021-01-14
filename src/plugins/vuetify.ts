import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import VueSplit from 'vue-split-panel';

Vue.use(VueSplit)

Vue.use(Vuetify);

export default new Vuetify({
    theme: { dark: true },
});
