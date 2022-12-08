import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import React from "react";
import { Formik } from "formik";
import Button from "../components/Button";
import loginValidationSchema from "../schemas/formikSchema";
import StatusBarComp from "../components/StatusBar";
import HeaderCover from "../components/HeaderCover";

const Login = () => {
  return (
    <>
      <StatusBarComp />
      <SafeAreaView style={styles.container}>
        <HeaderCover />
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
    backgroundColor: "#2FBAE3",
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
});
