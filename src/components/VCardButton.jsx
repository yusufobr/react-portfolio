import React from 'react';
import { saveAs } from 'file-saver';

const generateVCard = () => {
  // Replace the sample data with your actual vCard information
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Youssef OUBARI
N:OUBARI;Youssef;;;
TEL;TYPE=WORK,VOICE:0648125896
EMAIL:youssef.oubaari@gmail.com
END:VCARD` ;
  return new Blob([vCardData], { type: 'text/vcard' });
};


const VCardButton = () => {
    const handleDownload = () => {
      const vCardBlob = generateVCard();
      saveAs(vCardBlob, 'contact.vcf');
    };
  
    return (
      <button onClick={handleDownload}>
        Contact me
      </button>
    );
  };
  
  export default VCardButton;
  