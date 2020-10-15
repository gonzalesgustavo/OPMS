import { shallowMount, Wrapper } from '@vue/test-utils';
import TaskBox from '@/components/Boxes/TaskBox.vue';
import { CombinedVueInstance } from 'vue/types/vue';

describe('TaskBox.vue', () => {
  let wrapper: Wrapper<CombinedVueInstance<
    TaskBox,
    object,
    object,
    object,
    Record<never, any>
  >>;
  const tasks = [
    {
      message: 'Update task module.',
      project: {
        title: 'Morgans Danger App',
        color: '#3b9485',
      },
    },
    {
      message: 'Fix jira ticket',
      project: {
        title: 'Morgans Danger App',
        color: '#3b9485',
      },
    },
  ];

  beforeEach(() => {
    wrapper = shallowMount(TaskBox, {
      propsData: { tasks },
      filters: {
        initials(value: string): string {
          const valArr = value.split(' ');
          const initialsStr = valArr.map(init => {
            return init[0];
          });
          return initialsStr
            .toString()
            .toUpperCase()
            .replace(/,/g, '');
        },
        textlimit(value: string, limit: number): string {
          const MaxCount = limit;
          return (
            value.slice(0, MaxCount) + (value.length > MaxCount ? '...' : '')
          );
        },
      },
    });
  });
  it('renders to screeen', () => {
    expect(wrapper).toBeDefined();
  });

  it('renders task.project.title when passed', () => {
    expect(wrapper.text().match('MDA')?.length).toBe(1);
  });
  it('renders task.message when over 15 chars must contain ...', () => {
    const limitTest = (value: string, limit: number): string => {
      const MaxCount = limit;
      return value.slice(0, MaxCount) + (value.length > MaxCount ? '...' : '');
    };
    const dataToTestWith = limitTest(tasks[0].message, 15);
    expect(wrapper.find('h5').text()).toEqual(dataToTestWith);
  });
});
