import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/**
 * Standard icons
 */
import {
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faUserSecret,
)

/**
 * Brand icons
 */
import {
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
library.add(
  faGithub,
  faTwitter,
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
