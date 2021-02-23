import React, { memo } from "react";

// CSS
import "./Input.css";

const Input = React.forwardRef(({ label, error, name, ...rest }, ref) => {
	return (
		<div>
			{label && <label htmlFor={name}>{label}</label>}

			<div>
				<input id={name} className="input-field" ref={ref} name={name} {...rest} />
				{error && <div className="input-error">{error}</div>}
			</div>
		</div>
	);
});

export default memo(Input);
