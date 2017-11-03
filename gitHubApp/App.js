/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Container,
  Content,
  Header,
  Tabs,
  Tab,
  Body,
  Title,
  List,
  ListItem,
  Left,
  Right,
  Thumbnail,
  Text,
} from 'native-base';


export default class App extends Component {
  
  state = {
    repos: [],
    users: [],
  };

  async componentDidMount(){
    const baseURL = 'https://api.github.com';
    const options = {
      header: {
        'User-Agent': 'GithubApp',
      },
    };
  
    const usersReponse = await fetch(`${baseURL}/orgs/rocketseat/members`, options);
    const reposResponse = await fetch(`${baseURL}/orgs/rocketseat/repos`, options);

    this.setState({
      repos: await reposResponse.json(),
      users: await usersReponse.json(),
    });


  }

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Body>
            <Title>GitHub</Title>
          </Body>
        </Header>
        <Tabs>
          <Tab heading="Repositórios">
            <Content>
              <List>
                { this.state.repos.map(repo => (
                  <ListItem key={repo.id}>
                    <Body>
                      <Text>{repo.name}</Text>
                      <Text note>{repo.html_url}</Text>
                    </Body>
                  </ListItem>
                )) }
              </List>
            </Content>  
          </Tab>
          <Tab heading="Usuários">
              <List>
                {this.state.users.map(user => (
                  <ListItem avatar key={user.id}>
                    <Left>
                      <Thumbnail small source={{ uri: user.avatar_url }}/>
                    </Left>
                    <Body>
                      <Text>{user.login}</Text>
                      <Text note>{user.html_url}</Text>
                    </Body>
                  </ListItem>
                ))}
              </List>
          </Tab>

        </Tabs>
      </Container>
    );
  }
}
