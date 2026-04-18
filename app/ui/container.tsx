import { cn } from "@/app/lib/utils";

interface ContainerProps {
	children?: React.ReactNode;
	className?: string;
}

function Container({ children, className = "" }: ContainerProps) {
	return <div className={cn("mx-auto max-w-7xl", className)}>{children}</div>;
}

export default Container;
