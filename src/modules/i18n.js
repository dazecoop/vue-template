import Vue from 'vue'
import router from '../router'

/**
 * Vue i18n language support
 * @source https://kazupon.github.io/vue-i18n/
 */
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

/**
 * Import all language locales in JSON format
 */
let messages = {};
const availableLocales = ['en'];
availableLocales.forEach((loc) => {
  messages[loc] = require(`../locales/${loc}.json`);
});

/**
 * Globally available list of languages
 */
const languages = [
  {
    value: 'en',
    text: 'English'
  },
];
Vue.prototype.$languages = languages;

// Default language
const fallbackLocale = 'en';
let locale = fallbackLocale;

// Detect users language
let userLanguage = window.navigator.userLanguage || window.navigator.language;
userLanguage = userLanguage.substr(0, 2);

// If users language exists in our locates, redirect to show them the correct language
// only if locale doesn't already exist in URL
const langs = languages.map((e) => e.value);
if (langs.includes(userLanguage)) {
  locale = userLanguage;
}

// Create VueI18n instance with options
export const i18n = new VueI18n({
  locale,
  fallbackLocale,
  messages, // set locale messages
})
