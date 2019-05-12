import React from 'react'
import { css } from 'emotion'
import defaultEmptyRenderer from '../../defaultEmptyRenderer';

export default class CollaboratorField extends React.Component {

    render() {

        const collaborator = this.props.collaborators.find(collaborator => {
            return collaborator.id === this.props.collaboratorId
        })

        return (
            <div
                className={css`
                    display: flex;
                    height: auto;
                    position: relative;
                    white-space: normal;
                    overflow: visible;
                    box-sizing: border-box;
                `}
            >
                <div
                    className={css`
                        display: flex;
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                        line-height: 1.5;
                    `}
                >
                    <div
                        className={css`
                            cursor: pointer;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                        `}
                    >
                        {collaborator ? collaborator.name : defaultEmptyRenderer()}
                    </div>
                </div>
            </div>
        )
    }
}