/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const TextDateWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: baseline;
`

export default class TextDate extends React.Component{
  static defaultProps = {
    text: ``,
    date: ``,
    link: `/`,
  }
  
  render() {
    return (
      <TextDateWrapper>
        <a target="_blank" href={this.props.link}><h4 css={css`:hover{color:black;}`}>{this.props.text}</h4></a>
        <h6>{this.props.date}</h6>
      </TextDateWrapper>
    )
  }
}
