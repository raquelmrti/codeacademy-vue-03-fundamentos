# My First Vue Project // Fernando Herrera Udemy Course

This is the first project in Fernando Herrera's Udemy Course, [Vue.js: De cero a experto](https://www.udemy.com/course/vuejs-fh/). Here I will log my progress through it and possibly add some notes.

### **07/04/2023:**

- Create `Counter` component and load it into the main page.
- Add a property ('counter: 5') to the data object of the component. The properties in this object are reactive, which means Vue will keep track of any changes to them.
- Add a computed property ('squareCounted'). Computed properties are similar to methods, but they're used to change the presentation of existing data while methods are used to change data itself.
- Add `increase` and `decrease` methods.

### **08/04/2023:**

- Add `title` prop to `Counter`. With props we're able to add variation to repeated components. In this case, the first `Counter` has a title (passed from the parent `App` component), while the second one doesn't.
