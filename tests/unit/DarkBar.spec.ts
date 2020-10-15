import { shallowMount } from '@vue/test-utils';
import DarkBar from '@/components/Design/DarkBar.vue';

describe('DarkBar.vue', () => {
  it('renders to screen', () => {
    const wrapper = shallowMount(DarkBar, {});
    expect(wrapper).toBeDefined();
  });
});
