import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import Header from "../../commons/header";
import api from "../../api/data";
import { ActivityIndicator } from "react-native";
import CommitBox from "../../components/CommitBox";
import { Container, TodoText } from "./styles";
import SafeAreaView from "../../commons/safe-area-view";

const CommitScreen = ({ route, navigation }) => {
  const { commit } = route.params;
  return (
    <SafeAreaView>
      <Header title="GitHubby" headerLeft />

      <ScrollView>
        <Container>
          <Text>{commit.commit.author.name}</Text>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommitScreen;
