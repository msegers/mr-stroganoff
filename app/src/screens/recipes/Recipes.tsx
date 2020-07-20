import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import { SearchBar } from "react-native-elements";
import { Styles } from "../../static/styles";
import { FlatList } from "react-native-gesture-handler";
import { RecipeContext } from "../../context/recipe/recipe.context";
import { useDebounce } from "use-debounce";
import { RecipeListItem } from "./components/RecipeListItem/RecipeListItem";
import { ScreenNavigationProp } from "../../navigation/AppNavigator";
import { ContextStatus } from "../../context/status";

type RecipesProps = {
  navigation: ScreenNavigationProp<'Recipes'>;
}

export const Recipes = ({navigation}: RecipesProps) => {
  const { recipes, status, search } = useContext(RecipeContext);
  const [searchTerm, setSearch] = useState("");
  const [query] = useDebounce(searchTerm, 450);

  useEffect(() => {
    search({ query });
  }, [query]);

  return (
    <View style={styles.container}>
      <SearchBar
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.inputContainer}
        placeholder="Zoek naar recepten"
        onChangeText={setSearch}
        value={searchTerm}
        showLoading={status === ContextStatus.LOAD}
        loadingProps={{ color: Styles.colors.darker }}
      />
      <FlatList
        style={styles.list}
        data={recipes.map((recipe) => ({ ...recipe, key: String(recipe.id) }))}
        renderItem={({ item }) => <RecipeListItem {...item} />}
      />
      <Button title="Tijdelijke fermentable knop" onPress={() => {
        console.log('verry mentable');
        navigation.push('Fermentables');
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  searchBarContainer: {
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    backgroundColor: "transparent",
    alignSelf: "stretch",
    margin: Styles.gap(2),
    ...Styles.shadow,
  },
  inputContainer: {
    backgroundColor: "transparent",
  },
  list: {
    paddingHorizontal: Styles.gap(2),
  },
});
