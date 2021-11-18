import Logo from "./Logo";

const Stories = {
  title: "Logo",
  component: Logo,
};

export default Stories;

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
};
