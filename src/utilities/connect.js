import { useContext } from 'preact/hooks';

const mapArrayToProps = (arr) => (obj) => {
  const output = {};
  arr.forEach((key) => {
    const value = obj[key];
    output[key] = value;
  });
  return output;
};

const mapActionsToProps = mapArrayToProps;

const connect = (context, curriedActions) => (Component) => {
  // ConnectHOC = Connect Higher Order Component
  const ConnectHOC = (props) => {
    const { state, actions } = useContext(context);
    const actionsAsProps = curriedActions ? curriedActions(actions) : {};
    return <Component {...props} {...actionsAsProps} state={state} />;
  };
  return ConnectHOC;
};

export { connect, mapActionsToProps };
