import React from 'react'
import {List, Datagrid, TextField, Filter, SearchInput, CreateProps} from 'react-admin';

const CostCenterFilter = (props: CreateProps) => (
    <Filter {...props}>
        <SearchInput placeholder="Cost Center Name" source='costCenterName' resettable alwaysOn />
    </Filter>
)



const CostCenterList = (props: CreateProps) => {
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

export default CostCenterList;
