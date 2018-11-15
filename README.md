# ![CollaboratorField](https://user-images.githubusercontent.com/44801418/48109949-2d61b400-e27c-11e8-830e-29347fc455b0.png) CollaboratorField

[![npm package][npm-badge]][npm]

Used for selecting a collaborator.

## Getting started

````
npm install @cmds/collaborator-field --save
````
	
### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this field |
| contextId | Context | ✓ | The appearance will change depending on context in which the field is displayed. Valid options include: `recordDetail` or `recordGridRow` or `recordGalleryCard` or `recordListItem` |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| collaborators | Array | ✓ | List of collaborators that can be selected |
| collaboratorId | String |  | Selected collaborator |
| onChange | Function |  | Callback invoked whenever a collaborator get's selected: `({id: string, collaboratorId: string}): void` |

````jsx harmony
import CollaboratorField from '@cmds/collaborator-field'

<CollaboratorField
    id={'fld1'}
    contextId={'recordGalleryCard'}
    roleId={'readOnly'}
    collaborators={[{
        id: 'col1',
        name: 'Luke Skywalker'
    }, {
        id: 'col2',
        name: 'Leia Organa'
    }]}
    collaboratorId={'col1'}
    onChange={({id, collaboratorId}) => {
        // do something
    }}
/>
````

### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/collaborator-field.svg
[npm]: https://www.npmjs.org/package/@cmds/collaborator-field
