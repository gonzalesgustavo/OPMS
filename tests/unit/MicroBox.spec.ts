import { shallowMount } from "@vue/test-utils";
import MicroBox from "@/components/cards/MicroBox.vue";

describe("MicroBox.vue", () => {
  it("renders props.title when passed", () => {
    const title = "new title";
    const wrapper = shallowMount(MicroBox, {
      propsData: { title }
    });
    expect(wrapper.text()).toMatch(title);
  });
  it("renders props.title when over 20 chars must contain ...", () => {
    const limitTest = (value: string): string => {
      const MaxCount = 20;
      return value.slice(0, MaxCount) + (value.length > MaxCount ? "..." : "");
    };
    const title = "new title isparatorator";
    const wrapper = shallowMount(MicroBox, {
      propsData: { title }
    });
    expect(wrapper.text()).toMatch(limitTest(title));
  });
});
