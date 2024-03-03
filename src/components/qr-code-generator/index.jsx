import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QrCodeGenerator = () => {
  const [qrCode, setQrCOde] = useState('')
  const [input, setInput] = useState('')

  const handleGenerateQrCode = () => {
    setQrCOde(input)
    setInput(' ')
  }
  return (
    <div>
      <h1>QrCodeGenerator</h1>
      <div>
        <input 
          type="text" 
          name='qr-code' 
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder='Enter your value here'/>
        <button 
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <dir>
        <QRCode 
          id='qr-code-value'
          value={qrCode}
          size={400}
          bgColor='white'
        />
      </dir>
    </div>
  )
}

export default QrCodeGenerator