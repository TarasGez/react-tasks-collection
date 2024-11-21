export default function Col({
  text,
  callBack,
}: {
  text: string;
  callBack: () => void;
}) {
  return (
    <div
      style={{
        width: "50px",
        height: "50px",
      }}
    >
      <button
        style={{
          border: "1px solid",
          borderColor: "black",
          width: "50px",
          height: "50px",
        }}
        onClick={callBack}
      >
        {text}
      </button>
    </div>
  );
}
