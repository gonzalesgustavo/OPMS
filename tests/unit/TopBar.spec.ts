// @ts-nocheck
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import TopBar from '@/components/Menus/TopBar.vue';
import { CombinedVueInstance } from 'vue/types/vue';
import Vuetify from 'vuetify';

describe('TopBar.vue', () => {
  let wrapper: Wrapper<CombinedVueInstance<
    {} & Record<never, any> & TopBar,
    object,
    object,
    object,
    Record<never, any>
  >>;
  let localVue;
  let vuetify;
  const icon = 'mdi-plus';
  const title = 'Adder';

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();

    const App = localVue.component('App', {
      components: { TopBar },
      template: `
        <v-app>
          <TopBar>
            <h2 slot="title">${title}</h2>
            <v-icon>${icon}</v-icon>
          </TopBar>
        </v-app>
      `,
    });

    wrapper = mount(App, { localVue, vuetify });
  });
  it('renders to screeen', () => {
    expect(wrapper).toBeDefined();
  });
  it('renders a plus icon', () => {
    expect(wrapper.find('.mdi-plus').exists()).toBeTruthy();
  });
  it(`renders a title that matches ${title}`, () => {
    const foundTitle = wrapper.find('h2');
    expect(foundTitle.exists()).toBeTruthy();
    expect(foundTitle.text()).toEqual(title);
  });
});