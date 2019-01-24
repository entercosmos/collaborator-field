import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'

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
                <div
                    className={css`
                    width: 300px;
                    display: flex;
                    height: 40px;
                `}
                >
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
            <div>
                <h1>CollaboratorField Demo</h1>
                <p>
                    Used for selecting a collaborator.
                </p>
                <h2>
                    Context based
                </h2>
                The behaviour of the component changes based on the context in which it is rendered.
                <h3>
                    RecordDetail context
                </h3>
                <p>
                    Used for displaying the collaborator field in a record detail.
                </p>
                <h4>
                    Editor role
                </h4>
                <Example
                    roleId={'editor'}
                    contextId={'recordDetail'}
                />
                <h4>
                    Read only role
                </h4>
                <Example
                    roleId={'readOnly'}
                    contextId={'recordDetail'}
                />
                <h3>
                    RecordListItem context
                </h3>
                <h4>
                    Read only role
                </h4>
                <Example
                    roleId={'readOnly'}
                    contextId={'recordListItem'}
                />
                <h3>
                    RecordGalleryCard context
                </h3>
                <h4>
                    Read only role
                </h4>
                <Example
                    roleId={'readOnly'}
                    contextId={'recordGalleryCard'}
                />
            </div>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
