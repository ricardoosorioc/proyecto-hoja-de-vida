import React from 'react';

// Definimos una interfaz para las props
interface ContactDataProps {
  leftText: string;
  rightText: string;
  rightTextColor: string;
}

const ContactData: React.FC<ContactDataProps> = ({ leftText, rightText, rightTextColor }) => {
  return (
    <div className="flex flex-row w-full lg:w-auto justify-between">
      <span className=' text-sm'>{leftText}</span>
      <span className={` text-sm bg-${rightTextColor}`}>{rightText}</span>
    </div>
  );
}

export {ContactData};