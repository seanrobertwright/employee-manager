import React from 'react'
import {List, Datagrid, TextField, Filter, SearchInput} from 'react-admin';

const CostCenterFilter = (props) => (
    <Filter {...props}>
        <SearchInput placeholder="Cost Center Name" source='costCenterNumber' resettable alwaysOn />
    </Filter>
)



export default function CostCenterList(props) {
    return (
       <List {...props} filters={<CostCenterFilter/>}>
            <Datagrid rowClick='edit'>
                <TextField source='id' label='ID' />
                <TextField source='costCenterNumber' label='Cost Center Number' />
                <TextField source='costCenterName' label='Cost Center Name' />  
            </Datagrid>
        </List> 
    );
}
