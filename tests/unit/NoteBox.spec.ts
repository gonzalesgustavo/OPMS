// @ts-nocheck
import { createLocalVue, mount, Wrapper } from '@vue/test-utils';
import NoteBox from '@/components/Boxes/NoteBox.vue';
import { CombinedVueInstance } from 'vue/types/vue';
import Vuetify from 'vuetify';

describe('NoteBox.vue', () => {
  let wrapper: Wrapper<CombinedVueInstance<
    { onStatus: boolean } & Record<never, any> & NoteBox,
    object,
    object,
    object,
    Record<never, any>
  >>;
  let localVue;
  let vuetify;
  const message = 'this is a sample message';
  const sampleProject = { title: 'Johns Main App', color: '#eeee' };
  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    localVue.filter('initials', (value: string) => {
      if (value) {
        const valArr = value.split(' ');
        const initialsStr = valArr.map(init => {
          return init[0];
        });
        return initialsStr
          .toString()
          .toUpperCase()
          .replace(/,/g, '');
      }
    });
    const App = localVue.component('App', {
      components: { NoteBox },
      data() {
        return { onStatus: false };
      },
      template: `
        <v-app>
          <NoteBox message="${message}" project="${sampleProject}" />
        </v-app>
      `,
    });

    wrapper = mount(App, {
      localVue,
      vuetify,
    });
  });
  it('renders to screeen', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders task.project.title', () => {
    expect(wrapper.find('.notes-body > p').text()).toEqual(message);
  });
  it('renders a edit icon mdi.pencil-outline icon', () => {
    expect(wrapper.find('.mdi-pencil-outline').exists()).toBeTruthy();
  });
  it('renders a close icon mdi.close', () => {
    expect(wrapper.find('.mdi-close').exists()).toBeTruthy();
  });
  it('renders a date to match todays date', async done => {
    const testDate = new Date().toDateString();
    const notebox = wrapper.findComponent(NoteBox);
    await notebox.setProps({ date: testDate });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.date-proj').text()).toEqual(testDate);
    done();
  });
  it('renders an avatar with the sampleProject.title initials', async done => {
    const initialHandler = (value: string): string => {
      const valArr = value.split(' ');
      const initialsStr = valArr.map(init => {
        return init[0];
      });
      return initialsStr
        .toString()
        .toUpperCase()
        .replace(/,/g, '');
    };
    const notebox = wrapper.findComponent(NoteBox);
    await notebox.setProps({ project: sampleProject });
    await wrapper.vm.$nextTick();
    expect(wrapper.find('.v-avatar').text()).toEqual(
      initialHandler(sampleProject.title)
    );
    done();
  });
  // it('should have a data-testid of check-donetask', () => {
  //   expect(wrapper.find('[data-testid="check-donetask"]').exists()).toBe(true);
  // });
  // it('renders initially with an icon of mdi-checkbox-blank-outline', () => {
  //   expect(wrapper.find('.mdi-checkbox-blank-outline').exists()).toBe(true);
  // });
  // it('should have a data.setStatus attached set to false', () => {
  //   const data = wrapper.vm.$data;
  //   expect(data.onStatus).toBeDefined();
  //   expect(data.onStatus).toBe(false);
  // });
  // it('renders a changed icon when status changes ie button is pressed to with an icon of mdi-check-box-outline', async done => {
  //   wrapper.find('[data-testid="check-donetask"]').trigger('click');
  //   await wrapper.vm.$nextTick();
  //   expect(wrapper.find('.mdi-check-box-outline').exists()).toBe(true);
  //   done();
  // });
});
