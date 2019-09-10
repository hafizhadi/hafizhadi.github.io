const path = require('path');
const _ = require('lodash')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'pages' });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const bloglistTemplate = path.resolve(`src/templates/bloglistTemplate.js`)
    const postTemplate = path.resolve(`src/templates/postTemplate.js`)
    const aboutTemplate = path.resolve(`src/templates/aboutTemplate.js`)

    return graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 1000
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                            type
                        }
                    }
                }
            }
        }
    `).then(result => {
        if(result.errors) {
            return Promise.reject(result.errors);
        }

        // Get all posts
        const posts = result.data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.type === "blog");
        
        // Get all tags
        let tags = []

        _.each(posts, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
                tags = tags.concat(edge.node.frontmatter.tags);
            }
        });

        // Remove duplicates
        tags = _.uniq(tags)
        
        // PAGE CREATION
        // Create blog pages without tag
        const postsPerPage = 3;
        const numPages = Math.ceil(posts.length / postsPerPage);

        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
                component: bloglistTemplate,
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages: numPages,
                    currentPage: i + 1,
                    tag: tags,
                    isTag: false,
                },
            });
        });

        // Create blog pages for each tag
        tags.forEach(tag => {
            const taggedPosts = posts.filter(post => post.node.frontmatter.tags.includes(tag));
            const numTaggedPages = Math.ceil(taggedPosts.length / postsPerPage);

            Array.from({ length: numTaggedPages }).forEach((_, i) => {
                createPage({
                    path: i === 0 ? `/blog/${tag}` : `/blog/${tag}/${i + 1}`,
                    component: bloglistTemplate,
                    context: {
                        limit: postsPerPage,
                        skip: i * postsPerPage,
                        numPages: numTaggedPages,
                        currentPage: i + 1,
                        tag: [tag],
                        isTag: true,
                    },
                });
            });
        });

        // Create blog posts
        posts.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: postTemplate,
                context: { slug: node.fields.slug },
            });
        });

        // Create about pages
        createPage({
            path: `/about/academic`,
            component: aboutTemplate,
            context: { markdownType: `about-academic` },
        });

        createPage({
            path: `/about/professional`,
            component: aboutTemplate,
            context: { markdownType: `about-professional` },
        });

        createPage({
            path: `/about/other`,
            component: aboutTemplate,
            context: { markdownType: `about-other` },
        });

    });

};