import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  Container,
  ListGroup,
  ListGroupItem,
  Spinner,
  Button,
  Row,
  Col
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { getCharacters, deleteCharacter } from '../actions/characterActions'
import CharacterModal from './CharacterModal'

class CharacterList extends Component {
  state = {
    edit: false
  }

  componentDidMount() {
    this.props.getCharacters()
  }

  static propTypes = {
    getCharacters: PropTypes.func.isRequired,
    deleteCharacter: PropTypes.func.isRequired,
    characters: PropTypes.array.isRequired,
    loading: PropTypes.bool
  }

  onDeleteClick = id => {
    this.props.deleteCharacter(id)

    if (this.props.characters.length === 1) {
      this.setState({
        edit: false
      })
    }
  }

  navigate = name => {
    this.props.history.push(`/${name}`)
  }

  render() {
    const { characters, loading } = this.props

    return (
      <Container>
        <CharacterModal />
        {!loading ? (
          <ListGroup>
            <TransitionGroup className='shopping-list'>
              {characters.map(({ _id, name }) => (
                <CSSTransition key={_id} timeout={500} classNames='fade'>
                  <ListGroupItem>
                    <Row>
                      <Col
                        xs='11'
                        className='d-flex align-items-center'
                        style={{ cursor: 'pointer' }}
                        onClick={this.navigate.bind(this, name)}
                      >
                        {name}
                      </Col>
                      <Col xs='1' className='d-flex justify-content-end'>
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          style={{ cursor: 'pointer' }}
                          color='red'
                          onClick={this.onDeleteClick.bind(this, _id)}
                        />
                      </Col>
                    </Row>
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
        ) : (
          <Container className='spinner-container'>
            <Spinner
              style={{ width: '3rem', height: '3rem' }}
              color='secondary'
            />
          </Container>
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  characters: state.character.characters,
  loading: state.character.loading
})

export default connect(
  mapStateToProps,
  { getCharacters, deleteCharacter }
)(CharacterList)
