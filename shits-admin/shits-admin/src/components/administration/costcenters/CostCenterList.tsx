import React, { FC } from 'react'
import {List, Datagrid, TextField, Filter, SearchInput, CreateProps} from 'react-admin';

const CostCenterFilter: FC<CreateProps> = (props) => (
    <Filter {...props}>
        <SearchInput placeholder="Cost Center Name" source='costCenterName' resettable alwaysOn />
    </Filter>
)



const CostCenterList: FC<CreateProps> = (props) => {
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
