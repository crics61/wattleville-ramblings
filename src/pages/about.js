// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

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
    <title>About Wattleville Ramblings</title>
    <meta name="description" content="About page for Wattleville Ramblings"></meta>
  </>
)    
export default AboutPage