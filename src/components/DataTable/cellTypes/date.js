import moment from "moment";

export default {
  props: {
    value: {
      type: String,
    },
    format: {
      type: String,
    },
  },
  computed: {
    formattedDate() {
      return moment(this.value, "YYYY-MM-DD").format(this.format);
    },
  },
  render() {
    return <span>{this.formattedDate}</span>;
  },
};