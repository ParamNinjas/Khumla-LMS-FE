declare module 'react-number-input' {
    export default function NumberInput(props: {
      value: number;
      onChange: (value: number) => void;
      min?: number;
      max?: number;
      step?: number;
      arrowSize?: number;
      // Add other props as needed
    }): JSX.Element;
  }
  ``