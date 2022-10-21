
import VuetifyButton from "./VuetifyButton.vue";

export default ({
  title: 'Vuetify Button',
  component: VuetifyButton,
})

const Template = (args, { argTypes }) => ({
  components: { VuetifyButton},
  props: Object.keys(argTypes),
  template: '<VuetifyButton :label="label" />'
});

export const Default = Template.bind({});
Default.args = {
  label: 'HELLO'
}