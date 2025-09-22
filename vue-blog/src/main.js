import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// 🔹 Font Awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import the specific icons you want
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

// Add them to the library
library.add(faLinkedin, faGithub)

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

// 🔹 Register the <font-awesome-icon> component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(vuetify)
app.use(router)
app.mount('#app')
