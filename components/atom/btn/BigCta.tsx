import { BigButton } from "./Big_Cta";

type Button = {
  Icon: any;
  text: string | number;
  showIcon?: boolean;
  type: "button" | "submit"
};
const BigCta: React.FC<Button> = ({ Icon, text, showIcon, type }) => {
  return (
    <>
      <BigButton type={type}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {showIcon && (
            <span>
              <Icon style={{ fontSize: "1.5rem" }} />
            </span>
          )}
          <span style={{ marginLeft: "12px" }}>{text}</span>{" "}
        </div>
      </BigButton>
    </>
  );
};

export default BigCta;
