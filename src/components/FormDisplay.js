function FormDisplay({ form }) {
  return (
    <div style={{ display: "flex", gap: "6px" }}>
      {form.split("").map((char, index) => {
        let color = "";

        if (char === "W") color = "green";
        if (char === "L") color = "red";
        if (char === "D") color = "gray";

        return (
          <div
            key={index}
            style={{
              width: "22px",
              height: "22px",
              backgroundColor: color,
              borderRadius: "6px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {char}
          </div>
        );
      })}
    </div>
  );
}

export default FormDisplay;
