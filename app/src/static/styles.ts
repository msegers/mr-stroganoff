
export const Styles = {
  colors: {
    primary: "#fa0",
    lighter: "#fff",
    light: "#888",
    darker: "#000",
  },
  font: {
    size: {
      heading: 32,
      regular: 16,
      large: 20,
      tiny: 12,
    }
  },
  shadow: {
    shadowColor: "#000",
    shadowRadius: 4,
    shadowOpacity: 0.5,
  },
  textShadow: {
    textShadowColor: "#000",
    textShadowRadius: 4,
    textShadowOpacity: 0.5,
  },
  gapSize: 8,
  gap: (amount: number) => amount * Styles.gapSize
}