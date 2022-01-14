import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import GlobalStyles from "../GlobalStyles";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { REACT_APP_GOOGLE_MAPS_APIKEY } from "@env";
import NavFavourites from "../components/NavFavourites";
// import { GOOGLE_MAPS_APIKEY } from '@';
const HomeScreen = () => {
  // const API_KEY = `${process.env.REACT_APP_GOOGLE_MAPS_APIKEY}`;
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[GlobalStyles.droidSafeArea, tw`bg-white h-full`]}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: "AIzaSyAkYG4tGj2CU9jFRCS2Ih59MnSlgSnK3FI",
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
