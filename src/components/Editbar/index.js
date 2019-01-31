import React from 'react';
import Classification from './Classification';
import FontOptions from './Fontoptions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fontActions from '../../actions';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activeClassification: '',
      categories: this.props.categories,
      fontFamily: this.props.fonts.fontFamily,
      category: this.props.fonts.category,
      fonts: this.props.fonts.fonts,
      fontSize: this.props.fonts.fontSize,
      displayColorPicker: true
    }
    this.handleChangeFontFamily = this.handleChangeFontFamily.bind(this);
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleFontColorChange = this.handleFontColorChange.bind(this);
    this.handleOnClickColorChange = this.handleOnClickColorChange.bind(this);
  }

  handleChangeFontFamily = (e) => {
    this.props.actions.changeFontFamily(e.target.value);
    this.setState({ fontFamily: e.target.value });
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css?family=${e.target.value.replace(/\s/g, "+")}`;
    document.head.appendChild(link);
  }

  handleCategoryChange = (e) => {
    if (this.state.activeClassification !== e.target.id) {
      this.setState({ activeClassification: e.target.id });
      this.props.actions.changeCategory(e.target.id);
    } else {
      this.setState({ activeClassification: '' });
      this.props.actions.changeCategory('');
    }
  }

  handleFontSizeChange = (e) => {
    this.setState({ fontSize: e.target.value })
    this.props.actions.changeFontSize(e.target.value);
  }

  handleFontColorChange = (e) => {
    this.setState({ fontColor: { r: '', g: '', b: '' } })
  }

  handleOnClickColorChange = (e) => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker});
  }

  render() {
    const style = {
      padding: '10px',
      backgroundColor: 'rgba(222, 226, 232, 0.2)'
    }
    return (

      <div style={style}>
        <section>
          <Classification
            activeClassification={this.state.activeClassification}
            fonts={this.props.fonts}
            categories={this.props.fonts.categories}
            handleCategoryChange={this.handleCategoryChange}
            isFetching={this.props.fonts.isFetching}
          />
        </section>
        <section>
          <FontOptions
            isFetchingCategories={this.props.fonts.isFetchingCategories}
            handleChangeFontFamily={this.handleChangeFontFamily}
            handleFontSizeChange={this.handleFontSizeChange}
            handleFontColorChange={this.handleFontColorChange}
            displayColorPicker={this.state.displayColorPicker}
            handleOnClickColorChange={this.handleOnClickColorChange}
            state={this.state}
            fontSize={this.state.fontSize}
            fonts={this.state.activeClassification ? this.props.fonts.fonts.filter((font) => font.category === this.state.activeClassification) : this.props.fonts.fonts}
          />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    fonts: state.fonts,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(fontActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
