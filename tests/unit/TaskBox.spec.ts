// @ts-nocheck
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import TaskBox from '@/components/Boxes/TaskBox.vue';
import { CombinedVueInstance } from 'vue/types/vue';
import Vuetify from 'vuetify';

describe('TaskBox.vue', () => {
  let wrapper: Wrapper<CombinedVueInstance<
    { onStatus: boolean } & Record<never, any> & TaskBox,
    object,
    object,
    object,
    Record<never, any>
  >>;
  let localVue;
  let vuetify;
  const title = 'Hello world';

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();

    const App = localVue.component('App', {
      components: { TaskBox },
      data() {
        return { onStatus: false };
      },
      template: `
        <v-app>
          <TaskBox message="${title}" />
        </v-app>
      `,
    });

    wrapper = mount(App, { localVue, vuetify });
    wrapper.setProps({ message: 'hello world' });
  });
  it('renders to screeen', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders task.project.title', () => {
    // console.log(wrapper.html());
    expect(wrapper.find('p').text()).toEqual(title);
  });
  it('should have a data-testid of check-donetask', () => {
    expect(wrapper.find('[data-testid="check-donetask"]').exists()).toBe(true);
  });
  it('renders initially with an icon of mdi-checkbox-blank-outline', () => {
    expect(wrapper.find('.mdi-checkbox-blank-outline').exists()).toBe(true);
  });
  it('should have a data.setStatus attached set to false', () => {
    const data = wrapper.vm.$data;
    expect(data.onStatus).toBeDefined();
    expect(data.onStatus).toBe(false);
  });
  it('renders a changed icon when status changes ie button is pressed to with an icon of mdi-check-box-outline', async done => {
    wrapper.find('[data-testid="check-donetask"]').trigger('click');
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.mdi-check-box-outline').exists()).toBe(true);
    done();
  });
});
