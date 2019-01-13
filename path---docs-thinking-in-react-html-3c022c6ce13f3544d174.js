webpackJsonp([0x624b8861be37],{935:function(e,t){e.exports={data:{markdownRemark:{html:'<p>在我们的理念中，React 最初的目的是使用 JavaScript 创建大型的，快速响应的网络应用。它在我们的 Facebook 和 Instagram 中已经实践的非常好了。</p>\n<p>React的众多优点之一是它让你在编写代码的时候同时也在思考你的应用。在这篇文档中，我们会带你使用 React 一起创建一个可搜索的产品数据表格，并向你展示我们的思考过程。</p>\n<h2 id="从模拟页面开始"><a href="#%E4%BB%8E%E6%A8%A1%E6%8B%9F%E9%A1%B5%E9%9D%A2%E5%BC%80%E5%A7%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>从模拟页面开始</h2>\n<p>想象我们已经有一个 JSON 接口和一个设计师给我们的原型图。原型图像下面这样：</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 228px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 121.49122807017542%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAIAAAB1KUohAAAACXBIWXMAABYlAAAWJQFJUiTwAAACZUlEQVQ4y4VU23KqQBD0/z8nL0bjJeId8aggctOggmDQIypKFIVNy6ZSpiKkH6aWWXpnenZmM4SQKIqud7g8AvzkFzJguq673+89z4M9HA4fP+H7Pix2f/Nv5OVyaRgG7Gq12m635BFOpxPiPyDjbHAcx/FibDYb2OPxCLvb7fYx8APiB0GAU7CgWdzI2EPker3e6XQURanVao1GAwt42u02bKvVYllWVVWe5yuVCn5AmjcyLRhNA+dhHYYh9VALZxgjivG9+CLLsowjNU2zbZt6kSSyGI/Hi8WCJONGFkUxm81yHIdUqRdCms3mYDDA1h9kRNB1HWGhSo8hCAKCT6dTOO91PSAj51wu1+v1EKdYLHa7XeSMT9RpOBz+QZ7NZvP5HDl/i8QNgTaZTHAc1fKQn6HlAR85j0Yjmic04yA4kblpmmlk1FkUhImmqYoiiSKaAJFRP/ghHneTVjDTtkfTqWIYqmFopnmNew5MSICcJMFfZNLpkNdX0mwShokYBva/rrc5TpYk3Ba0pKVNLIugqiiMphH8qmmnw+FN1y3LgmBMSxq5VK0+vbxUOS7PMBWWLaM/Wq0UqT/IK8cxZjPn/d00DKzXjmNbFgbwvs+T21OS+jyvyvIYZRdFSZZHolgoFDBStEnT0j5igm17vdt9XC62aTrLJd4WCMaEr9drrFOrXauR52dSKKDmEcsSz1u5bpVhELzf76Nhkzr8Rg48L/R94rrRdntGnOv1fD7TmHhM0H94QBIjC5iHUukfz/eHw3nc23go0GHlchkTks/nISExMkrqx8DjRL3wBDHOMZKu7ROsMUWkc+uRSQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Mockup"\n        title=""\n        src="/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png"\n        srcset="/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-13705.png 210w,\n/static/thinking-in-react-mock-1071fbcc9eed01fddc115b41e193ec11-4dd91.png 228w"\n        sizes="(max-width: 228px) 100vw, 228px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>我们的 JSON 接口返回类似下面的数据：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">[\n  {category: &quot;Sporting Goods&quot;, price: &quot;$49.99&quot;, stocked: true, name: &quot;Football&quot;},\n  {category: &quot;Sporting Goods&quot;, price: &quot;$9.99&quot;, stocked: true, name: &quot;Baseball&quot;},\n  {category: &quot;Sporting Goods&quot;, price: &quot;$29.99&quot;, stocked: false, name: &quot;Basketball&quot;},\n  {category: &quot;Electronics&quot;, price: &quot;$99.99&quot;, stocked: true, name: &quot;iPod Touch&quot;},\n  {category: &quot;Electronics&quot;, price: &quot;$399.99&quot;, stocked: false, name: &quot;iPhone 5&quot;},\n  {category: &quot;Electronics&quot;, price: &quot;$199.99&quot;, stocked: true, name: &quot;Nexus 7&quot;}\n];</code></pre>\n      </div>\n<h2 id="第一步：把-ui-划分出组件层级"><a href="#%E7%AC%AC%E4%B8%80%E6%AD%A5%EF%BC%9A%E6%8A%8A-ui-%E5%88%92%E5%88%86%E5%87%BA%E7%BB%84%E4%BB%B6%E5%B1%82%E7%BA%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>第一步：把 UI 划分出组件层级</h2>\n<p>第一件你要做的事情是用方框划分出每一个组件(和子组件)并给他们命名。如果你和设计师一起工作，他们可能已经完成了这些，所以去和他们聊聊吧！他们的 Photoshop 图层名称也许就是你的 React 组件名称！</p>\n<p>但你如何知道哪一部分应该成为一个组件？想想在编写代码时你在什么情况下需要新建一个函数或对象，思考方式是一样的。例如 <a href="https://en.wikipedia.org/wiki/Single_responsibility_principle">单一功能原则</a>，在理想状况下，一个组件应该只做一件事情。如果这个组件功能不断丰富，它应该被分成更小的组件。</p>\n<p>既然你经常向用户展示 JSON 数据模型，你会发现，如果你的模型构建正确，你的 UI (以及你的组件结构)会被很好的映射。这是因为 UI 和数据模型往往遵循着相同的<em>信息架构</em>，这意味着将 UI 划分成组件的工作往往是很容易的。只要把它划分成能准确表示你数据模型的一部分的组件就可以。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 275px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 116.00000000000001%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAIAAACEf/j0AAAACXBIWXMAABYlAAAWJQFJUiTwAAADjklEQVQ4y32UaXOjOBCG5///mZ1PM9lsbMcXvsExxge+MPbY5pIQCCTOHuFM1klt1cKDqqXiVR+0+AbiKjOArBr/H/hEtVJ+ExanxHY5wsxDAl6B/wPirscEnscsh0dBCGVSiUnAAlomacqTjPH0K4kgZkmS5kUJeVEFyhJAfgLAKzENE+Szk2k4tm1ZtzAMREhlUYgH7pYg4bzKr6zEPAWffIiDkAVRTikRSoyRT3xBFFGxizACMfo4pCHj7D5GX8WEB0FBkD9T1KW2Xi30N0VdLzf6aiuPp8KeyjPzcNrqe3mkLLUlpYXvp+/iHNNAtbDuoSONtz7Z+sE+CNcu2mBi0Ggf0ENA9yQUi8IwQrpwA4dQAFGwIsMgwr39ePnRkBraei6yyiEfKP1a+0VdzzLIWMk48ARE3iLkhAL1CwfyTIhzr7idGB9t9ur5Mt4d9pjojreynOnxpNseAUBliQHeEdMzpG7uQpFWnhHYS4S+//wpyZO61H1qNBqSJIznVlNeaGGWeVGE4ljgxTGJ2C6hTuFCnv7x7J+OW13X5uqbolzOZyiL2VRZzOfyZHzY79KEi9rHEY2jkMUscH/h5Ca8Vp7d0mJb/VenZXZam3+ePWUCp+NRTLtto9WM9RVcznA2Pzjxo45S648YgYU360G9pvZ743ZTHQ4gIItOW2s114MeEB8cG1znjg2exy+Hh9gBu1gt4O8naDag9gLPTzAZHXqS0Zd2nbanzYW4vF7gdr1j8fPuIXbBIsbBrddCqRv0pLDVpOvV21xV3qbyVDHMYxhRLNouEO3mkzB0vcvnsO05xs/dbn04bIxGjfH4ddC3bLtqZtEKWUY5i0TNEk4TLu5DHtuPape3m3XtjwZjeSLP3maaJquzvjyZLjRFm+/OJxRRJyBuGAi8kF59C2X2u2chtuLDbtXr7qeypa+XUvesyGq9tm63Vq1XZ70EJF65gW2BfQPHuef88amc0ioOO/j+F7w2oPkK4xFgbzMaKvWaPuhrnVZqXQEjsQUgFzBm1+OXgiWbVSR1smEv7UvRsAemcei09NeaIbWNbis/7uF8/MDk5uM7VzlT8yj3B7OJvFksieuJU7CdqauJshxPFuOJOPHVuRCnI2bAM+5eUdVheSW28wtiN983PWwgZPjkhH0T+SYmJ/RufIJgU7jycvtebfG/SQkvHjAxlkFl5J/Wxcq/FKTIiPiB/gZ6RfG+cqwoSwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Component diagram"\n        title=""\n        src="/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png"\n        srcset="/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-d08bb.png 210w,\n/static/thinking-in-react-components-eb8bda25806a89ebdc838813bdfa3601-82965.png 275w"\n        sizes="(max-width: 275px) 100vw, 275px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>在这里你会看到，我们的简单应用中有5个组件。我们把每个组件展示的数据用斜体表示。</p>\n<ol>\n<li><strong><code class="gatsby-code-text">FilterableProductTable</code> (橙色):</strong> 包含了整个例子</li>\n<li><strong><code class="gatsby-code-text">SearchBar</code> (蓝色):</strong> 接受所有的<em>用户输入</em></li>\n<li><strong><code class="gatsby-code-text">ProductTable</code> (绿色):</strong> 根据<em>用户输入</em>过滤并展示<em>数据集合</em></li>\n<li><strong><code class="gatsby-code-text">ProductCategoryRow</code> (绿松石色):</strong> 展示每个<em>分类</em>的标题</li>\n<li><strong><code class="gatsby-code-text">ProductRow</code> (红色):</strong> 用行来展示每个<em>产品</em></li>\n</ol>\n<p>如果你查看 <code class="gatsby-code-text">ProductTable</code>，你会发现表头(包含 <code class="gatsby-code-text">Name</code> 和 <code class="gatsby-code-text">Price</code> 标签)并没有作为一个组件。这是一个偏好问题，选择哪种方式目前还存在争议。在这个例子中，我们把它作为 <code class="gatsby-code-text">ProductTable</code> 的一部分，因为它是渲染<em>数据集合</em>的一部分，而渲染<em>数据集合</em>是 <code class="gatsby-code-text">ProductTable</code> 的职责。然而，如果头部变得更加复杂(也就是，如果我们添加了排序功能)，它就有足够的理由成为一个单独的 <code class="gatsby-code-text">ProductTableHeader</code> 组件。</p>\n<p>现在我们已经确定了原型图中的组件，让我们把它们整理成层级结构。这很容易。原型图中的子组件在层级结构中应该作为子节点。</p>\n<ul>\n<li>\n<p><code class="gatsby-code-text">FilterableProductTable</code></p>\n<ul>\n<li><code class="gatsby-code-text">SearchBar</code></li>\n<li>\n<p><code class="gatsby-code-text">ProductTable</code></p>\n<ul>\n<li><code class="gatsby-code-text">ProductCategoryRow</code></li>\n<li><code class="gatsby-code-text">ProductRow</code></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="第二步：用-react-创建一个静态版本"><a href="#%E7%AC%AC%E4%BA%8C%E6%AD%A5%EF%BC%9A%E7%94%A8-react-%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E9%9D%99%E6%80%81%E7%89%88%E6%9C%AC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>第二步：用 React 创建一个静态版本</h2>\n<p data-height="600" data-theme-id="0" data-slug-hash="vXpAgj" data-default-tab="js" data-user="lacker" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/lacker/pen/vXpAgj/">Thinking In React: Step 2</a> on <a href="http://codepen.io">CodePen</a>.</p>\n<script async src="//assets.codepen.io/assets/embed/ei.js"></script>\n<p>现在有了组件层级，是时候去实现你的应用了。最简单的方式是先创建一个静态版本：传入数据模型，渲染 UI 但没有任何交互。最好把这些过程解耦，因为创建一个静态版本更多需要的是码代码，不太需要逻辑思考，而添加交互则更多需要的是逻辑思考，不是码代码。我们会看看为什么是这样的。</p>\n<p>要构建一个用于呈现数据模型的静态版本的应用程序，你需要创建能够复用其他组件的组件，并通过 <em>props</em> 来传递数据。<em>props</em> 是一种从父级向子级传递数据的方法。如果你熟悉 <em>state</em> 的概念， 在创建静态版本的时候<em>不要使用 state</em>。State 只在交互的时候使用，即随时间变化的数据。由于这是静态版本的应用，你不需要使用它。</p>\n<p>你可以自顶向下或者自底向上构建应用。也就是，你可以从层级最高的组件开始构建(即 <code class="gatsby-code-text">FilterableProductTable</code>开始)或层级最低的组件开始构建(<code class="gatsby-code-text">ProductRow</code>)。在较为简单的例子中，通常自顶向下更容易，而在较大的项目中，自底向上会更容易并且在你构建的时候有利于编写测试。</p>\n<p>在这步的最后，你会拥有一个用于呈现数据模型的可重用组件库。这些组件只会有 <code class="gatsby-code-text">render()</code> 方法，因为这只是你的应用的静态版本。层级最高的组件(<code class="gatsby-code-text">FilterableProductTable</code>)会把数据模型作为 prop 传入。如果你改变你的基础数据模型并且再次调用 <code class="gatsby-code-text">ReactDOM.render()</code>， UI 会更新。很容易看到你的 UI 是如何更新的，哪里进行了更新。因为没有什么复杂的事情发生。React 的<strong>单向数据流</strong>(也叫作<em>单向绑定</em>)保证了一切是模块化并且是快速的。</p>\n<p>如果你在这步需要帮助，请参阅 <a href="/docs/">React 文档</a></p>\n<h3 id="一个小插曲：props-vs-state"><a href="#%E4%B8%80%E4%B8%AA%E5%B0%8F%E6%8F%92%E6%9B%B2%EF%BC%9Aprops-vs-state" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一个小插曲：Props VS State</h3>\n<p>在 React 中有两种数据模型：props 和 state。理解两者的差别是很重要的；如果你还不确定差别是什么，请查看<a href="/docs/state-and-lifecycle.html">React 官方文档</a></p>\n<h2 id="第三步：定义-ui-状态的最小但完整表示"><a href="#%E7%AC%AC%E4%B8%89%E6%AD%A5%EF%BC%9A%E5%AE%9A%E4%B9%89-ui-%E7%8A%B6%E6%80%81%E7%9A%84%E6%9C%80%E5%B0%8F%E4%BD%86%E5%AE%8C%E6%95%B4%E8%A1%A8%E7%A4%BA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>第三步：定义 UI 状态的最小(但完整)表示</h2>\n<p>为了使你的 UI 交互，你需要能够触发对底层数据模型的更改。React 使用 <strong>state</strong>，让这变的更容易。</p>\n<p>为了正确构建你的应用，首先你需要考虑你的应用所需要的最小可变状态集。要点是 DRY：<em>不要重复(Don’t Repeat Yourself)</em>。找出应用程序的绝对最小表示并计算你所需要的其他任何请求。例如，如果你正在创建一个 TODO 列表，只要保存一个包含 TODO 事项的数组；不要为计数保留一个单独的状态变量。相反，当你想要渲染 TODO 计数时，只需要使用 TODO 数组的长度就可以了。</p>\n<p>想想我们的实例应用中所有数据。我们有：</p>\n<ul>\n<li>原产品列表</li>\n<li>用户输入的搜索文本</li>\n<li>复选框的值</li>\n<li>产品的筛选列表</li>\n</ul>\n<p>让我们来看看每一条，找出哪一个是 state。每个数据只要考虑三个问题：</p>\n<ol>\n<li>它是通过 props 从父级传来的吗？如果是，他可能不是 state。</li>\n<li>它随着时间推移不变吗？如果是，它可能不是 state。</li>\n<li>你能够根据组件中任何其他的 state 或 props 把它计算出来吗？如果是，它不是 state。</li>\n</ol>\n<p>原产品列表被作为 props 传入，所以它不是 state。搜索文本和复选框似乎是 state，因为它们随时间改变并且不能由其他任何值计算出来。最后，产品的筛选列表不是 state，因为它可以通过将原始产品列表与搜索文本和复选框的值组合计算出来。</p>\n<p>最后，我们的 state 有：</p>\n<ul>\n<li>用户输入的搜索文本</li>\n<li>复选框的值</li>\n</ul>\n<h2 id="第四步：确定你的-state-应该位于哪里"><a href="#%E7%AC%AC%E5%9B%9B%E6%AD%A5%EF%BC%9A%E7%A1%AE%E5%AE%9A%E4%BD%A0%E7%9A%84-state-%E5%BA%94%E8%AF%A5%E4%BD%8D%E4%BA%8E%E5%93%AA%E9%87%8C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>第四步：确定你的 State 应该位于哪里</h2>\n<p data-height="600" data-theme-id="0" data-slug-hash="ORzEkG" data-default-tab="js" data-user="lacker" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/lacker/pen/ORzEkG/">Thinking In React: Step 4</a> by Kevin Lacker (<a href="http://codepen.io/lacker">@lacker</a>) on <a href="http://codepen.io">CodePen</a>.</p>\n<script async src="//assets.codepen.io/assets/embed/ei.js"></script>\n<p>好的，现在我们确定了应用 state 的最小集合。接下来，我们需要确定哪个组件会改变，或拥有这个 state。</p>\n<p>记住：React 中的数据流是单向的，并在组件层次结构中向下传递。一开始我们可能不是很清楚哪个组件应该拥有哪个 state。<strong>在新手理解上这通常是最富有挑战性的部分</strong>，所以按照下面的步骤来辨别：</p>\n<p>对你应用的每一个 state：</p>\n<ul>\n<li>确定每一个需要这个 state 来渲染的组件。</li>\n<li>找到一个公共所有者组件(一个在层级上高于所有其他需要这个 state 的组件的组件)</li>\n<li>这个公共所有者组件或另一个层级更高的组件应该拥有这个 state。</li>\n<li>如果你没有找到可以拥有这个 state 的组件，创建一个仅用来保存状态的组件并把它加入比这个公共所有者组件层级更高的地方。</li>\n</ul>\n<p>让我们用这个策略分析我们的应用：</p>\n<ul>\n<li><code class="gatsby-code-text">ProductTable</code> 需要根据 state 过滤产品列表，<code class="gatsby-code-text">SearchBar</code> 需要展示搜索文本和复选框状态。</li>\n<li>公共所有者组件是 <code class="gatsby-code-text">FilterableProductTable</code>。</li>\n<li>筛选文本和复选框的值应该放在 <code class="gatsby-code-text">FilterableProductTable</code>。</li>\n</ul>\n<p>很酷，所以我们决定把 state 放在 <code class="gatsby-code-text">FilterableProductTable</code>。首先，为 <code class="gatsby-code-text">FilterableProductTable</code> 的 <code class="gatsby-code-text">constructor</code> 添加一个实例属性 <code class="gatsby-code-text">this.state = {filterText: &#39;&#39;, inStockOnly: false}</code> 来表示我们应用的初始状态。接下来，把 <code class="gatsby-code-text">filterText</code> 和 <code class="gatsby-code-text">inStockOnly</code> 作为 prop 传入 <code class="gatsby-code-text">ProductTable</code> 和 <code class="gatsby-code-text">SearchBar</code>。最后在 <code class="gatsby-code-text">ProductTable</code> 中使用这些 props 来筛选每行产品信息，在 <code class="gatsby-code-text">SearchBar</code> 中设置表单域的值。</p>\n<p>现在你能够看到你的应用是如何运作的了：设置 <code class="gatsby-code-text">filterText</code> 的值为 <code class="gatsby-code-text">ball</code> 并刷新你的应用。你会看到数据表格正确的更新了。</p>\n<h2 id="第五步：添加反向数据流"><a href="#%E7%AC%AC%E4%BA%94%E6%AD%A5%EF%BC%9A%E6%B7%BB%E5%8A%A0%E5%8F%8D%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>第五步：添加反向数据流</h2>\n<p data-height="265" data-theme-id="0" data-slug-hash="qRqmjd" data-default-tab="js,result" data-user="rohan10" data-embed-version="2" data-pen-title="Thinking In React: Step 5" class="codepen">See the Pen <a href="http://codepen.io/rohan10/pen/qRqmjd">Thinking In React: Step 5</a> on <a href="http://codepen.io">CodePen</a>.</p>\n<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>\n<p>到目前为止，我们已经创建了一个可以正确渲染的应用程序，它的数据在层级中通过函数的 props 和 state 向下流动。现在是时候支持其他方式的数据流了：层级结构中最底层的表单组件需要去更新在 <code class="gatsby-code-text">FilterableProductTable</code> 中的 state。</p>\n<p>React 的数据流很明显，让你可以很轻松的了解你的程序是如何运行的，但相较于传统的双向绑定，它的代码量会稍微多一点。</p>\n<p>在当前版本的示例中，如果你试图键入或选中复选框，你会发现 React 会忽略你的输入。这是故意的，因为我们把 <code class="gatsby-code-text">input</code> 的 <code class="gatsby-code-text">value</code> 属性设置为一直等于从 <code class="gatsby-code-text">FilterableProductTable</code> 传入的 <code class="gatsby-code-text">state</code>.</p>\n<p>让我们想想我们想要做什么。我们想确保每当用户更改表单时，我们更新状态来反应用户输入。因为组件应该只更新自己的状态， <code class="gatsby-code-text">FilterableProductTable</code> 会将一个回调函数传递给 <code class="gatsby-code-text">SearchBar</code> ，每当应该更新状态时，它就会触发。我们可以使用输入上的 <code class="gatsby-code-text">onChange</code> 事件来调用它。<code class="gatsby-code-text">FilterableProductTable</code> 传入的回调函数会调用 <code class="gatsby-code-text">setState()</code>，这时应用程序会被更新。</p>\n<p>虽然这听起来很复杂，但它只是几行代码的问题。而且，你可以清楚地看出你的应用中数据是如何流动的。</p>\n<h2 id="就是这样"><a href="#%E5%B0%B1%E6%98%AF%E8%BF%99%E6%A0%B7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>就是这样</h2>\n<p>希望这可以让你了解如何使用 React 构建组件和应用程序。虽然这可能会比以前编写更多的代码，但请记住，代码是用来读的，这比写更重要，并且非常容易阅读这个模块化的，思路清晰的代码。当你开始构建大型组件库的时候，你会开始欣赏 React 的思路清晰化和模块性，并且随着代码的复用，你的代码量会开始减少。:)</p>',frontmatter:{title:"React 理念",next:null,prev:"composition-vs-inheritance.html"},fields:{path:"docs/thinking-in-react.md",slug:"docs/thinking-in-react.html"}}},pathContext:{slug:"docs/thinking-in-react.html"}}}});
//# sourceMappingURL=path---docs-thinking-in-react-html-3c022c6ce13f3544d174.js.map