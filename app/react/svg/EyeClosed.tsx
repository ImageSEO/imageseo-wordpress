import React from "react";

export const SVGEyeClosed = ({ style = {}, className = "" }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			style={style}
			className={className}
		>
			<path
				fill="#000000"
				fillRule="nonzero"
				d="M.293.293a1 1 0 0 1 1.414 0l22 22a1 1 0 0 1-1.414 1.414l-4.468-4.466A11.089 11.089 0 0 1 12 21c-3.38 0-6.339-1.632-8.855-4.316a20.492 20.492 0 0 1-2.25-2.891l-.282-.449c-.086-.14-.162-.269-.23-.387l-.165-.295-.112-.215a1 1 0 0 1 .013-.92 19.45 19.45 0 0 1 4.45-5.544L.292 1.707a1 1 0 0 1 0-1.414zm2.085 11.314l-.235.396.131.223a18.513 18.513 0 0 0 2.33 3.09C6.777 17.632 9.255 19 11.985 19a9.07 9.07 0 0 0 4.387-1.214l-2.322-2.321A4 4 0 0 1 8.535 9.95L5.986 7.402a17.45 17.45 0 0 0-3.608 4.205zM12 3c3.38 0 6.339 1.632 8.855 4.316a20.492 20.492 0 0 1 2.25 2.891l.282.449c.086.14.162.269.23.387l.165.295.112.215a1 1 0 0 1-.012.918 19.5 19.5 0 0 1-2.277 3.363 1 1 0 0 1-1.53-1.288 17.5 17.5 0 0 0 1.518-2.102l.265-.446-.132-.224-.195-.316a18.513 18.513 0 0 0-2.136-2.774C17.224 6.367 14.745 5 11.998 5a8.121 8.121 0 0 0-1.87.214 1 1 0 0 1-.456-1.948A10.118 10.118 0 0 1 12 3zm-2.013 9.57a2 2 0 0 0 2.57 1.402l-2.53-2.53c-.118.358-.136.749-.04 1.128z"
			/>
		</svg>
	);
};
