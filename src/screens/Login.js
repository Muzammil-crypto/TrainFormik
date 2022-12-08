import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
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
      <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={{ fontSize: 24, color: "purple", fontWeight: "bold" }}>
            Login Screen
          </Text>
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
                  <Text style={{ fontSize: 10, color: "purple" }}>
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
                  <Text style={{ fontSize: 10, color: "purple" }}>
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
    backgroundColor: "pink",
  },
  loginContainer: {
    borderRadius: 18,
    backgroundColor: "#F3B324",
    width: "80%",
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
    borderColor: "purple",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 20,
  },
  button: {
    height: 40,
    width: "80%",
    margin: 10,
    backgroundColor: "purple",
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
