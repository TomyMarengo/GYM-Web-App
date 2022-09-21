import Vue from 'vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#D6FF00',
                secondary: '#343333',
                tertiary: '#1976D2',
            }
        }
    }
});
