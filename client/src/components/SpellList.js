import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSpells } from '../actions/spellActions'
import PropTypes from 'prop-types'

import { Container, ListGroup, ListGroupItem } from 'reactstrap'

class SpellList extends Component {
  componentDidMount() {
    this.props.getSpells()
  }

  static propTypes = {
    getSpells: PropTypes.func.isRequired,
    spells: PropTypes.object.isRequired
  }

  render() {
    const { spells } = this.props
    return (
      <Container>
        <ListGroup>
          {spells.results &&
            spells.results.map(spell => (
              <ListGroupItem>{spell.name}</ListGroupItem>
            ))}
        </ListGroup>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  spells: state.spells.spells
})

export default connect(
  mapStateToProps,
  { getSpells }
)(SpellList)
