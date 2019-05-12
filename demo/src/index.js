import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import {Canvas, Heading, Paragraph, Box} from '@pndr/demo-utils'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        background-color: #fff;
    }
`

import CollaboratorField from '../../src'

class Example extends Component {

    state = {
        collaboratorId: 'col1'
    }

    render() {
        return (
            <div>
                <div>
                    <CollaboratorField
                        id={'field'}
                        roleId={this.props.roleId}
                        contextId={this.props.contextId}
                        collaboratorId={this.state.collaboratorId}
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
                        onChange={({collaboratorId}) => this.setState({collaboratorId})}
                    />
                </div>
                {this.props.roleId === 'editor' ? (
                    <div>
                        <h5>
                            State
                        </h5>
                        <pre>
                    {JSON.stringify(this.state, null, 2)}
                    </pre>
                    </div>
                ) : null}
            </div>
        )
    }
}

class Demo extends React.Component {

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
                    />
                </Box>
                <Paragraph>
                    With read only role
                </Paragraph>
                <Box>
                    <Example
                        roleId={'readOnly'}
                        contextId={'recordDetail'}
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
                    />
                </Box>
            </Canvas>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
