import { ThemeContext } from "@vactory/ui/theme-context"
import { useContext, useRef, useState } from "react"
import { Button } from "@vactory/ui/button"
import clsx from "clsx"

export const InputFile = ({
	label,
	variant = "default",
	placeholder,
	addonAfter,
	addonBefore,
	prefix,
	sufix,
	handleInputChange,
	hasError,
	errorMessage,
	description,
	props,
}) => {
	const { inputFile } = useContext(ThemeContext)
	const inputRef = useRef()

	const [choosedFile, setChoosedFile] = useState("Choose a file")

	const onInputChange = (e) => {
		handleInputChange?.(e.target.files[0])
		setChoosedFile(e.target.files[0].name)
	}

	const handleButtonClick = () => {
		inputRef.current.click()
	}

	return (
		<div>
			{label && <label className={clsx(inputFile[variant].label)}>{label}</label>}
			<div
				className={clsx(
					inputFile[variant].wrapper,
					hasError && inputFile[variant].hasError,
					"overflow-hidden"
				)}
			>
				{addonBefore && (
					<div className={clsx("flex", inputFile[variant].addonBefore)}>
						{addonBefore}
					</div>
				)}
				<span
					className={clsx(
						addonBefore && addonAfter
							? inputFile[variant].inputWrapper.inside
							: addonAfter
							? inputFile[variant].inputWrapper.left
							: addonBefore
							? inputFile[variant].inputWrapper.right
							: inputFile[variant].inputWrapper.full
					)}
				>
					{prefix && <div className="flex items-center pl-3">{prefix}</div>}
					<div className="grow-0 relative">
						<input
							ref={inputRef}
							onChange={onInputChange}
							className="absolute w-0 h-0 top-0 left-0 w-0 h-0"
							type="file"
							placeholder={placeholder}
							{...props}
						/>

						<p className="py-3 px-4 text-gray-400 truncate">{choosedFile}</p>
					</div>
				</span>

				{sufix && <div className="flex items-center pr-3">{sufix}</div>}

				<div className={clsx("flex", inputFile[variant].addonAfter)}>
					<Button onClick={handleButtonClick} className="h-full">
						Browse
					</Button>
				</div>
			</div>
			{errorMessage && hasError && (
				<p className={inputFile[variant].errorMessage}>{errorMessage}</p>
			)}
			{description && <p className={inputFile[variant].description}>{description}</p>}
		</div>
	)
}

export default InputFile
