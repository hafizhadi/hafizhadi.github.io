import React from 'react';
import { Link, graphql } from 'gatsby';
import { kebabCase } from 'lodash';

import Layout from '../components/layout';

const TagsPage = ({ data }) => {
    const alltags = data.allMarkdownRemark.group;

    return (
        <Layout>
            <div>
                <h1>Tags</h1>
                <ul>
                    { alltags.map(tag => (
                        <li key={tag.fieldValue}>
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                {tag.fieldValue} ({tag.totalCount})
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default TagsPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;