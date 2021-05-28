import { StyleSheet } from "react-native";
import dimensions from "../../style/dimensions"

const { vh, vw } = dimensions;

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
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
  row: {
    flexDirection: 'row',
    marginHorizontal: vw / 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: vh / 60
  },
  column: {
    flexDirection: 'column'
  },
  input: {
    backgroundColor: "white",
    marginVertical: vh / 400,
    width: vw / 1.4,
    paddingHorizontal: vw / 20,
    paddingVertical: vh / 120,
    borderRadius: 8
  }
});