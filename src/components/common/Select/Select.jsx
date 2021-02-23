import React, { memo } from "react";

// CSS
import "./Select.css";

const Select = React.forwardRef(({ label, options, defaultOption, name, error, ...rest }, ref) => {
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
