webpackJsonp([0x7625339ab4e5],{1003:function(e,t){e.exports={pathContext:{action:"https://codepen.io/pen/define",payload:'{"editors":"0010","html":"<div id=\\"root\\"></div>","js":"class ScrollingList extends React.Component {\\n  listRef = null;\\n  previousScrollHeight = null;\\n\\n  // highlight-range{1-7}\\n  componentWillUpdate(nextProps, nextState) {\\n    // Are we adding new items to the list?\\n    // Capture the current height of the list so we can adjust scroll later.\\n    if (this.props.list.length < nextProps.list.length) {\\n      this.previousScrollHeight = this.listRef.scrollHeight;\\n    }\\n  }\\n\\n  // highlight-range{1-10}\\n  componentDidUpdate(prevProps, prevState) {\\n    // If previousScrollHeight is set, we\'ve just added new items.\\n    // Adjust scroll so these new items don\'t push the old ones out of view.\\n    if (this.previousScrollHeight !== null) {\\n      this.listRef.scrollTop +=\\n        this.listRef.scrollHeight -\\n        this.previousScrollHeight;\\n      this.previousScrollHeight = null;\\n    }\\n  }\\n\\n  render() {\\n    return (\\n      <div ref={this.setListRef}>\\n        {/* ...contents... */}\\n      </div>\\n    );\\n  }\\n\\n  setListRef = ref => {\\n    this.listRef = ref;\\n  };\\n}\\n","js_external":"//unpkg.com/react/umd/react.development.js;//unpkg.com/react-dom/umd/react-dom.development.js","js_pre_processor":"babel","layout":"left"}'}}}});
//# sourceMappingURL=path---redirect-to-codepen-update-on-async-rendering-react-dom-properties-before-update-before-a47cfa0f89ede1b017f8.js.map