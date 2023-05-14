import { shallowMount } from "@vue/test-utils"
import Counter from "@/components/Counter"

describe("Counter Component", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Counter)
  })

  // test("Must match with snapshot", () => {
  //   const wrapper = shallowMount(Counter)
  //   expect(wrapper.html()).toMatchSnapshot()
  // })

  test("h2 should have default value 'Counter'", () => {
    //find will find the first h2, if I had multiple h2 elements
    //I could use findAll
    expect(wrapper.find("h2").exists()).toBeTruthy()

    const h2Value = wrapper.find("h2").text()
    expect(h2Value).toBe("Counter!!")
  })

  test("default value should be 100 in p", () => {
    const value = wrapper.find("[data-testid='counter']").text()
    // console.log(pTags[1].text())
    expect(value).toBe("100")
  })

  test("counter value should increase and decrease by 1", async () => {
    const [increaseBtn, decreaseBtn] = wrapper.findAll("button")

    await increaseBtn.trigger("click")
    await increaseBtn.trigger("click")
    await increaseBtn.trigger("click")

    await decreaseBtn.trigger("click")
    await decreaseBtn.trigger("click")

    const value = wrapper.find("[data-testid='counter']").text()

    expect(value).toBe("101")
  })

  test("should set default value", () => {
    const { start } = wrapper.props()
    const value = wrapper.find("[data-testid='counter']").text()

    expect(Number(value)).toBe(start)
  })

  test("should show the title prop", () => {
    const title = "Hola Mundo"
    const wrapper = shallowMount(Counter, {
      props: {
        title,
        // start: "5"
      },
    })

    const value = wrapper.find("h2").text()

    expect(value).toBe("Hola Mundo!!")
  })
})
