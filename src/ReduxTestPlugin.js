import React from "react";
import { VERSION } from "@twilio/flex-ui";
import { FlexPlugin } from "@twilio/flex-plugin";

import CustomTaskListContainer from "./components/CustomTaskList/CustomTaskList.Container";
import reducers, { namespace } from "./states";
// import App from "./components/App/App";
// import TestButton from './components/testButton/testButton';

// import Counter from "./components/Counter/Counter";
import CounterContainer from "./components/Counter/Counter.Container";

const PLUGIN_NAME = "ReduxTestPlugin";

export default class ReduxTestPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  async init(flex, manager) {
    this.registerReducers(manager);

    const options = { sortOrder: -1 };
    flex.AgentDesktopView.Panel1.Content.add(
      <CustomTaskListContainer key="ReduxTestPlugin-component" />,
      options
    );

    // flex.CRMContainer.Content.replace(<TestButton key='test'/>)
    flex.CRMContainer.Content.replace(<CounterContainer key='CounterCointainer'/>, options)
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  registerReducers(manager) {
    if (!manager.store.addReducer) {
      // eslint-disable-next-line
      console.error(
        `You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${VERSION}`
      );
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
