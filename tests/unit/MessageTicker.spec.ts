import { shallowMount, Wrapper } from '@vue/test-utils';
import { CombinedVueInstance } from 'vue/types/vue';
import MessageTicker from '@/components/Boxes/MessageTicker.vue';

jest.spyOn(console, 'error').mockImplementation();

describe('MessageTicker.vue', () => {
  let wrapper: Wrapper<CombinedVueInstance<
    MessageTicker,
    object,
    object,
    object,
    Record<never, any>
  >>;
  const title = 'Sample Title Here';
  const message = 'This is a sample message';
  const sender = '@tester';

  beforeEach(() => {
    wrapper = shallowMount(MessageTicker, {});
    wrapper.setProps({ title, msg: message, sender });
  });
  it('renders to screen', () => {
    expect(wrapper).toBeDefined();
  });
  it('renders a title matching the title above', () => {
    expect(wrapper.find('span').text()).toEqual(title);
  });
  it('renders subtext that matches above subtext', () => {
    expect(wrapper.find('.t-box').text()).toEqual(`"${message}"`);
  });
  it('renders the senders username (sender)', () => {
    expect(wrapper.find('[data-testid="messageticker-sender"]').text()).toEqual(
      sender
    );
  });
});
