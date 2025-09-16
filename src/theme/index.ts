export const theme = {
  colors: {
    primary: "#007AFF",
    secondary: "#5856D6",
    success: "#34C759",
    danger: "#FF3B30",
    warning: "#FF9500",
    info: "#5856D6",
    light: "#F2F2F7",
    dark: "#1C1C1E",
    white: "#FFFFFF",
    black: "#000000",
    gray: {
      100: "#F2F2F7",
      200: "#E5E5EA",
      300: "#D1D1D6",
      400: "#C7C7CC",
      500: "#AEAEB2",
      600: "#8E8E93",
      700: "#636366",
      800: "#48484A",
      900: "#3A3A3C",
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: "bold" as const,
    },
    h2: {
      fontSize: 24,
      fontWeight: "bold" as const,
    },
    h3: {
      fontSize: 20,
      fontWeight: "600" as const,
    },
    body: {
      fontSize: 16,
    },
    caption: {
      fontSize: 14,
      color: "#666",
    },
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  },
  shadows: {
    sm: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
      elevation: 1,
    },
    md: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  },
};
