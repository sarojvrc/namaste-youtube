import Button from "./Button";

const ButtonList = () => {
  const listofButtons = [
    "All",
    "Music",
    "Gaming",
    "News",
    "Sports",
    "Movies",
    "Live",
    "Learning",
    "Fashion",
    "Comedy",
    "Cricket",
    "Cooking",
    "Travel",
    "Technology",
  ];

  return (
    <div className="flex">
      {listofButtons.map((buttonName) => (
        <Button key={buttonName} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
