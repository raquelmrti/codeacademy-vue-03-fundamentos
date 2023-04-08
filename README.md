# My First Vue Project // Fernando Herrera Udemy Course

This is the first project in Fernando Herrera's Udemy Course, [Vue.js: De cero a experto](https://www.udemy.com/course/vuejs-fh/). Here I will log my progress through it and possibly add some notes.

### **07/04/2023:**

- Created `Counter` component and load it into the main page.
- Added a property ('counter: 5') to the data object of the component. The properties in this object are reactive, which means Vue will keep track of any changes to them.
- Added a computed property ('squareCounted'). Computed properties are similar to methods, but they're used to change the presentation of existing data while methods are used to change data itself.
- Added `increase` and `decrease` methods.

### **08/04/2023:**

- Added `title` prop to `Counter`. With props we're able to add variation to repeated components. In this case, the first `Counter` has a title (passed from the parent `App` component), while the second one doesn't.
- Modified the `props` of `Counter`. Instead of an array of strings, we made it an object. In this object, the props can also be objects where we can define their type and other things, such as their default value or if it's even required for them to have a value.
- Added the `start` prop to `Counter`.
  ⚠️ **Note:** In order to pass a value to a prop that's NOT a string, we must use the `v-bind` directive. For example: `<Counter :start="10" />`.
