import React,{useState} from 'react'
import Data from './Data'
import * as XLSX from 'xlsx'

function Page2() {


  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  console.log(excelFile)

  const [excelData, setExcelData] = useState(null);

  const handleChange= (e) => {
      const fileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
      let selectedFile = e.target.files[0]
      if(selectedFile) {
      //   console.log(selectedFile.type)
        if(selectedFile&&fileType.includes(selectedFile.type)) {
          let reader = new FileReader();
          reader.readAsArrayBuffer(selectedFile);
          reader.onload=(e)=> {
            setExcelFileError(null);
            setExcelFile(e.target.result);
          }
        }
        else{
          setExcelFileError('Please select only excel format files');
          setExcelFile(null)
        }
      }
      else{
        console.log('please select the file')
      }
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    if(excelFile !== null) {
        const workbook = XLSX.read(excelFile, {type:'buffer'});
        const worksheetName = workbook.SheetNames[0]
        const workSheet = workbook.Sheets[worksheetName]
        const data = XLSX.utils.sheet_to_json(workSheet)
        setExcelData(data)
    }else {
      setExcelData(null)
    }
  }

  return (
   <div>
    <div className='form'>
      <form className='form-group' autoComplete='off' onSubmit={handleSubmit}>
        <label>
          <h5>
            Upload Excel File to view the data  
          </h5>  
        </label>  <br />
        <input type='file' className='file' onChange={handleChange} required /><br />
         {excelFileError&&<div className='err'>{excelFileError}</div>}
        <button type='submit' className='btn-1'>Submit</button>
      </form>  
    </div>  

     
    <div className='viewer'>
      <h5>
      View Excel File  
    </h5>
      {excelData===null&&<>No file Selected</>}
      {excelData!==null&&(
        <div>
          <table>
            <thead>
               <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>First Name </th>
                  <th scope='col'>Last Name </th>
                  <th scope='col'>Gender </th>
                  <th scope='col'>Country </th>
                  <th scope='col'>Age </th>
                  <th scope='col'>Date </th>                  
                </tr>
            </thead>
             <tbody>
                <Data excelData={excelData}/>
              </tbody>
          </table>
        </div>
      )}
    </div>

     
   </div>
  )
}

export default Page2;