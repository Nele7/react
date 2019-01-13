webpackJsonp([70370423703621],{889:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Ref forwarding is a technique for passing a <a href="/docs/refs-and-the-dom.html">ref</a> through a component to one of its descendants. This technique can be particularly useful with <a href="/docs/higher-order-components.html">higher-order components</a> (also known as HOCs).</p>\n<p>Let’s start with an example HOC that logs component props to the console:\n<div class="gatsby-highlight">\n        <pre class="gatsby-code-jsx"><code><span class="gatsby-highlight-code-line"><span class="token keyword">function</span> <span class="token function">logProps</span><span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span>  <span class="token keyword">class</span> <span class="token class-name">LogProps</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'old props:\'</span><span class="token punctuation">,</span> prevProps<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'new props:\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WrappedComponent</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">this</span><span class="token punctuation">.</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</span>    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> LogProps<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n        </div></p>\n<p>The “logProps” HOC passes all <code class="gatsby-code-text">props</code> through to the component it wraps, so the rendered output will be the same. For example, we can use this HOC to log all props that get passed to our “fancy button” component:\n<div class="gatsby-highlight">\n        <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">FancyButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Rather than exporting FancyButton, we export LogProps.</span>\n<span class="token comment">// It will render a FancyButton though.</span>\n<span class="gatsby-highlight-code-line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">logProps</span><span class="token punctuation">(</span>FancyButton<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></code></pre>\n        </div></p>\n<p>There is one caveat to the above example: refs will not get passed through. That’s because <code class="gatsby-code-text">ref</code> is not a prop. Like <code class="gatsby-code-text">key</code>, it’s handled differently by React. If you add a ref to a HOC, the ref will refer to the outermost container component, not the wrapped component.</p>\n<p>This means that refs intended for our <code class="gatsby-code-text">FancyButton</code> component will actually be attached to the <code class="gatsby-code-text">LogProps</code> component:\n<div class="gatsby-highlight">\n        <pre class="gatsby-code-jsx"><code><span class="token keyword">import</span> FancyButton <span class="token keyword">from</span> <span class="token string">\'./FancyButton\'</span><span class="token punctuation">;</span>\n\n<span class="gatsby-highlight-code-line"><span class="token keyword">const</span> ref <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>\n<span class="token comment">// The FancyButton component we imported is the LogProps HOC.</span>\n<span class="token comment">// Even though the rendered output will be the same,</span>\n<span class="token comment">// Our ref will point to LogProps instead of the inner FancyButton component!</span>\n<span class="token comment">// This means we can\'t call e.g. ref.current.focus()</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FancyButton</span>\n  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Click Me<span class="token punctuation">"</span></span>\n  <span class="token attr-name">handleClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span>\n<span class="gatsby-highlight-code-line">  <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span>\n</span><span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</code></pre>\n        </div></p>\n<p>Fortunately, we can explicitly forward refs to the inner <code class="gatsby-code-text">FancyButton</code> component using the <code class="gatsby-code-text">React.forwardRef</code> API. <code class="gatsby-code-text">React.forwardRef</code> accepts a render function that receives <code class="gatsby-code-text">props</code> and <code class="gatsby-code-text">ref</code> parameters and returns a React node. For example:\n<div class="gatsby-highlight">\n        <pre class="gatsby-code-jsx"><code><span class="token keyword">function</span> <span class="token function">logProps</span><span class="token punctuation">(</span>Component<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">class</span> <span class="token class-name">LogProps</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'old props:\'</span><span class="token punctuation">,</span> prevProps<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'new props:\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">      <span class="token keyword">const</span> <span class="token punctuation">{</span>forwardedRef<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">;</span>\n</span>\n      <span class="token comment">// Assign the custom prop "forwardedRef" as a ref</span>\n<span class="gatsby-highlight-code-line">      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Component</span> <span class="token attr-name">ref</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>forwardedRef<span class="token punctuation">}</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">rest</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</span>    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// Note the second param "ref" provided by React.forwardRef.</span>\n  <span class="token comment">// We can pass it along to LogProps as a regular prop, e.g. "forwardedRef"</span>\n  <span class="token comment">// And it can then be attached to the Component.</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">function</span> <span class="token function">forwardRef</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> ref<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LogProps</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token attr-name">forwardedRef</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>ref<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span>\n  <span class="token comment">// These next lines are not necessary,</span>\n  <span class="token comment">// But they do give the component a better display name in DevTools,</span>\n  <span class="token comment">// e.g. "ForwardRef(logProps(MyComponent))"</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">const</span> name <span class="token operator">=</span> Component<span class="token punctuation">.</span>displayName <span class="token operator">||</span> Component<span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  forwardRef<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token template-string"><span class="token string">`logProps(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)`</span></span><span class="token punctuation">;</span>\n</span>\n  <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">forwardRef</span><span class="token punctuation">(</span>forwardRef<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n        </div></p>',frontmatter:{title:"Forwarding Refs",next:null,prev:null},fields:{path:"docs/forwarding-refs.md",slug:"docs/forwarding-refs.html"}}},pathContext:{slug:"docs/forwarding-refs.html"}}}});
//# sourceMappingURL=path---docs-forwarding-refs-html-49436b9cd5a4f6218033.js.map