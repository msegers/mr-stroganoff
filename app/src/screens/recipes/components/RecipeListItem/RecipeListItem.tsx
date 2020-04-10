import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Recipe } from "../../../../models/recipe";
import { Styles } from "../../../../static/styles";

// Free to use default image, maybe make our own
const imageUrlNoImages =
  "https://images.unsplash.com/photo-1571767454098-246b94fbcf70?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9";

export const RecipeListItem = ({ name, type, ibu, ebu, alcohol }: Recipe) => {
  return (
    <View style={styles.listItem}>
      <Image style={styles.image} source={{ uri: imageUrlNoImages }} />
      <View style={styles.inImage}>
        <Text style={styles.style}>{type}</Text>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.details}>
        <Detail value={`${ibu}`} label={"ibu"} />
        <View style={styles.separator} />
        <Detail value={`${ebu}`} label={"ebu"} />
        <View style={styles.separator} />
        <Detail value={`${alcohol} %`} label={"alc"} />
      </View>
    </View>
  );
};

const Detail = ({ value, label }: { value: string; label: string }) => {
  return (
    <View style={styles.detail}>
      <Text style={styles.detailValue}>{value}</Text>
      <Text style={styles.detailLabel}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: Styles.gap(2),
    ...Styles.shadow,
  },
  image: {
    position: "relative",
    zIndex: -1,
    width: "100%",
    height: 120,
  },
  inImage: {
    position: "absolute",
    top: Styles.gap(1),
    left: Styles.gap(2),
    right: Styles.gap(2),
    height: 120 - Styles.gap(1),
  },
  style: {
    fontSize: Styles.font.size.regular,
    color: Styles.colors.lighter,
    ...Styles.textShadow,
  },
  title: {
    fontSize: Styles.font.size.heading,
    color: Styles.colors.lighter,
    ...Styles.textShadow,
  },
  separator: {
    height: 32,
    width: 1,
    backgroundColor: Styles.colors.darker,
  },
  details: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  detail: {
    alignItems: "center",
    marginVertical: Styles.gap(1),
    flex: 1,
    flexShrink: 0,
  },
  detailValue: {
    fontSize: Styles.font.size.regular,
  },
  detailLabel: {
    fontSize: Styles.font.size.tiny,
    textTransform: "uppercase",
  },
});
