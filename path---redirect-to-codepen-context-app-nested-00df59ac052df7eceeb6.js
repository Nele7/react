webpackJsonp([0xb6eacee2f18b],{956:function(e,t){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"import {ThemeContext, themes} from \'./theme-context\';\\nimport ThemeTogglerButton from \'./theme-toggler-button\';\\n\\nclass App extends React.Component {\\n  constructor(props) {\\n    super(props);\\n\\n    this.toggleTheme = () => {\\n      this.setState(state => ({\\n        theme:\\n          state.theme === themes.dark\\n            ? themes.light\\n            : themes.dark,\\n      }));\\n    };\\n    // State 包含了 updater 函数 所以它可以传递给底层的 context Provider\\n    this.state = {\\n      theme: themes.light,\\n      toggleTheme: this.toggleTheme,\\n    };\\n  }\\n\\n  render() {\\n    // 入口 state 传递给 provider\\n    return (\\n      <ThemeContext.Provider value={this.state}>\\n        <Content />\\n      </ThemeContext.Provider>\\n    );\\n  }\\n}\\n\\nfunction Content() {\\n  return (\\n    <div>\\n      <ThemeTogglerButton />\\n    </div>\\n  );\\n}\\n\\nReactDOM.render(<App />, document.root);\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-context-app-nested-00df59ac052df7eceeb6.js.map