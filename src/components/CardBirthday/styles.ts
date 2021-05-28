import { StyleSheet } from "react-native";
import dimensions from "../../style/dimensions"

const { vh, vw } = dimensions

export const styles = StyleSheet.create({
  card: {
    justifyContent: 'space-between',
    marginVertical: vh / 100,
    marginHorizontal: vw / 10,
    paddingVertical: vh / 40,
    paddingHorizontal: vw / 10,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    flexDirection: 'row',
  },
  textLabel: {
    color: '#aaa',
    fontWeight: 'bold',
    fontSize: 9
  },
  textName: {
    fontSize: 18
  },
  textBirthday: {

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#eef",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    backgroundColor: "white",
    marginVertical: vh / 400,
    width: vw / 1.4,
    paddingHorizontal: vw / 20,
    paddingVertical: vh / 120,
    borderRadius: 8
  },
});