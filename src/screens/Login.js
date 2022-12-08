import { SafeAreaView, TouchableOpacity, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import Button from "../components/Button";
import loginValidationSchema from "../schemas/formikSchema";
import styles from "../utils/App.component.style";
import StatusBarComp from "../components/StatusBar";
import HeaderCover from "../components/HeaderCover";
import InputText from "../components/InputText";
import ErrorMsg from "../components/ErrorMsg";
import ClickAbleText from "../components/ClickAbleText";
const Login = ({ navigation }) => {
  const onSubmit = () => {
    navigation.navigate("RegisterScreen");
  };
  return (
    <>
      <StatusBarComp />
      <SafeAreaView style={styles.container}>
        <HeaderCover
          heading={"Welcom back, Dear Customer!"}
          uri="https://cdni.iconscout.com/illustration/free/thumb/about-us-2061897-1740019.png"
        />
        <View style={styles.loginContainer}>
          <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={onSubmit}
          >
            {({
              handleChange,
              handleBlur,
              values,
              errors,
              isValid,
              handleSubmit,
            }) => (
              <>
                <InputText
                  name="email"
                  placeholder="Email Address"
                  style={styles.textInputs}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />

                {errors.email && <ErrorMsg value={errors.email} />}
                <InputText
                  name="password"
                  placeholder="Password"
                  style={styles.textInputs}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry
                />
                {errors.password && <ErrorMsg value={errors.password} />}
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity>
                    <ClickAbleText linkText="Forgot Password?" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <ClickAbleText linkText="Don't have an account?" />
                  </TouchableOpacity>
                </View>
                <Button onPress={handleSubmit} mode={"contained"}>
                  Submit
                </Button>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};
export default Login;
