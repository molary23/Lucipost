import React from "react";
import { List, Card } from "react-native-paper";

function PostList({ item }) {
  return (
    <Card style={{ marginBottom: "10px" }}>
      <Card.Content>
        <List.Item
          title={item.title}
          description={item.id}
          titleStyle={{ textTransform: "capitalize" }}
        />
      </Card.Content>
    </Card>
  );
}

export default PostList;
