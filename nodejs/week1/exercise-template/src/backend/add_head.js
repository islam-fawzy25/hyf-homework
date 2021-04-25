const addHead = (title) => `
    <head>
      <title>${title}</title>
    </head>
`;

module.exports = addHead;

const style = (style)=> `
<head>
<style>${style}</style>
</head>
`;

module.exports = style;