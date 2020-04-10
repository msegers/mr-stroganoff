import React, { useContext } from "react";
import { ScreenNavigationProp } from "../../navigation/AppNavigator";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { FermentableContext } from "../../context/fermentable/fermentable.context";

type FermentablesProps = {
  navigation: ScreenNavigationProp<"Fermentables">;
};

export function Fermentables({ navigation }: FermentablesProps) {
  const { items, status, load } = useContext(FermentableContext);

  return (
    <View>
      <FlatList
        data={items.map(item => ({...items, key: item.id}))}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
}
