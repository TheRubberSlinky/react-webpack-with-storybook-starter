import React from "react";

interface Props {
  repeat?: Number;
  children?: any;
}

const Repeater: React.FC<Props> = ({ children = null, repeat = 1 }) => {
  const getRepeat = () => {
    var list = [];

    for (let i = 0; i < repeat; i++) {
      list.push(children);
    }

    return list;
  };

  return <>{getRepeat()}</>;
};

export default Repeater;
