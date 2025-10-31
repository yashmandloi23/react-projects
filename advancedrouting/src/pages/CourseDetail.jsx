import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const params = useParams();
  console.log(params);

  return (
    <div className="p-10">
      <h2>{params.id} CourseDetail</h2>
    </div>
  );
};

export default CourseDetail;
