import React, { Component } from 'react'
import { render } from 'react-dom'
import { css, injectGlobal } from 'emotion'
import { Canvas, Heading, Paragraph, Box } from '@pndr/demo-utils'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
    }
`

import CollaboratorField from '../../src'

class Example extends Component {

    render() {
        return (
            <div>
                <div>
                    <CollaboratorField
                        id={'field'}
                        roleId={this.props.roleId}
                        contextId={this.props.contextId}
                        collaboratorId={this.props.collaboratorId}
                        collaborators={[{
                            id: 'col1',
                            name: 'Luke Skywalker'
                        }, {
                            id: 'col2',
                            name: 'Darth Vader'
                        }, {
                            id: 'col3',
                            name: 'Leia Organa'
                        }]}
                        onChange={this.props.onChange}
                    />
                </div>
            </div>
        )
    }
}

class Demo extends React.Component {

    state = {
        collaboratorId: 'col1'
    }

    render() {

        return (
            <Canvas>
                <Heading>
                    RecordDetail context
                </Heading>
                <Paragraph>
                    With editor role
                </Paragraph>
                <Box>
                    <Example
                        roleId={'editor'}
                        contextId={'recordDetail'}
                        collaboratorId={this.state.collaboratorId}
                        onChange={this.handleChange}
                    />
                </Box>
                <Paragraph>
                    State
                </Paragraph>
                <Box>
                    <pre>
                        {JSON.stringify(this.state, null, 2)}
                    </pre>
                </Box>
                <Paragraph>
                    With read only role
                </Paragraph>
                <Box>
                    <Example
                        roleId={'readOnly'}
                        contextId={'recordDetail'}
                        collaboratorId={this.state.collaboratorId}
                        onChange={this.handleChange}
                    />
                </Box>
                <Heading>
                    RecordListItem context
                </Heading>
                <Paragraph>
                    With read only role
                </Paragraph>
                <Box>
                    <Example
                        roleId={'readOnly'}
                        contextId={'recordListItem'}
                        collaboratorId={this.state.collaboratorId}
                        onChange={this.handleChange}
                    />
                </Box>
                <Heading>
                    RecordGalleryCard context
                </Heading>
                <Paragraph>
                    With read only role
                </Paragraph>
                <Box>
                    <Example
                        roleId={'readOnly'}
                        contextId={'recordGalleryCard'}
                        collaboratorId={this.state.collaboratorId}
                        onChange={this.handleChange}
                    />
                </Box>
            </Canvas>
        )
    }

    handleChange = ({ collaboratorId }) => this.setState({ collaboratorId })
}

render(<Demo />, document.querySelector('#demo'))
