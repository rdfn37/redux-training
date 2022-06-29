// Import redux methods
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Import Redux Actions
import { Actions } from "../../states/CounterState";
import Counter from "./Counter";

// Define Mapping Functions
const mapStateToProps = (state) => ({
  currentValue: state["redux-test"].counter.currentValue,
  // ---------
});

const mapDispatchToProps = (dispatch) => ({
  // Note: the plugin's sample code uses a function called bindActionCreators here
  // For the sake of clarity, we're using the dispatch function directly here
  increment: bindActionCreators(Actions.increment, dispatch),
  // ------------
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
