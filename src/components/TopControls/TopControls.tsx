import { Component, ChangeEvent } from 'react';
import { TopControlsState, TopControlsProps } from '../../types/types';
import './top-controls.scss';

class TopControls extends Component<TopControlsProps, TopControlsState> {
  state: TopControlsState = {
    search: this.props.placeholder || '',
  };

  componentDidUpdate(prevProps: TopControlsProps) {
    if (prevProps.placeholder !== this.props.placeholder) {
      this.setState({ search: this.props.placeholder || '' });
    }
  }

  handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: e.target.value });
  };

  handleSearchClick = () => {
    this.setState({ search: this.state.search.trim() });
    this.props.onSearch(this.state.search.trim());
  };

  render() {
    return (
      <div className="top-controls">
        <input
          type="text"
          placeholder="Search for a pokemon"
          value={this.state.search}
          onChange={this.handleSearch}
        />
        <button onClick={this.handleSearchClick}>Search</button>
      </div>
    );
  }
}

export default TopControls;
