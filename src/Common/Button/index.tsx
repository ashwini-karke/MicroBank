import "./styles.css";

interface ButtonProps {
  buttonLabel: string;
  buttonValidation: string;
  onClickHandler: (e: React.MouseEvent<HTMLElement>) => void;
}
export default function ButtonComponent(props: ButtonProps) {
  const { buttonLabel, buttonValidation, onClickHandler } = props;
  return (
    <div className="btn-wrapper">
      <p className="button-validation-err">{buttonValidation}</p>
      <button className="button-component" onClick={onClickHandler}>
        {buttonLabel}
      </button>
    </div>
  );
}
