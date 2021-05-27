import React from "react";
import { useAtom, atom } from "react-atomic-state";
import { View, Text } from "react-native";
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";
import { withTheme } from "react-native-paper";

export const snaks = atom([]);

export const nomadeF = (f, data = []) => {
  return data.map((item, index) => {
    return f(data);
  });
};

// todo
// first copy then  display then  update 

// export const RenderSepaators = ()=>{

// }

export const DisplayCLips = (props) => (
  <FlatList
    style={{ flex: 1 }}
    renderItem={({ item ,index,separators}) => item}
    {...props}
    keyExtractor={(item, index) => `${index}`}
  />
);

export const Clip = (props) => {
  const copy = () => {
    const { children } = props;
    const humanReadableChildren = React.Children.toArray(children); // return human readable children
    snaks.set((prev) => [humanReadableChildren, ...prev]);
  };
  return (
    <TouchableHighlight onPress={copy}>{props.children}</TouchableHighlight>
  );
};

export const useClips = () => useAtom(snaks);
export default withTheme(Clip)
