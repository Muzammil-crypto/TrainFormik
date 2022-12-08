import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  StatusBar,
  TextInput,
} from "react-native";
import React from "react";
import { Formik } from "formik";

const Login = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#00BCD4"
        translucent={true}
      />

      <SafeAreaView style={styles.container}>
        <View
          style={{
            marginTop: -190,
            height: 490,
            width: "100%",
            backgroundColor: "#2FBAE3",
            marginVertical: "-20%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: 200,
              width: "60%",
              marginTop: 60,
              marginBottom: 20,
            }}
            source={{
              uri: "https://cdni.iconscout.com/illustration/free/thumb/about-us-2061897-1740019.png",
            }}
          />

          <Text style={{ fontSize: 24, color: "#F3B324", fontWeight: "bold" }}>
            WELCOM BACK!
          </Text>
        </View>
        <View style={styles.loginContainer}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
            }) => (
              <>
                <TextInput
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInputs}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />
                {errors.email && (
                  <Text style={{ fontSize: 10, color: "#2FBAE3" }}>
                    {errors.email}
                  </Text>
                )}
                <TextInput
                  name="password"
                  placeholder="Password"
                  style={styles.textInputs}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && (
                  <Text style={{ fontSize: 10, color: "#2FBAE3" }}>
                    {errors.password}
                  </Text>
                )}

                <Button mode={"contained"}>Submit</Button>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEE0E4",
  },
  loginContainer: {
    borderRadius: 18,
    backgroundColor: "#F3B324",
    width: "90%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  textInputs: {
    paddingLeft: "2%",
    height: 40,
    width: "80%",
    margin: 15,
    backgroundColor: "white",
    borderColor: "#2FBAE3",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
  button: {
    height: 40,
    width: "80%",
    margin: 10,
    backgroundColor: "#2FBAE3",
    borderColor: "green",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
});

import * as yup from "yup";
import Button from "../components/Button";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
