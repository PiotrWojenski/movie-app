import React from 'react'

const CustomArrow: React.FC<{
	className?: string
	style?: React.CSSProperties
	onClick?: () => void
	isNext?: boolean
}> = ({ className, style, onClick, isNext }) => {
	const baseStyle = 'z-10 absolute top-1/2 transform -translate-y-1/2 cursor-pointer'
	return (
		<div
			className={`${className} ${isNext ? 'right-0 mr-2' : 'left-0 ml-2'} ${baseStyle}`}
			style={{ ...style, display: 'block', background: 'none' }}
			onClick={onClick}
		/>
	)
}

export default CustomArrow
