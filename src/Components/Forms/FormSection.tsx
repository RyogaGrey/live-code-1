import React from 'react';
import { Rnd } from 'react-rnd';

interface FormSectionProps {
  children: React.ReactNode;
  id: string;
  layout: any;
  onLayoutChange: (newLayout: any) => void;
}

const FormSection: React.FC<FormSectionProps> = ({ children, id, layout, onLayoutChange }) => {
  return (
    <Rnd
      key={id}
      className="form-section"
      layout={layout}
      onLayoutChange={(newLayout: any) => onLayoutChange(newLayout)}
      style={{ padding: '16px', margin: '16px 0' }}
    >
        {children}
    </Rnd>
  );
};

export default FormSection;
