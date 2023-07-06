import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
	return (
		<div
			className="
				flex
				flex-col
				justify-center
				min-h-full
				sm:px-6
				lg:px-8
				bg-gray-100
			"
		>
			<div
				className="
					sm:max-w-md
					sm:mx-auto
					sm:w-full
				"
			>
				<Image
					src="/images/logo.png"
					alt="Logo"
					height={48}
					width={48}
					className="
						mx-auto
						w-auto
					"
				/>
				<h2
					className="
						font-bold
						mt-6
						text-3xl
						text-center
						tracking-tight
						text-gray-900
					"
				>
					Sign in to your account
				</h2>
			</div>
			{/* Auth Form */}
			<AuthForm />
		</div>
	);
}
