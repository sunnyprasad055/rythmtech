import React from 'react'
import IndividualData from './IndividualData';


function Data({ excelData }) {
    return excelData.map((individualExcelData) => (
        <tr key={individualExcelData.id}>
            <IndividualData individualExcelData={individualExcelData} />
        </tr>
    )
    )
}

export default Data