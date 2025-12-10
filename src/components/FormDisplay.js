function FormDisplay({ form }) {
  return (
    <div className="flex mr-[.5vh] gap-[.3vh]">
      {form.split("").map((char, index) => {
        let color = "";
        if (char === "W") color = "bg-green-600";
        if (char === "L") color = "bg-red-600";
        if (char === "D") color = "bg-gray-500";

        return (
          <div
            key={index}
            className={`w-[3vh] h-[3vh] max-w-[3vh] p-[.2vh] ${color} flex items-center justify-center rounded-[.3vh] text-white text-[1.5vh] font-bold`}
          >
            {char}
          </div>
        );
      })}
    </div>
  );
}

export default FormDisplay;
