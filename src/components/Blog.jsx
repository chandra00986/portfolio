import React from 'react';
import placeholder from 'assets/placeholder.png';
import play from 'assets/play.png';
import styled from 'styled-components';
import Title from './Title';

const Blog = () => {
  const blogData = [
    {
      title: "Summer trip to mountains",
      type: "Adventure",
      description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores deleniti rem delectus optio harum omnis veniam adipisci ducimus deserunt repudiandae?",
    },
    {
      title: "Flowers purple from sky",
      type: "Personal",
      description: 
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam debitis consectetur ex tempora voluptatum deleniti, officiis dicta eos illo adipisci!",
    },
    {
      title: "Rock conert main stage",
      type: "Mucsic",
      description: 
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea est repudiandae nesciunt mollitia ad molestias dignissimos praesentium fugit reiciendis quis?",
    }
  ];
  return (
    <Section id='blog'>
      <Title value="blog"/>
      <div className="decoration">

      </div>

      <div className="blogs">
        {
          blogData.map(({title, type, description}, index)=>{
            return(
              <div className="blog">
                <img src={placeholder} alt="Placeholder"/>
              </div>
            )
          })
        }
      </div>
    </Section>
  )
};

const Section = styled.section`

`;

export default Blog;
