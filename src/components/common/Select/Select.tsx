import React, { memo } from "react";

// CSS
import "./Select.css";

interface Options {
	name: string;
	value: any;
}

interface DefaultOption {
	name: string;
	value: any;
	disabled: boolean;
}

interface Props {
	name: string;
	label?: string;
	options?: Options[];
	defaultOption?: DefaultOption;
	error?: string;
	onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	ref?: React.Ref<HTMLSelectElement>;
}

const Select: React.FC<Props> = React.forwardRef<HTMLSelectElement, Props>(({ label, options, defaultOption, name, error, ...rest }, ref) => {
	return (
		<div>
			{label && <label htmlFor={name}>{label}</label>}

			<div className="custom-select">
				<select className="input-field" id={name} name={name} ref={ref} {...rest}>
					{defaultOption && (
						<option disabled={defaultOption.disabled} value={defaultOption.value}>
							{defaultOption.name}
						</option>
					)}

					{options &&
						options.map((item, index) => (
							<option key={index} value={item.value}>
								{item.name}
							</option>
						))}
				</select>

				{error && <div className="input-error">{error}</div>}
			</div>
		</div>
	);
});

export default memo(Select);
