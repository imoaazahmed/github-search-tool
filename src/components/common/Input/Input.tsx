import React, { memo } from "react";

// CSS
import "./Input.css";

interface Props {
	name: string;
	label?: string;
	error?: string;
	type?: string;
	placeholder?: string;
	autoFocus?: boolean;
	onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	ref?: React.Ref<HTMLInputElement>;
}

const Input: React.FC<Props> = React.forwardRef<HTMLInputElement, Props>(({ label, error, name, ...rest }, ref) => {
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
