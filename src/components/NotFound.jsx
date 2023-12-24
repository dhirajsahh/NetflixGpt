import { useSelector } from "react-redux";
import { language } from "../utlis/LanguageConstant";

const NotFound = () => {
  const lang = useSelector((state) => state?.config?.lang);
  return (
    <div className="">
      <h1 className="text-red-700 text-3xl text-center mt-5">
        {language[lang]?.NotfoundMessage}
      </h1>
    </div>
  );
};

export default NotFound;
