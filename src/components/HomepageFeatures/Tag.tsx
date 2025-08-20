import React from 'react';

interface TagProps {
  color: string;
  children: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ color, children }) => {
  return (
    <span
      style={{
        backgroundColor: color,
        color: '#fff',
        padding: '4px 8px',
        borderRadius: '4px',
        fontSize: '14px',
        display: 'inline-block',
        fontWeight: 'bold'
      }}
    >
      {children}
    </span>
  );
};

export default Tag;

