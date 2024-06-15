import React from "react";
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { ThemeIcon, Text, Title, Container, SimpleGrid, rem, Group } from '@mantine/core';
import classes from './newsdetails.css';

function NewsDetails({articles}) {
let {id}= useParams();
  return (<div className="background-details-news" style={{height: window.innerHeight}}>
    
    <Container p={0}>
            <div className={'wrapper-details'}>
          
            <Title className={'title-details'} c={'white'} >BOXING NEWS</Title>
            <div className='description-details'>
            <div className='description-text-details'>
              <Text size="md" c={'white'} >
              {articles[id]?.title}
              </Text>
            </div>
            </div>
           
        </div>
        </Container>
              <Container className='news-app-details'>
                  <Group mt={10} className='news-item-details' style={{width: 'inherit', height: 'inherit'}}>
                  <img className='news-img-details' src={articles[id]?.urlToImage} alt={articles[id]?.urlToImage} ></img>
                  <h3><a href={articles[id]?.url}> {articles[id]?.title}</a></h3>
                  
                  </Group>

                  </Container>
                <Container p={0}>
                <p className="news-description"><i>{articles[id]?.description}</i></p>
                </Container>
                </div>
  );
}
const mapStateToProps = state => ({
    articles: state.app.articles
  });
export default connect(mapStateToProps)(NewsDetails);
