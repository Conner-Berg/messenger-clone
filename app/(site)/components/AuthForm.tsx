'use client'

import React, {useState,useCallback} from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
	const [variant, setVariant] = useState<Variant>('LOGIN')
	const [isloading, setIsloading] = useState(false)

	const toggleVariant = useCallback(
		() => {
			if (variant === 'LOGIN') {
				setVariant('REGISTER')
			} else {
				setVariant('LOGIN')
			}
		},
		[variant],
	)
	
	const {
		register,
		handleSubmit,
		formState: {
			errors
		}
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		}
	})
	
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsloading(true)

		if (variant === 'REGISTER') {
			// Axios Register
		}

		if (variant === 'LOGIN') {
			// NextAuth SignIn
		}
	}

	const socialAction = (action: string) => {
		setIsloading(true)

		// NextAuth Social SignIn
	}

	return (
		<div
			className='
				mt-8
				sm:max-w-md
				sm:mx-auto
				sm:w-full
			'
		>
			<div
				className='
					px-4
					py-8
					shadow
					sm:px-10
					sm:rounded-lg
					bg-white
				'
			>
				
			</div>
		</div>
	)
}

export default AuthForm