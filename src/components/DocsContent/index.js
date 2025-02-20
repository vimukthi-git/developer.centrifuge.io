import React from "react";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { MDXProvider } from "@mdx-js/tag";
import styled from "styled-components";
import * as Grommet from "grommet";

import CodeHighlighter from "../CodeHighlighter";

import link from "../../images/link.svg";

const ListBase = styled(Grommet.Text)`
  padding-left: 1rem;
`;

const Anchor = styled.a.attrs({
  "aria-hidden": "true"
})`
  display: block;
  position: relative;
  top: -80px;
`;

const Heading = styled(Grommet.Heading).attrs({ margin: { vertical: "1.5em" } })`
  position: relative;
`;

const Hash = styled.a.attrs({
  "aria-hidden": "true"
})`
  opacity: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s;
  position: absolute;
  left: -24px;
  text-decoration: none;

  &::before {
    content: "";
    display: block;
    background-image: url(${link});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 16px;
    width: 16px;
  }

  ${Heading}:hover & {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;

const mdxGrommetMap = {
  p: Grommet.Paragraph,
  h1: props => (
    <Heading level={1}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h2: props => (
    <Heading level={2}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h3: props => (
    <Heading level={3}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h4: props => (
    <Heading level={4}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h5: props => (
    <Heading level={5}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  h6: props => (
    <Heading level={6}>
      <Anchor id={props.id} />
      <Hash href={`#${props.id}`} />
      {props.children}
    </Heading>
  ),
  li: props => <Grommet.Text {...props} as="li" />,
  ul: props => <ListBase {...props} as="ul" />,
  ol: props => <ListBase {...props} as="ol" />,
  a: Grommet.Anchor,
  img: Grommet.Image,
  inlineCode: props => <Grommet.Text color="brand" as="code" {...props} />,
  code: props => (
    <CodeHighlighter
      code={props.children.trim()}
      language={String(props.className).replace(/^language-/, "")}
    />
  )
};

const DocsContent = ({ mdx }) => (
  <MDXProvider components={mdxGrommetMap}>
    <MDXRenderer>{mdx.code.body}</MDXRenderer>
  </MDXProvider>
);

export default DocsContent;
