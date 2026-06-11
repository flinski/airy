import { cn } from "@/lib/utils"

type ContainerProps = {
	children: React.ReactNode
	className?: string
}

const Container = ({ children, className = "" }: ContainerProps) => {
	return (
		<div className={cn("mx-auto max-w-300 px-3", className)}>{children}</div>
	)
}

export default Container
