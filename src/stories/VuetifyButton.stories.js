import VuetifyButton from "./VuetifyButton.vue";

export default {
  title: "Vuetify Button",
  component: VuetifyButton,
};

const Template = (args, { argTypes }) => ({
  components: { VuetifyButton },
  args: {
    label: 'Default'
  },
  template: `<VuetifyButton :label="label" />`,
});

export const Primary = Template.bind({});
export const PrimaryHello = Template.bind({});
PrimaryHello.args = {
  label: 'HELLO!'
}