webpackJsonp([0x7a8e9da49b9c],{984:function(e,n){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"function enhance(Component) {\\n  class Enhanced extends React.Component {\\n    // ...\\n\\n    render() {\\n      const {forwardedRef, ...rest} = this.props;\\n\\n      // Assign the custom prop \\"forwardedRef\\" as a ref\\n      // highlight-next-line\\n      return <Component ref={forwardedRef} {...rest} />;\\n    }\\n  }\\n\\n  // Intercept the \\"ref\\" and pass it as a custom prop, e.g. \\"forwardedRef\\"\\n  // highlight-range{1-3}\\n  function enhanceForwardRef(props, ref) {\\n    return <Enhanced {...props} forwardedRef={ref} />;\\n  }\\n\\n  // These next lines are not necessary,\\n  // But they do give the component a better display name in DevTools,\\n  // e.g. \\"ForwardRef(withTheme(MyComponent))\\"\\n  const name = Component.displayName || Component.name;\\n  enhanceForwardRef.displayName = `enhance(${name})`;\\n\\n  // highlight-next-line\\n  return React.forwardRef(enhanceForwardRef);\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-reference-react-forward-ref-7e69c8567ef1a0fff538.js.map