import React from 'react';
import { kebabCase } from 'lodash';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

import { css } from "@emotion/core"
import styled from "@emotion/styled"


// STYLING CONSTANTS FOR COMPOSITION
const entryElementsCss = css`
    margin: 0.25em 0;
`

const blackBoxCss = css`
    color: white;
    background-color: black;
    padding: 0.2em 0.3em;

    :hover {
        background-color: gray;
        color:white;
    }
`

// STYLED COMPONENTS

const BlogWrapper = styled.div`
    display: flex;

    flex-flow: column wrap;
    justify-content: center;
    `

const BlogEntry = styled.article`
    text-align: left;    

    border: 0.25em solid;
    margin: 0.5em 0;
    padding: 0.5em;
`

const NavigationWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;

    align-items: baseline;
    justify-content: space-between;
`

const BreadcrumbWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;

    justify-content: space-between;
`

const BreadcrumbHeading = styled.h3`
    color: black;
    font-weight: bold;
    :hover {
        color: gray;
    }

    margin 0.25em 0;
    padding 0;
`

const EntryHeaderWrapper = styled.div`
    display: flex; 
    flex-flow: row nowrap; 
    justify-content: space-between;
    align-items: center;
`



const BlogPage = ({ data, pageContext }) => {

    // Blog posts
    const posts = data.allMarkdownRemark.edges;
    
    // Helper constant for tag page differentiation
    const isTag = pageContext.isTag;
    const tag = pageContext.tag;
    const tagAppend = isTag ? "/" + tag : "" 
    
    // Navigation constants
    const currentPage = pageContext.currentPage;
    const numPages = pageContext.numPages; 
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? `/blog${tagAppend}/` : `/blog${tagAppend}/${(currentPage - 1).toString()}/`;
    const nextPage = `/blog${tagAppend}/${(currentPage + 1).toString()}/`;

    return (
        <Layout>
            <SEO title="Blog" />
            <BlogWrapper>
                <BreadcrumbWrapper>
                    <Link to="/blog"><BreadcrumbHeading>Blog</BreadcrumbHeading></Link>
                    {isTag && <Link to={`/blog/${tag}`}><BreadcrumbHeading css={css`${blackBoxCss};
                                                            font-weight: normal;
                                                            margin: 0;`}>{tag}</BreadcrumbHeading></Link>}
                </BreadcrumbWrapper>
                {posts.map(post => (
                    <BlogEntry key={post.node.id}>
                        <EntryHeaderWrapper>
                            <Link to={post.node.fields.slug}><h3 css={css`${entryElementsCss}; ${blackBoxCss}`}>{post.node.frontmatter.title}</h3></Link>
                            <h5 css={css` ${entryElementsCss}; flex-basis: max-content;`}>({post.node.frontmatter.date})</h5>
                        </EntryHeaderWrapper>
                        <div>
                            <p css={entryElementsCss}>{post.node.excerpt}</p>
                        </div>
                        {post.node.frontmatter.tags ? (
                            <div css={css`display: flex; flex-flow: row wrap; margin-top: 0.5em;`}>
                                {post.node.frontmatter.tags.map(tag => (
                                    <Link to={`/blog/${kebabCase(tag)}`}><h4 css={[css`margin: 0 0.5em 0 0;`, blackBoxCss]}>{tag}</h4></Link>
                                ))}
                            </div>
                        ) : null}
                    </BlogEntry>
                ))}
            </BlogWrapper>
            
            <NavigationWrapper>
                <div>
                    <Link css={isFirst && css`visibility: hidden;`} to={prevPage} rel="prev"> 
                        <h4 css={[blackBoxCss, css`padding: 0.25em 2em; margin: 0;`]}>&#8249;</h4> 
                    </Link>
                </div>

                <div css={css`display: flex; flex-flow: row wrap;`}>
                    {Array.from({ length: numPages }, (_, i) => (
                        <Link key={`pagination-number${i + 1}`} to={`/blog${tagAppend}/${i === 0 ? "": i + 1}`}>
                            <h4 css={[blackBoxCss, css`padding: 0.15em 0.4em; margin: 0 0.25em 0 0;`]} >{i + 1}</h4>
                        </Link>
                    ))}
                </div>
                

                    <Link css={isLast && css`visibility: hidden;`} to={nextPage} rel="next"> 
                        <h4 css={[blackBoxCss, css`padding: 0.25em 2em; margin: 0;`]}>&#8250;</h4> 
                    </Link>

            </NavigationWrapper>
        </Layout>
    );
};

export default BlogPage;

export const pageQuery = graphql`
    query ($skip: Int!, $limit: Int!, $tag:[String!] ) {
        allMarkdownRemark( 
            limit: $limit, 
            sort: { order: DESC, fields: [frontmatter___date ] }, 
            skip: $skip,
            filter: { frontmatter: {     tags: { in: $tag }
                                         type: { eq: "blog"}} },
        ) {
            totalCount
            edges {
                node {
                    id
                    excerpt(pruneLength:250)
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        tags
                    }
                }
            }
        }
    }
`;