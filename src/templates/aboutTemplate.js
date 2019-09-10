import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { css } from "@emotion/core";
import styled from "@emotion/styled";

const blackLinkCss = css`
    color: black;
    padding: 0.1em 0.3em;
    margin: 0;

    :hover {
        color: white;
        background-color: black;
    }
`

const noMarginPaddingcss = css`
    margin: 0;
    padding: 0;
`

const AboutWrapper = styled.div`

`

const AboutHeadWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;

    justify-content: space-between;
    align-items: baseline;
`
const AboutCategoryWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;

    > {
        :not(:last-child){
            margin-right: 0.5em;
        }
    }
`

const AboutBodyWrapper = styled.div`
    margin: 1em 0;
`

const AboutTemplate = ({ data, pageContext }) => (
    <Layout>
        <SEO title="About" />
        <AboutWrapper>
            <AboutHeadWrapper>
                <Link to="/about/"><h3 css={[noMarginPaddingcss, css`color: black; font-weight: bold; :hover{color:gray;}`]}>About</h3></Link>
                <AboutCategoryWrapper css={css`display: flex; flex-flow: row nowrap`}>
                    <Link to="/about/academic/"><h5 css={[blackLinkCss, (pageContext.markdownType === `about-academic`) && css`background-color: black; color: white;`]}>Academic</h5></Link>
                    <Link to="/about/professional/"><h5 css={[blackLinkCss, (pageContext.markdownType === `about-professional`) && css`background-color: black; color: white;`]}>Professional</h5></Link>
                    <Link to="/about/other/"><h5 css={[blackLinkCss, (pageContext.markdownType === `about-other`) && css`background-color: black; color: white;`]}>Other</h5></Link>
                </AboutCategoryWrapper>
            </AboutHeadWrapper>
            <AboutBodyWrapper dangerouslySetInnerHTML={{ __html: data.academic.html }}></AboutBodyWrapper>
        </AboutWrapper>
    </Layout>
);

export default AboutTemplate;

export const aboutQuery = graphql`
    query($markdownType: String!) {
        academic: markdownRemark(frontmatter: { type: { eq: $markdownType } }) {
            html
        }
    }`