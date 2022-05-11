import React, {useState} from 'react'
import jsPDF from 'jspdf'

function Page3() {
  const [textFile, setTextFile] = useState({
    fileName: "",
    fileContent:""
  });

  const handleChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onload = () => {
      setTextFile({fileName: file.name, fileContent: reader.result})
    }
    reader.onerror = () => {
      console.log('file error', reader.error)
    }
  }

  const pdfCoversion = (e) => {
    
    const fileName = textFile.fileName
    var doc = new jsPDF('p', 'pt', 'a4')
    doc.html(document.querySelector('#content'))
    doc.save(fileName)
  }
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Upload your .txt file to view the </h1>
      <input type="file" className='file' onChange={handleChange} />

      <br />
      <div id='content'>
      <p>{textFile.fileName}</p>
      <p>{textFile.fileContent}</p>
      </div>

      <button onClick={pdfCoversion} className='btn-1'>Download pdf</button>
    </div>
  )
}

export default Page3