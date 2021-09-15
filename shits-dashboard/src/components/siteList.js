import React from 'react'
import { Datagrid, List, TextField } from 'react-admin'


export default function siteList(props) {
    return (
        <div>
             <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='body'/>
            </Datagrid>
        </List>
        </div>
    )
}
