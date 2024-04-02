import * as React from "react"
import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#02b3ce",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#FFFFFF",
  fontSize: 16,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "The (Un)official Anthropic API Documentation: recreating and improving Anthropic’s Messages API",
    url: "https://dc-78.mintlify.app/",
    description:
      "A sample API documentation project based on Anthropic's Messages API. It includes a reverse-engineered OpenAPI Specification 3.0 file, an interactive endpoint, and an audit of Anthropic's existing API documentation. The site is powered by Mintlify and Github.",
    color: "#8EB814",
  },
  {
    text: "How to create a Vale linter custom rule: Manually vs. AI-prompting approach",
    url: "https://medium.com/@meetdianacheung/how-to-create-a-vale-linter-custom-rule-031aa00e4100",
    description:
      "A step-by-step tutorial on creating a custom rule in the open-source Vale prose linter. The official documentation is targeted towards intermediate-level programmers. The tutorial helps technical writers with basic coding experience by breaking down the process and providing AI prompts for assistance. It is an experiment to incorporate AI prompts in technical documentation to assist end users and their AI assistants in customizing a dev tool.",
    color: "#1099A8",
  },
  {
    text: "Meta Llama 2 vs. OpenAI GPT-4: A Comparative Analysis of an Open-Source vs. Proprietary LLM",
    url: "https://medium.com/@meetdianacheung/meta-llama-2-vs-openai-gpt-4-785589efe15e",
    description:
      "A technical comparison between Large Language Models Llama 2 and GPT-4 on the dimensions of model releases and architectures, LLM benchmarks, access methods, and selection factors for project use. The article aims to inform software engineers building LLM-powered apps of the strengths and weaknesses of both models. It also provides clear guidelines for picking a model based on a project&apos;s utilization, complexity requirements, and specific use cases.",
    color: "#E95800",
  },
  {
    text: "Introducing the Emerging LLM Tech Stack: Components for LLM Retrieval Augmented Generation (RAG)",
    url: "https://medium.com/@meetdianacheung/introducing-the-emerging-llm-tech-stack-17ddc83ca640",
    description:
      "A conceptual guide explaining the various tech stack layers for implementing Large Language Model Retrieval Augmented Generation (RAG): data, model, orchestration, and operational. The article targets software engineers building LLM-powered apps and lists available tools in each layer for kickstarting development.",
    color: "#BC027F",
  },
  {
    text: "Demystifying Generative AI: Introducing the Underlying Technologies & Models of Generative AI",
    url: "https://medium.com/@meetdianacheung/demystifying-generative-ai-528c1509f865",
    description:
      "A conceptual guide explaining the evolution of generative AI, including machine learning concepts, deep learning models, transformer architecture, and Large Language Models. The article educates software engineers newer to artificial intelligence and machine learning, providing them with easy-to-understand fundamentals.",
    color: "#0D96F2",
  },
  {
    text: "How to handle multiple WebRTC peer connections in a single client",
    url: "https://medium.com/@meetdianacheung/how-to-handle-multiple-webrtc-peer-connections-in-a-single-client-e316c452aad9",
    description:
      "A quick how-to guide on handling multiple peer connections with WebRTC, an open-source library for establishing direct connections between 2 browser clients to transfer live video and audio streams. The official documentation and available tutorials only illustrate 1 WebRTC connection per client or hardcoded multiple connections. The piece details a practical solution with code examples for other software engineers dealing with the same issue.",
    color: "#8EB814",
  },
]

const IndexPage = () => {
  
  return (
    <Layout pageTitle="Diana Cheung Portfolio">
      <h2>About Me</h2>
      <p style={descriptionStyle}>
        Hello, I am a technical writer based in California, aiming to make complex technical content easy to understand and engaging for the target audience. I specialize in crafting technical content supporting the developer experience, such as conceptual explainers, how-to guides, tutorials, code samples, and library documentation. My areas of interest are AI tech and dev tools. I have experience collaborating remotely with cross-functional teams and stakeholders.
      </p>
      <p style={descriptionStyle}>
        Languages & Markups: JavaScript, Python, HTML, CSS, XML, Markdown, YAML
      </p>
      <p style={descriptionStyle}>
        Toolings: Git, Github, OpenAPI Spec, Postman, Mintlify, Gatsby.js, Visual Studio Code, GPT-4, Claude AI
      </p>
      <p style={descriptionStyle}>
        Education: University of California, San Diego, BS Computer Science & University of Southern California, MBA
      </p>
      <p style={descriptionStyle}>
        Let&apos;s discuss how I can help with your technical documentation. Please connect via <a style={linkStyle} href="https://www.linkedin.com/in/meetdianacheung/">LinkedIn</a>.
      </p>

      <h2>Relevant Works</h2>
      <ul style={listStyles}>
      {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
                target="_blank"
                rel="noreferrer"
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const Head = () => <title>Home</title>

export default IndexPage
