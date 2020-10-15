import { shallowMount, Wrapper } from '@vue/test-utils';
import Slug from '@/components/Design/Slug.vue';
import { CombinedVueInstance } from 'vue/types/vue';

jest.spyOn(console, 'error').mockImplementation();

describe('Slug.vue', () => {
  let wrapper: Wrapper<CombinedVueInstance<
    Slug,
    object,
    object,
    object,
    Record<never, any>
  >>;
  const title = 'Sample Title Here';
  const subtext = 'This is some sample subtext';

  beforeEach(() => {
    wrapper = shallowMount(Slug, {});
    wrapper.setProps({ title, subtext });
  });
  it('renders to screen', () => {
    expect(wrapper).toBeDefined();
  });
  it('renders a title matching the title above', () => {
    expect(wrapper.find('h1').text()).toEqual(title);
  });
  it('renders subtext that matches above subtext', () => {
    expect(wrapper.find('h5').text()).toEqual(subtext);
  });
});
