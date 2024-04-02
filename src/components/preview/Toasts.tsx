import { Button } from "../custom-ui";
import { useToast } from "../custom-ui/contexts/ToastProvider";

const Toasts = () => {
  const { showToast } = useToast();

  const handleShowToast = (type: "info" | "success" | "danger" | "warning") => {
    showToast(`This is ${type} Type`, type, "title");
  };

  const handleShowToast2 = (
    type: "info" | "success" | "danger" | "warning"
  ) => {
    showToast(`This is ${type} Type`, type, "", 7500);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <Button onClick={() => handleShowToast("success")} type="success">
        Success Toast
      </Button>

      <Button onClick={() => handleShowToast("info")} type="info">
        Info Toast
      </Button>

      <Button onClick={() => handleShowToast("danger")} type="danger">
        Danger Toast
      </Button>

      <Button onClick={() => handleShowToast("warning")} type="warning">
        Warning Toast
      </Button>

      <Button onClick={() => handleShowToast2("success")} type="success">
        Success Toast No title
      </Button>

      <Button onClick={() => handleShowToast2("info")} type="info">
        Info Toast No title
      </Button>

      <Button onClick={() => handleShowToast2("danger")} type="danger">
        Danger Toast No title
      </Button>

      <Button onClick={() => handleShowToast2("warning")} type="warning">
        Warning Toast No title
      </Button>
    </div>
  );
};

export default Toasts;
