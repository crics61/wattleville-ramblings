// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
      <Layout pageTitle="About">
        <p>Hi there. I'm Craig, and this is my blog.</p>
      </Layout>  
  )
}

// Step 3: Export your component
export const Head = () => (
  <>
    <Seo title="About" />
    <meta name="description" content="About Wattleville Ramblings"></meta>
  </>  
)    
export default AboutPage