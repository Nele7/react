webpackJsonp([90534130936337],{852:function(e,t){e.exports={data:{markdownRemark:{html:'<p>The easiest way to get started on a new React project is by using a starter kit.</p>\n<blockquote>\n<p>Note:</p>\n<p>This page describes setting up a single-page application with everything you need for a comfortable development workflow, including linting, testing, production optimizations, and more. Full-featured tools like these require some time and disk space to install.</p>\n<p>If you are looking for a lightweight environment to experiment with React, check out the <a href="/docs/try-react.html">Try React</a> page instead. <strong>A <a href="https://raw.githubusercontent.com/reactjs/reactjs.org/master/static/html/single-file-example.html">single HTML file</a> is enough to get you started!</strong></p>\n<p>Finally, if you’re not building a single-page application, you can either <a href="/docs/add-react-to-an-existing-app.html">add React to your existing build pipeline</a> or <a href="/docs/cdn-links.html">use it from CDN</a> and <a href="/docs/react-without-jsx.html">without a build step</a>.</p>\n</blockquote>\n<h2 id="create-react-app"><a href="#create-react-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Create React App</h2>\n<p><a href="http://github.com/facebookincubator/create-react-app">Create React App</a> is the best way to start building a new React single page application. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 6 on your machine.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token function">npm</span> <span class="token function">install</span> -g create-react-app\ncreate-react-app my-app\n\n<span class="token function">cd</span> my-app\n<span class="token function">npm</span> start\n</code></pre>\n      </div>\n<p>If you have npm 5.2.0+ installed, you may use <a href="https://www.npmjs.com/package/npx">npx</a> instead.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">npx create-react-app my-app\n\n<span class="token function">cd</span> my-app\n<span class="token function">npm</span> start\n</code></pre>\n      </div>\n<p>Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. It uses build tools like <a href="http://babeljs.io/">Babel</a> and <a href="https://webpack.js.org/">webpack</a> under the hood, but works with zero configuration.</p>\n<p>When you’re ready to deploy to production, running <code class="gatsby-code-text">npm run build</code> will create an optimized build of your app in the <code class="gatsby-code-text">build</code> folder. You can learn more about Create React App <a href="https://github.com/facebookincubator/create-react-app#create-react-app-">from its README</a> and the <a href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents">User Guide</a>.</p>\n<h2 id="other-starter-kits"><a href="#other-starter-kits" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Other Starter Kits</h2>\n<p>We have created <a href="/community/starter-kits.html">a curated list of third-party starter kits that we officially recommend</a>.</p>\n<p>They slightly differ in their focus but are all production-ready, well-maintained, and don’t require configuration to get started.</p>\n<p>You can also check out a list of <a href="/community/starter-kits.html#other-starter-kits">other kits</a> contributed by the community.</p>\n<h2 id="advanced"><a href="#advanced" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Advanced</h2>\n<p>If you prefer to configure a project manually, see <a href="/docs/add-react-to-an-existing-app.html#installing-react">Installing React</a> in the next section.</p>',frontmatter:{title:"Add React to a New Application",next:"add-react-to-an-existing-app.html",prev:"try-react.html"},fields:{path:"docs/add-react-to-a-new-app.md",slug:"docs/add-react-to-a-new-app.html"}}},pathContext:{slug:"docs/add-react-to-a-new-app.html"}}}});
//# sourceMappingURL=path---docs-add-react-to-a-new-app-html-8eb3104aaca31a91bbee.js.map