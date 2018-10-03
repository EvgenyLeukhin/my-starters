// =========================== CONTENT SWITCHER I (? :) =========================== ->
class App extends Component {

  state = {
    contentShow: false
  }

  contentToogle = () => {
    const doesShow = this.state.contentShow;
    this.setState({ contentShow: !doesShow });
  }

  render() {
    return (
      <div>
        <button onClick={this.contentToogle}>Show content</button>
        { this.state.contentShow ?  // this.state.contentShow === true
          <div>
            <h4>Some title</h4>
            <p>Some content</p>
          </div> : null }
      </div>
    );
  }
}
// =========================== CONTENT SWITCHER I (? :) =========================== -<





// =========================== CONTENT SWITCHER II (if - better way)=========================== ->
class App extends Component {

  state = {
    contentShow: false
  }

  contentToogle = () => {
    const doesShow = this.state.contentShow;
    this.setState({ contentShow: !doesShow });
  }

  render() {
    let someContent = null;
    if (this.state.contentShow) {
      someContent = (
        <div>
          <h4>Some title</h4>
          <p>Some content</p>
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.contentToogle}>Show content</button>
        {someContent}
      </div>
    );
  }
}
// =========================== CONTENT SWITCHER II (if) =========================== -<