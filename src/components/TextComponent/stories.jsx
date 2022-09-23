import { TextComponent } from './index';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui possimus, praesentium, velit facere dolorum quo beatae commodi corrupti eius ipsum incidunt optio officia doloribus libero iure dolores numquam id. Harum?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
