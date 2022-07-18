import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

function PageButtons() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const pageIndex = Number(page) || 1;

  return (
    <div className="flex mx-auto mt-6 justify-around text-blue-500  w-2/3 lg:w-1/2">
      {pageIndex > 1 && (
        <Link to={`/github?page=${pageIndex - 1}`}>
          <div className="flex flex-col items-center group text-xl cursor-pointer">
            <KeyboardArrowLeft />
            <span className="group-hover:underline">Previous</span>
          </div>
        </Link>
      )}

      <Link to={`/github?page=${pageIndex + 1}`}>
        <div className="flex flex-col items-center text-xl group cursor-pointer">
          <KeyboardArrowRight />
          <span className="group-hover:underline">Next</span>
        </div>
      </Link>
    </div>
  );
}

export default PageButtons;
