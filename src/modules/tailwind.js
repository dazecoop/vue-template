
import Vue from 'vue'

import VueTailwind from 'vue-tailwind'

import {
  TInput,
  TTextarea,
  TSelect,
  // TRadio,
  // TCheckbox,
  TButton
  // TInputGroup,
  // TCard,
  // TAlert,
  // TModal,
  // TDropdown,
  // TRichSelect,
  // TPagination,
  // TTag,
  // TRadioGroup,
  // TCheckboxGroup,
  // TTable,
  // TDatepicker,
  // TToggle,
  // TDialog,
} from 'vue-tailwind/dist/components'

// Class's applied to any interactive element
const interactiveFocus = 'focus:outline-none focus:ring focus:border-blue-300';

// Generic class's for all form elements
const formClasses = 'w-full rounded border-gray-400' +
  ' focus:outline-none focus:ring focus:border-blue-300' +
  interactiveFocus

const settings = {
  't-button': {
    component: TButton,
    props: {
      classes: 'btn bg-red-500 hover:bg-red-700 text-white font-bold py-3' +
        ' px-4 w-100 rounded w-full uppercase drop-shadow-md ' +
        interactiveFocus,
    }
  },
  't-input': {
    component: TInput,
    props: {
      classes: formClasses
    }
  },
  't-textarea': {
    component: TTextarea,
    props: {
      classes: formClasses
    }
  },
  't-select': {
    component: TSelect,
    props: {
      classes: formClasses
    }
  }
}

Vue.use(VueTailwind, settings)
