import React, { useContext } from "react";
import { ScreenNavigationProp } from "../../navigation/AppNavigator";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { FermentableContext } from "../../context/fermentable/fermentable.context";

type FermentablesProps = {
  navigation: ScreenNavigationProp<"Fermentables">;
};

export const Fermentables = ({ navigation }: FermentablesProps) => {
  const { items, status, load } = useContext(FermentableContext);

  return (
    <View>
      {items.length === 0 && <Text>Er zijn geen vergistbaren beschikbaar</Text>}
      <FlatList
        data={items.map(item => ({ ...item, key: item.id }))}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
      <Button title="Vergistbare toevoegen" onPress={() => {
        navigation.push('FermentablesForm');
      }} />
    </View>
  );
}
