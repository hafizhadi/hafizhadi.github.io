import React from 'react';
import { kebabCase } from 'lodash';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { css } from "@emotion/core";
import styled from "@emotion/styled";

// STYLING CONSTANTS FOR COMPOSITION
const blackBoxCss = css`
    color: white;
    background-color: black;
    padding: 0.1em 0.3em;

    :hover {
        background-color: gray;
    }
`

const noMarginPaddingcss = css`
    margin: 0;
    padding: 0;
`


const PostWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
`

const PostHeadWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const PostTagWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
`

const PostBodyWrapper = styled.div `
    h1,h2,h3,h4,h5,h6,p {
        margin: 0.75em 0;
    }

    ul, ol {
        margin: 0 2em;
    }

    ul > li, ol > li {
        margin: 0.75em;
    }

    pre {
        margin: 1em 0;
    }

    pre > code {
        white-space: pre;
        display: block;
    }
`

const PostTemplate = ({ data }) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <PostWrapper>
                <PostHeadWrapper>
                    <h1 css={css`${noMarginPaddingcss}; color: black; font-weight: bold;`}>{ frontmatter.title }</h1>
                    <h5 css={noMarginPaddingcss}>({frontmatter.date })</h5>
                </PostHeadWrapper>
                
                <PostTagWrapper>
                    <h3 css={css`${noMarginPaddingcss}; margin: 0.5em 0;`}>Tags:</h3>
                    {frontmatter.tags.map(tag => (
                        <Link to={`/blog/${kebabCase(tag)}`}><p css={css` ${blackBoxCss}; margin: 0.5em 0.5em;`}>{tag}</p></Link>
                    ))}
                </PostTagWrapper>

                <PostBodyWrapper>
                    <div dangerouslySetInnerHTML={{ __html: html }}/>
                </PostBodyWrapper>        
            </PostWrapper>
        </Layout>
    );
};

export default PostTemplate;

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                tags
            }
        }
    }
`;