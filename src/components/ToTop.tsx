import { ChevronUp } from "lucide-react";
import * as React from "react";

function ToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="rounded-full border border-border bg-background px-3 hover:bg-gray-100 "
        >
          <ChevronUp className="stroke-2" />
        </button>
      )}
    </div>
  );
}

export default ToTop;
