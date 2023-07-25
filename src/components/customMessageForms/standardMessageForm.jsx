import React, { useState } from "react";

function StandardMessageForm() {
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState("");
  const [attachments, setAttachments] = useState("");

  const handleChange = (e) => setMessage(e.target.value);

  return (
    <div className='message-from-constainer'>
      {preview && (
        <div className='message-from-preview'>
          <img
            atl='messsage-form-preview'
            className='messsage-form-preview-image'
            src={preview}
            onLoad={() => URL.revokeObjectURL(preview)}
          />
          <xMArkIcon
            className='message-form-icon-x'
            onClick={() => {
              setPreview("");
              setAttachments("");
            }}
          />
        </div>
      )}
      <div className='message-form'>
        <div className='message-from-input-container'>
          <input
            value={message}
            className='message-from-input'
            type='text'
            onChange={handleChange}
            placeholder='Send a message...'
          />
        </div>
      </div>
    </div>
  );
}

export default StandardMessageForm;
