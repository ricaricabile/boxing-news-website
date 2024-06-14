import React from 'react';
import classes from './App.css';
import axios from 'axios';
import {
  Loader,
  Box  
} from '@mantine/core';
import { ThemeIcon, Text, Title, Container, SimpleGrid, rem } from '@mantine/core';
import { connect } from 'react-redux';
import { setArticles } from './redux/app/app.actions.js';

const hiddenDiv = {
  display: 'flex', 
  alignContent: 'center', 
  alignItems:'center', 
  justifyContent: 'center', 
  minHeight: '70vh', 
  background: '#339af0'
};
class NewsController extends React.Component {
  constructor() {
    super();
  }
  componentDidMount = async () => {
      const responseServer = await axios.get("fetchnewsorgdata");
      this.props.setArticles(responseServer.data.articles);
  };

  render (){
      return(<>
      <div>
        <div className='wrapper'>
          <Container>
            <Title className={classes.title} c={'yellow'}>BOXING NEWS</Title>
            <div className='description'>
            <div className='description-text'>
              <Text size="sm" c={'white'}>
                Welcome to our boxing channel we bring you the most updated boxing news this channel is connected with
                the most updated media outlet.
              </Text>
            </div>
            </div>
            </Container>
        </div>
      <SimpleGrid
        cols={{ base: 2, sm: 5, md: 6 }}
      >
            {this.props.articles &&
                this.props.articles.map( (article, i) =>  
                    <div className='news-app' onClick={() => {if (typeof window !== 'undefined') {
                        window.location.href = `/details/${i}`;
                        }}} >
                        <div className='news-item'>
                        <img className='news-img' src={article.urlToImage} alt={article.urlToImage} ></img>
                        <h3><a href="javascript:void(0);" onclick="func(0)" > {article.title}</a></h3>
                        </div>
                    </div>
                )}
                </SimpleGrid>
          {this.props.articles.length == 0 && 
            <div style={hiddenDiv}>
              <Loader color="#C0C0C0" /> 
            </div>
          }
          
          </div>
          </> )
  }
}
const mapStateToProps = state => ({
  articles: state.app.articles
});

const mapDispatchToProps = dispatch => ({
  setArticles: articles => dispatch(setArticles(articles)),
})
export default connect(mapStateToProps, mapDispatchToProps)(NewsController);