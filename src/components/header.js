import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { css } from "@emotion/core"
import styled from "@emotion/styled"

// STYLING CONSTANTS FOR COMPOSITION
const noMarginPaddingCss = css`
  margin: 0;
  padding: 0;
`

const siteTitleCss = css`
  color: black; 
  font-size: 2.5em;

  :hover {
    color: gray;
  }
`

const blackBoxCss = css`
    color: white;
    background-color: black;
    padding: 0.2em 0.3em;

    :hover {
        background-color: gray;
    }
`

const HeaderWrapper = styled.header`
  display: flex;
  flex-flow: column wrap;

  align-items: center;
  justify-content: center;

  padding: 2em 0 1.5em 0;

  @media all and (min-width: 800px) {
    justify-content: space-between;
    align-items: baseline;
    flex-flow: row wrap;
  }
`

const SitenameWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
`

const SiteNavWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 1em;
`

const SiteNavlink = styled(props => <Link {...props} />)`
  color: black;
  
  :not(:last-child){
    margin-right: 0.5em;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <SitenameWrapper>
      <Link><h1 css={[noMarginPaddingCss, siteTitleCss]}>HAFIZH</h1></Link>
      <h2 css={[noMarginPaddingCss, css`margin-left: 0.25em;`]}>Adi Prasetya</h2>
    </SitenameWrapper>
    <SiteNavWrapper>
      <SiteNavlink to="/blog/"><h4 css={[noMarginPaddingCss, blackBoxCss]}>BLOG</h4></SiteNavlink>
      <SiteNavlink to="/about/academic/"><h4 css={[noMarginPaddingCss, blackBoxCss]}>ABOUT</h4></SiteNavlink>
      {/*<SiteNavlink to="/"><h4 css={[noMarginPaddingCss, blackBoxCss]}>Find Me</h4></SiteNavlink>*/}
    </SiteNavWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
