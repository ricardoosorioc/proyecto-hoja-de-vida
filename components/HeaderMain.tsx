import React from 'react';

interface HaderMainProps {
  text1: string;
  text2: string;
}

const HeaderMain: React.FC<HaderMainProps> = ({ text1, text2 }) => {
  return (
    <div className="text-center bg-transparent my-6">
      <p className=" text-3xl font-bold py-4">{text1}</p>
      <p className=" text-sm text-slate-500 font-light">{text2}</p>
    </div>
  );
}

export {HeaderMain};