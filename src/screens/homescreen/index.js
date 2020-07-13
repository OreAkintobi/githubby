import React, { useState, useEffect } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import Header from "../../commons/header";
import api from "../../api/data";
import { ActivityIndicator } from "react-native";
import CommitBox from "../../components/CommitBox";
import { Container, TodoText } from "./styles";
import SafeAreaView from "../../commons/safe-area-view";

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await api.get("/repos/rails/rails/commits");
        console.log(response.data);
        setLoading(false);
        setData([...response.data]);
      } catch (error) {
        console.log(error.response);
      }
    };

    getData();
  }, []);

  return (
    <SafeAreaView>
      <Header title="GitHubby" />
      <ScrollView>
        <Container>
          <Text>
            {loading ? "Fetching" : "Fetched"} {data.length} commits
          </Text>

          {loading && <ActivityIndicator size="small" color="black" />}

          {data.map((a, index) => (
            <CommitBox
              key={index}
              headerText={`Commit #${index + 1}`}
              children={
                <>
                  <TodoText>{a.commit.author.name}</TodoText>
                  <TodoText>
                    {new Date(a.commit.author.date).toLocaleDateString()}
                  </TodoText>
                  <TodoText>
                    {new Date(a.commit.author.date).toLocaleTimeString()}
                  </TodoText>
                </>
              }
            />
          ))}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}
