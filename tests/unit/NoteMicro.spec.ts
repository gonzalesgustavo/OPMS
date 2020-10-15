import { shallowMount } from "@vue/test-utils";
import NoteMicro from "@/components/cards/NoteMicro.vue";

describe("NoteMicro.vue", () => {
  it("should contain slot.title == hello world", () => {
    const wrapper = shallowMount(NoteMicro, {
      slots: {
        title: "<p>Hello World</p>"
      }
    });
    expect(wrapper.find("p").text()).toEqual("Hello World");
  });
  it("should contain slot.default == this is the default", () => {
    const wrapper = shallowMount(NoteMicro, {
      slots: {
        default: "<p>this is the default</p>"
      }
    });
    expect(wrapper.find("p").text()).toEqual("this is the default");
  });
});
