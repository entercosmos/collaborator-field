import React from 'react'
import Select from '@pndr/select'

export default class SingleLineTextField extends React.Component {

    render() {

        return (
            <Select
                clearable={true}
                options={this.props.collaborators}
                value={this.props.collaboratorId}
                onChange={this.handleChange}
            />
        )
    }

    handleChange = ({value}) => {

        console.log('handleChange', value)

        this.props.onChange({
            id: this.props.id,
            collaboratorId: value
        })
    }
}