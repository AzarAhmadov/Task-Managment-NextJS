import { TypeFormTop } from "@/types/types";
import Link from "next/link";
import React, { memo } from "react";

const FormTop: React.FC<TypeFormTop> = ({
  title,
  description,
  href,
  linkText,
}) => {
  return (
    <div className="text-center mb-7">
      <h4 className="text-lg font-[600]">{title}</h4>
      <p className="text-sm mt-3 font-[400] text-[#00000072]">
        {description}
        <Link className="text-black font-[500] ms-1" href={href}>
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default memo(FormTop);
