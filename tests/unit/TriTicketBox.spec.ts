// @ts-nocheck
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import TriTicketContainer from '@/components/Containers/TriTicketBox.container.vue';
import { CombinedVueInstance } from 'vue/types/vue';
import Vuetify from 'vuetify';

describe('TriTicketBox.vue', () => {
  let wrapper: Wrapper<CombinedVueInstance<
    {} & Record<never, any> & TriTicketContainer,
    object,
    object,
    object,
    Record<never, any>
  >>;
  let localVue;
  let vuetify;
  const rightslot = 'right';
  const leftslot = 'left';
  const centerslot = 'center';

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();

    const App = localVue.component('App', {
      components: { TriTicketContainer },
      template: `
        <v-app>
          <TriTicketContainer>
            <p slot="right">${rightslot}</p> 
            <h1 slot="left">${leftslot}</h1> 
            <h2 slot="center">${centerslot}</h2> 
          </TriTicketContainer>
        </v-app>
      `,
    });

    wrapper = mount(App, { localVue, vuetify });
  });
  it('renders to screeen', () => {
    expect(wrapper).toBeDefined();
  });
  it('renders a p tag in slot.right', () => {
    expect(wrapper.find('p').text()).toEqual(rightslot);
  });
  it('renders a h1 tag in slot.left', () => {
    expect(wrapper.find('h1').text()).toEqual(leftslot);
  });
  it('renders a h2 tag in slot.center', () => {
    expect(wrapper.find('h2').text()).toEqual(centerslot);
  });
});
