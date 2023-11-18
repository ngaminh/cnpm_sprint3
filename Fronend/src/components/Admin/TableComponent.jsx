import { Divider, Radio, Table } from "antd";
import React from "react";
import Loading from "./Loading";

const TableComponent = (props) => {
    const { selectionType = 'checkbox', data = [], isLoading = false, columns = [] } = props

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled user',
            name: record.name,
        }),
    };
    return(
        <div>
            <Loading isLoading={isLoading}>
            <Divider />

            <Table 
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                {...props}
            />
            </Loading>
        </div>
    )
}

export default TableComponent