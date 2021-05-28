import { StyleSheet } from "react-native";
import dimensions from "../../style/dimensions"

const { vh, vw } = dimensions

export const styles = StyleSheet.create({
  body: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'column',
    alignItems: 'stretch',
    alignContent: 'stretch',
    backgroundColor: '#efefef'
  },
  header: {
    flex: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: vh / 20,
    paddingBottom: vh / 100,
  },
  headerContent: {
    paddingHorizontal: vw / 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logOut: {
    marginRight: vw / 40,
    fontSize: 14,
    fontWeight: 'bold',
  },
  main: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#afdaff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});