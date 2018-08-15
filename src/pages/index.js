import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-size:18px;
  font-weight:600;
  text-transform:uppercase;
  text-align:center;
  color:#94a4ba;
`

const SectionGroup = styled.div`
  max-width: 800px;
  margin:0 auto 100px;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  grid-column-gap: 20px;
  padding:0 20px;
  @media(max-width: 640px){
    grid-template-columns:repeat(1,1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />design and code React apps</h1>
          <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
          <Link to='../pages/page-2.js'>Watch the video</Link>
          <div className="Logos">
            <img src={require('../images/logo-figma.png')} width="50"/>
            <img src={require('../images/logo-framer.png')} width="50"/>
            <img src={require('../images/logo-invision.png')} width="50"/>
            <img src={require('../images/logo-react.png')} width="50"/>
            <img src={require('../images/logo-sketch.png')} width="50"/>
            <img src={require('../images/logo-swift.png')} width="50"/>
          </div>
          <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2> 10 more courses are coming soon </h2>
      <div className="CardGroup">
        <Card
          image={require('../images/wallpaper3.jpg')}
          title="React for Designers"
          text="12 sections" />
          <Card
          image={require('../images/wallpaper3.jpg')}
          title="React for Designers"
          text="12 sections" />
          <Card
          image={require('../images/wallpaper3.jpg')}
          title="React for Designers"
          text="12 sections" />
          <Card
          image={require('../images/wallpaper3.jpg')}
          title="React for Designers"
          text="12 sections" />
          <Card
          image={require('../images/wallpaper3.jpg')}
          title="React for Designers"
          text="12 sections" />
          <Card
          image={require('../images/wallpaper3.jpg')}
          title="React for Designers"
          text="12 sections" />
      </div>
    </div>
    <Section 
      image={require('../images/wallpaper3.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    <SectionCaption>12 Sections - 6 hours</SectionCaption>
    <SectionGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image}
        />
      ))}
    </SectionGroup>
  </div>
)

export default IndexPage 
