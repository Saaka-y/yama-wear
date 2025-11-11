import { useState } from "react";

export function AccessInfo({ show, name, accessInfo, onClose, className }) {

  if (!show) return null;

  return (
    <div className={`${className} bg-white p-3 w-40 rounded shadow-md `}>
    <h3 className="font-bold">{name}</h3>
      <p>{accessInfo}</p>
      <button onClick={onClose} className="text-sm mt-1 underline">Close</button>
    </div>
  );
}
