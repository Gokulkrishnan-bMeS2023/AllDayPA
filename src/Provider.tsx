import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const theme = extendTheme({
  fonts: {
    // heading: `'Staatliches', display`,
    // body: `'Montserrat', sans-serif`,
    heading: `'Roboto', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  breakpoints: {
    base: "0px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1024px",
    "2xl": "1400px",
  },
  components: {
    Container: {
      baseStyle: {
        maxW: {
          base: "540px",
          md: "740px",
          lg: "960px",
          xl: "1010px",
          "2xl": "1465px",
        },
        px: 6,
      },
    },
    Input: {
      baseStyle: {
        field: {
          _disabled: {
            bg: "#eaecf4",
            color: "#6e707e",
            opacity: "1",
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        // color: "#555",
        backgroundColor: "#F5F5F5",
      },
      ":is(h1, h2, h3, h4, h5, h6)": {
        color: "#ee6c4",
      },
    },
  },
});
export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
