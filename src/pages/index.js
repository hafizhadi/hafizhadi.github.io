import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from "gatsby-image";
import Layout from '../components/layout';
import SEO from "../components/seo"

import { css } from "@emotion/core";
import styled from "@emotion/styled";

const IndexWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;

  @media all and (min-width: 800px) {
    flex-flow: row nowrap;
  }
`

const DescriptionWrapper = styled.div` 
  @media all and (min-width: 800px) {
      margin-left: 2em;
      flex: 3;
  }
`

const BannerWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  
  flex: 100%;
  max-width: 400px;

  @media all and (min-width: 800px) {
    flex: 2;
  }
`

const ProfPicWrapper = styled.div`
  margin-bottom: 1em;
  padding: 0.5em;
  border: 0.25em solid;
`

const SocialWrapper = styled.div`
  margin-bottom: 1em;
  flex: 100%;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  a {
    margin: 0.5em;
    width: 12.5%;
  }
`

const indexHeaderCss = css`
  h2 {
    font-size 5em;
  }
`

const socialButtonCss = css`
  :hover {
    filter: invert(100%);
  }
`

const blackLinkCss = css`
    color: black;
    padding: 0.1em 0.3em;
    margin: 0;

    :hover {
        color: white;
        background-color: black;
    }
`

const IndexPage = ({data}) => {
  return (
    <Layout css={indexHeaderCss}>
      <SEO title="Home" />
      <IndexWrapper>
        <BannerWrapper>
          <ProfPicWrapper>
            <Img fluid={data.profPic.childImageSharp.fluid} />
          </ProfPicWrapper>
          <SocialWrapper>
            <a target="_blank" href="https://www.linkedin.com/in/hafizhadi/"><Img css={socialButtonCss} fluid={data.socialOne.childImageSharp.fluid} /></a>
            <a target="_blank" href="https://github.com/hafizhadi/"><Img css={socialButtonCss} fluid={data.socialTwo.childImageSharp.fluid} /></a>
            <a target="_blank" href="https://twitter.com/indigofiz/"><Img css={socialButtonCss} fluid={data.socialThree.childImageSharp.fluid} /></a>
            <a target="_blank" href="https://www.facebook.com/hafizh.a.prasetya"><Img css={socialButtonCss} fluid={data.socialFour.childImageSharp.fluid} /></a>
          </SocialWrapper>
          <a target="_blank" href="https://hafizhadip.wixsite.com/portfolio" css={css`align-self: center;`}><h6 css={[blackLinkCss, css`margin-bottom: 1em;`]}>I also do photography!</h6></a>
          <SocialWrapper>
            <a target="_blank" href="https://www.instagram.com/hafizh.adi/"><Img css={socialButtonCss} fluid={data.socialFive.childImageSharp.fluid} /></a>
            <a target="_blank" href="https://www.instagram.com/lv0shots/"><Img css={socialButtonCss} fluid={data.socialFive.childImageSharp.fluid} /></a>
          </SocialWrapper>
        </BannerWrapper>
        <DescriptionWrapper dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></DescriptionWrapper>
      </IndexWrapper>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query{
    markdownRemark(frontmatter: { type: { eq: "landing-content" } }) {
      html
    }
    profPic: file(relativePath: { eq: "front.JPG" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    socialOne: file(relativePath: { eq: "icon-linkedin.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    socialTwo: file(relativePath: { eq: "icon-github.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    socialThree: file(relativePath: { eq: "icon-twitter.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    socialFour: file(relativePath: { eq: "icon-facebook.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    socialFive: file(relativePath: { eq: "icon-instagram.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxHeight: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }`;
