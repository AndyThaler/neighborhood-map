import React from 'react'

class Info extends React.Component {

  render() {

    return (
      <div id='information'>
      <h1>{this.props.selectedLoc ||'Welcome! Please Select An Emergency Service Station!'}</h1>
      <p>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lectus ut purus placerat dignissim. In sollicitudin rutrum efficitur. Sed in posuere ante. Phasellus feugiat lorem ac lectus molestie dignissim. Etiam pellentesque convallis molestie. Sed ultrices pretium eros, ac egestas felis rhoncus sit amet. Quisque et ex a ex posuere suscipit.

Praesent a nisl molestie magna interdum malesuada luctus in nulla. Sed mollis eros sit amet rhoncus condimentum. Donec quis turpis ullamcorper, pharetra ipsum a, placerat erat. Mauris accumsan vulputate efficitur. Maecenas orci nunc, fringilla sit amet maximus sed, gravida non urna. Phasellus non nunc ut urna facilisis bibendum. Donec fermentum mauris id dui iaculis dapibus. Nulla facilisis tellus ac elit placerat imperdiet. Aenean convallis rutrum nulla, sed vestibulum sapien placerat eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in blandit tortor, ac sodales augue. Duis et pellentesque mi, nec convallis eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean pharetra diam sit amet mauris laoreet mattis.</p>
      </div>
  )
}
}
export default Info
