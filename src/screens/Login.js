import React, { useState } from "react";
import { Button, TextInput, ActivityIndicator } from "react-native-paper";

import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  Alert,
} from "react-native";
import axios from "axios";

const Login = ({ navigation }) => {
  const [userName, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const postData = () => {
    setLoading(true);
    const user = {
      username: `${userName}`,
      password: `${userPassword}`,
    };

    const url = "http://43.204.145.198:1401/api/v1/sdkEcgCount";
    axios
      .post(url, user)
      .then((res) => {
        console.log("response", res);
        // console.log(res.request.status);
        // console.log(res.data.data);
        setLoading(false);
        if (res.request.status === 201) {
          navigation.navigate("Data", {
            data: res.data.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <KeyboardAvoidingView behavior="position">
          <StatusBar backgroundColor="blue" barStyle="light-content" />
          <Image
            style={styles.headerImage}
            resizeMode="contain"
            source={require("../../assets/logo1.webp")}
          />
          <View style={styles.header}>
            <Text style={[styles.mainHeader]}>sdk ecg count</Text>
          </View>

          <View
            style={{
              borderBottomColor: "blue",
              // borderBottomWidth: 3,

              borderRadius: 10,
              marginLeft: 20,
              marginRight: 150,
              marginTop: 4,
            }}
          />
          <TextInput
            label="Username"
            mode="outlined"
            value={userName}
            style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
            theme={{ colors: { primary: "blue" } }}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            label="password"
            mode="outlined"
            secureTextEntry={true}
            value={userPassword}
            onChangeText={(text) => {
              setPassword(text);
            }}
            style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
            theme={{ colors: { primary: "blue" } }}
          />
          <Button
            mode="contained"
            style={{ marginLeft: 18, marginRight: 18, marginTop: 18 }}
            onPress={postData}
          >
            Login
          </Button>
        </KeyboardAvoidingView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
  headerImage: {
    height: 250,
    width: 250,
    aspectRatio: 1,
    marginLeft: 45,
    display: "flex",
    alignItems: "stretch",
    borderRadius: 20,
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    marginLeft: "20",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },

  activity: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Login;
