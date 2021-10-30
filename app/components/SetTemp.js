import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import { isValidEmail, isValidObjField, updateError } from "../utils/methods";
import FormSubmitButton from "./FormSubmitButton";

const setTemp = () => {
  const [setTempInfo, setSetTempInfo] = useState({
    settemp: "",
  });

  const [error, setError] = useState("");

  const { settemp } = setTempInfo;

  const handleOnChangeText = (value, fieldName) => {
    setSetTempInfo({ ...setTempInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(setTempInfo))
      return updateError("Required all fields!", setError);
    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        const res = await client.post("/setTemp", { ...setTempInfo });

        if (res.data.success) {
          setTempInfo({ settemp: "" });
          setProfile(res.data.settemp);
        }
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {/* <View style={styles.container}>
        <Text>RenIOT</Text>
        <Text>Set Temperature is : </Text>
      </View> */}

      <FormContainer>
        {error ? (
          <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
            {error}
          </Text>
        ) : null}
        <FormInput
          value={settemp}
          onChangeText={(value) => handleOnChangeText(value, "settemp")}
          label="Set Temperature"
          placeholder="Set Temperature Eg. 30"
          autoCapitalize="none"
        />
      </FormContainer>
      <FormSubmitButton onPress={submitForm} title="Set Temp" />
    </>
  );
};

const styles = StyleSheet.create({});

export default setTemp;
