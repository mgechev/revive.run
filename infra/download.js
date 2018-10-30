const pages = [
  {
    url: 'https://raw.githubusercontent.com/mgechev/revive/master/README.md',
    path: '/docs',
    file: 'content/docs.md',
    id: 'docs'
  },
  {
    url: 'https://raw.githubusercontent.com/mgechev/revive/master/RULES_DESCRIPTIONS.md',
    path: '/r',
    file: 'content/rules.md',
    id: 'rules'
  }
];

const wget = require('node-wget');
const converter = new (require('showdown')).Converter();
const cheerio = require('cheerio');
const fs = require('fs');
const rimraf = require('rimraf');

rimraf.sync('static/images/gen');
fs.mkdirSync('static/images/gen');

pages.forEach(p => {
  wget(
    {
      url: p.url,
      dest: p.file
    },
    (e, r, body) => {
      if (e !== null) {
        console.error(e);
        process.exit(0);
      }
      handleContent(body, p);
    }
  );
});

const handleContent = (markdown, p) => {
  const html = converter.makeHtml(markdown);
  const $ = cheerio.load(html);
  const imgs = $('img').filter((i, e) => {
    return !e.attribs.src.startsWith('http');
  });
  downloadImages(imgs.toArray().map(e => e.attribs.src), p);
  imgs.each((i, e) => {
    const name = e.attribs.src.split('/').pop();
    markdown = markdown.replace(e.attribs.src, `/images/gen/${p.id}/${name}`);
  });
  markdown = `---
path: "${p.path}"
---
${markdown}
`;
  fs.writeFileSync(p.file, markdown);
};

const downloadImages = (urls, p) => {
  const parts = p.url.split('/');
  parts.pop();
  const base = parts.join('/');
  fs.mkdirSync(`static/images/gen/${p.id}`);
  urls.forEach(u => {
    const name = u.split('/').pop();
    wget({
      url: base + '/' + u,
      dest: `static/images/gen/${p.id}/${name}`
    });
  });
};
