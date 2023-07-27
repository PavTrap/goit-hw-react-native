// import { Dimensions, StyleSheet } from "react-native";
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   bgContainer: {
//     width: "100%",
//     height: "100%",

//     flexDirection: "row",
//     alignItems: "flex-end",

//     resizeMode: "cover",
//     justifyContent: "center",
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
//   keyboardView: {
//     width: "100%",
//   },
//   contentWrapper: {
//     paddingHorizontal: 16,

//     width: "100%",
//     backgroundColor: "#fff",
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
//     paddingBottom: 32,
//     //  height: "60.22%",
//   },
//   title: {
//     fontFamily: "Roboto",
//     fontStyle: "normal",
//     fontWeight: 500,
//     fontSize: 30,
//     lineHeight: 35,
//     textAlign: "center",

//     marginTop: 32,
//     marginBottom: 32,
//     color: "#212121",
//   },
//   input: {
//     height: 50,
//     fontSize: 16,
//     padding: 16,
//     marginBottom: 16,

//     color: "#212121",
//     backgroundColor: "#f6f6f6",

//     borderWidth: 1,
//     borderColor: "#e8e8e8",
//     borderRadius: 8,
//   },
//   inputLast: {
//     marginBottom: 0,
//   },
//   passWrapper: {
//     marginBottom: 325,
//   },
//   btnPassShow: {
//     position: "absolute",
//     right: 0,
//     top: 0,
//     alignSelf: "center",

//     padding: 16,

//     backgroundColor: "transparent",
//   },
//   btnPassShowText: {
//     color: "#1B4371",
//   },

//   btn: {
//     alignItems: "center",
//     padding: 16,

//     backgroundColor: "#ff6c00",
//     borderRadius: 100,
//   },
//   btnText: {
//     color: "#ffffff",
//   },

//   link: {
//     alignItems: "center",

//     marginTop: 16,
//   },
//   linkText: {
//     color: "#1B4371",
//   },
//   linkTextUnderline: {
//     textDecorationLine: "underline",
//   },
// });

// export const {
//   container,
//   bgContainer,
//   keyboardView,
//   contentWrapper,
//   title,
//   input,
//   inputLast,
//   passWrapper,
//   btnPassShow,
//   btnPassShowText,
//   btn,
//   btnText,
//   link,
//   linkText,
//   linkTextUnderline,
// } = styles;
//
//
//
//
//
//
import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    //  backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
  },
  bgImg: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: 500,
    backgroundColor: "#ddd",
  },
  formContainer: {
    width: "100%",
    //  height: 374,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 32,
  },
  avatarWrapper: {
    position: "absolute",
    top: -60,
    alignSelf: "center",

    width: 120,
    height: 120,

    backgroundColor: "#ffffff",
    borderWidth: 0.2,
    borderRadius: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    position: "absolute",
    top: 81,
    left: 107,
  },
  btnAddAvatarSvg: {
    fill: "#ff6c00",
    stroke: "#ff6c00",
    backgroundColor: "#ffffff",
  },
  titleText: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 33,
  },
  containerInput: {
    //  flex: 1,
    width: "100%",
    //  justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 0,
    //  gap: 16,
  },
  input: {
    width: 343,
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    //  borderColor: "#E8E8E8",
    marginBottom: 16,
  },
  buttonSection: {
    height: 170,
    width: "100%",
    //  flex: 1,
    alignItems: "center",
    //  justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop: 11,
  },
  btnText: {
    //  flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 343,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  btnTextTitle: {
    textAlign: "center",
    color: "#fff",
  },
  linkText: {
    textAlign: "center",
  },
  linkTextUnderline: {},
  //   borderActive: {
  //     borderColor: "#FF6C00",
  //     width: 343,
  //     height: 50,
  //     padding: 16,
  //     borderWidth: 1,
  //     borderRadius: 8,
  //     marginBottom: 16,
  //   },
});

export const {
  container,
  bgImg,
  formContainer,
  avatarWrapper,
  avatar,
  btnAddAvatarSvg,
  titleText,
  containerInput,
  input,
  buttonSection,
  btnText,
  btnTextTitle,
  linkText,
  linkTextUnderline,
  borderActive,
} = styles;
