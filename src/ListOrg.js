import React from 'react'

class ListOrg extends React.Component {

    state = {
      query: ''
    }

    updateQuery = (query) => {
      this.setState({ query: query.trim() })
    }

  render() {

    return (
      <div id="list-div">
      <input
        className="search-places"
        type="text"
        placeholder="Search places"
        value={this.state.query}
        onChange={(event) => this.updateQuery(event.target.value)}
        />
      </div>

  )
}
}

export default ListOrg
