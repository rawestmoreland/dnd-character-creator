import React, { Component } from 'react'
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addCharacter } from '../actions/characterActions'
import { getClasses, getRaces } from '../actions/externalAPIActions'
import PropTypes from 'prop-types'

class CharacterModal extends Component {
	state = {
		// Modal is closed when page loads
		modal: false,
		name: '',
		class: '',
		race: ''
	}

	static propTypes = {
		getClasses: PropTypes.func.isRequired,
		addCharacter: PropTypes.func.isRequired,
		getRaces: PropTypes.func.isRequired,
		races: PropTypes.array,
		clases: PropTypes.array
	}

	componentDidMount() {
		this.props.getClasses()
		this.props.getRaces()
	}

	// Toggle the modal visibility
	toggle = () => {
		this.setState({
			modal: !this.state.modal
		})
	}

	// Change the state of the text input variables for the POST requests
	onChange = e => {
		// Update the name state to show in the text box and have a name to submit

		this.setState({
			[e.target.name]: e.target.value
		})
		console.log(this.state)
	}

	onSubmit = e => {
		// Prevent the page from refreshing on submit
		e.preventDefault()

		const newCharacter = {
			name: this.state.name,
			class: this.state.class,
			race: this.state.race
		}

		// Add new character to the database
		this.props.addCharacter(newCharacter)

		// Close the modal
		this.toggle()
	}

	render() {
		const { races, classes } = this.props
		return (
			<div>
				<Button
					color='dark'
					style={{ marginBottom: '2rem' }}
					onClick={this.toggle}
				>
					New Character
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle} centered={true}>
					<ModalHeader toggle={this.toggle}>Add a New Character</ModalHeader>
					<ModalBody>
						<p>This is where you will pick some stuff</p>
					</ModalBody>
				</Modal>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	classes: state.external.classes.results,
	races: state.external.races.results
})

export default connect(mapStateToProps, { addCharacter, getClasses, getRaces })(
	CharacterModal
)
