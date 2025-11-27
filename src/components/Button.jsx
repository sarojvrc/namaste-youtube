const Button = ({ name }) => {
  return (
    <button className="bg-gray-400 font-semibold px-4 py-2 m-2 rounded-lg cursor-pointer">
      {name}
    </button>
  );
};

export default Button;
