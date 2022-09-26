import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',

  component: SectionContainer,

  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illo
          rerum tenetur delectus incidunt nulla blanditiis consequatur quisquam
          possimus. Ratione laudantium possimus voluptas et officiis dolorum
          officia eius id ea!
        </p>
      </div>
    ),
  },

  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
