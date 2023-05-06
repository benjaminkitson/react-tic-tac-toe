type ButtonProps = {
  children: string;
  onClick: () => any;
  className: string;
};

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
