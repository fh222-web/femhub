import React, { useState } from "react";
import { Image, View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../theme";
import { GradientBackground, SegmentedControl } from "../../components";
import imagePath from '../../../assets/constants/imagePath';
import styles from "./styles";

//Username
//Followings/Businesses
//Saved Products
//Settings

const BusinessProfileScreen: React.FC = () => {
  return (
    <GradientBackground style={styles.container}>
      <ScrollView>
        <View style={styles.topBar}> 
            <Image/>
          <Text style={styles.title}>Business Profile</Text>
        </View>

        <Image style={styles.profilePic} source={imagePath.profile}/>

        <View style={styles.profInfo}>
          <View style={styles.profNumbers}>
            <View>
              <Button title={"Follow Business"}></Button>
            </View>
            <View>
              <Button title={"Message"}></Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </GradientBackground>

  );
}

export default BusinessProfileScreen;
