exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
      query CurriculumPages {
        allMarkdownRemark(
          filter: { frontmatter: { category: { eq: "curriculum" } } }
        ) {
          edges {
            node {
              frontmatter {
                slug
                name
              }
              id
              html
            }
          }
        }
      }
    `);
  
    if (results.errors) {
      throw results.errors;
    }
  
    results.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const product = node.frontmatter;
  
      createPage({
        path: `/curriculum/${product.slug}/`,
        component: require.resolve("./src/components/Curriculum.tsx"),
        context: {
          title: product.name,
          content: node.html,
          id: node.id,
          slug: product.slug
        },
      });
    });
  
  
  
    const about = await graphql(`
query createAbout {
  allMarkdownRemark(filter: {frontmatter: {category: {eq: "about"}}}) {
    edges {
      node {
        id
        html
        frontmatter {
          brand
          version
        }
      }
    }
  }
}
  `);

  if (about.errors) {
    throw about.errors;
  }
  
  about.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const product = node.frontmatter;

    createPage({
      path: `/about/`,
      component: require.resolve("./src/components/Curriculum.tsx"),
      context: {
        title: product.brand,
        content: node.html,
        id: node.id,
      },
    });
  });
  
  
  };
  