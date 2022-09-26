import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, totam
        asperiores eos nesciunt beatae, itaque rem doloremque veniam unde iusto,
        quasi reiciendis placeat aspernatur. Temporibus eligendi nulla
        blanditiis quidem. Voluptatem!
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, totam
        asperiores eos nesciunt beatae, itaque rem doloremque veniam unde iusto,
        quasi reiciendis placeat aspernatur. Temporibus eligendi nulla
        blanditiis quidem. Voluptatem!
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, totam
        asperiores eos nesciunt beatae, itaque rem doloremque veniam unde iusto,
        quasi reiciendis placeat aspernatur. Temporibus eligendi nulla
        blanditiis quidem. Voluptatem!
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, totam
        asperiores eos nesciunt beatae, itaque rem doloremque veniam unde iusto,
        quasi reiciendis placeat aspernatur. Temporibus eligendi nulla
        blanditiis quidem. Voluptatem!
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, totam
        asperiores eos nesciunt beatae, itaque rem doloremque veniam unde iusto,
        quasi reiciendis placeat aspernatur. Temporibus eligendi nulla
        blanditiis quidem. Voluptatem!
      </p>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, totam
        asperiores eos nesciunt beatae, itaque rem doloremque veniam unde iusto,
        quasi reiciendis placeat aspernatur. Temporibus eligendi nulla
        blanditiis quidem. Voluptatem!
      </p>
      <GoTop {...args} />
    </div>
  );
};
