import { Button } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";
import HomeIcon from '@mui/icons-material/Home';

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <div className="title" style={{fontSize: "80px"}}>Final Score : {score}</div>
      <Button
        variant="contained"
        startIcon={<HomeIcon/>}
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;