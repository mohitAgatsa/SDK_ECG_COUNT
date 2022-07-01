import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
//   <Text>Data:{JSON.stringify(data)}</Text>
// {
//   data.map((item) => <Text>{item.deviceId}</Text>);
// // }
const Data = ({ route }) => {
  const { data } = route.params;

  //   console.log(data);
  //   this.state = {
  //     tableHead: ["DeviceId", "Count"],
  //   };

  //   const myArray = [
  //     { deviceId: "1234", count: 1 },
  //     { deviceId: "8924", count: 3 },
  //   ];

  //   const state = this.state;
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
            <Row
              data={["DeviceId", "Count"]}
              style={styles.header}
              textStyle={styles.text}
            />
          </Table>
          <ScrollView>
            <Table borderStyle={{ borderWidth: 1, borderColor: "#C1C0B9" }}>
              {data.map((rowData) => (
                <Row
                  data={[
                    rowData.deviceId,
                    rowData.count === -1 ? "Unlimited" : rowData.count,
                  ]}
                  style={[styles.row]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  header: { height: 50, backgroundColor: "#537791" },
  text: { textAlign: "center", fontWeight: "bold", color: "black" },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: "#E7E6E1" },
});
export default Data;
