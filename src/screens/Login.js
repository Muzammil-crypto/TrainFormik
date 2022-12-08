import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
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
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
          <Text>Login Screen</Text>
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
                  <Text style={{ fontSize: 10, color: "red" }}>
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
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.password}
                  </Text>
                )}
                <Button
                  onPress={handleSubmit}
                  title="Submit"
                  style={styles.button}
                />
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
  },
  loginContainer: {
    borderRadius: 18,
    backgroundColor: "pink",
    width: "80%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  textInputs: {
    paddingLeft: "1%",
    height: 40,
    width: "80%",
    margin: 10,
    backgroundColor: "white",
    borderColor: "green",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  button: {
    height: 40,
    width: "80%",
    margin: 10,
    borderColor: "green",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
});

import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});
